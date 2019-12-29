import search from '../../../lib/search'
import cleanQuery from '../../../lib/cleanQuery'

export default async (req, res) => {
  const query = req.query.query || ''
  const cleanedQuery = cleanQuery(query)
  if (cleanedQuery.length <= 0) {
    return res.status(400).send('Please enter a query!')
  }

  try {
    const results = await search(cleanedQuery)
    return res.status(200).json(results)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error.message)
  }
}