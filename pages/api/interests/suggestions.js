import { parse } from 'cookie'
import shuffle from 'array-shuffle'
import searchByTag from '../../../lib/searchByTag'

export default async (req, res) => {
  try {
    const cookies = parse(req.headers.cookie)
    const interests = cookies.interests ? JSON.parse(cookies.interests) : []
    if (interests.length <= 0) return res.status(200).json([])

    const suggestions = []

    const top5 = {}
    for (let i = 0; i < 5; i++) {
      const interest = interests[i % interests.length]
      if (top5[interest]) {
        top5[interest]++
      } else {
        top5[interest] = 1
      }
    }
    const top5SuggestionsPromises = []
    for (let key of Object.keys(top5)) {
      top5SuggestionsPromises.push(searchByTag(key, top5[key]))
    }
    suggestions.push({
      name: 'Recommended For You',
      videos: shuffle(await Promise.all(top5SuggestionsPromises))
    })

    if (interests.length > 3) {
      for (let tag of interests.slice(1, 4)) {
        suggestions.push({
          name: `More tagged #${tag}`,
          videos: shuffle(await searchByTag(tag, 5))
        })
      }
    }

    return res.status(200).json(suggestions)
  } catch (error) {
    console.error(error)
    return res.status(200).json([])
  }
}