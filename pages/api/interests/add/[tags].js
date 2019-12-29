import { parse, serialize } from 'cookie'

export default (req, res) => {
  const passedTags = req.query.tags || ''
  if (passedTags.length <= 0) {
    return res.status(400).send('Please send some tags')
  }

  let tags = null
  try {
    tags = JSON.parse(passedTags)
  } catch (error) {
    return res.status(400).send('Invalid tag JSON')
  }

  try {
    const cookies = parse(req.headers.cookie)
    const interests = cookies.interests ? JSON.parse(cookies.interests) : []

    for (let tag of tags) {
      const existingIndex = interests.indexOf(tag)
      if (existingIndex > -1) interests.splice(existingIndex, 1)
      interests.unshift(tag)
    }

    res.setHeader('Set-Cookie', serialize('interests', JSON.stringify(interests.slice(0, 120)), { path: '/' }))
    return res.status(200).send('Success!')
  } catch (error) {
    console.error(error)
    return res.status(500).send(error.message)
  }
}