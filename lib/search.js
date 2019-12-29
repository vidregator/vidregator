import sites from '../sites/index'
import { get, set } from './optionalAsyncCache'

export default async (query, count = 5) => {
  const cacheKey = `standardSearch:${query}`
  const cached = await get(cacheKey)
  if (cached) return JSON.parse(cached)

  const allResults = []
  const promises = []

  for (let i = 0; i < sites.length; i++) {
    promises[i] = async () => {
      const results = await sites[i].search(query, count)
      allResults[i] = {
        name: sites[i].name,
        results
      }
    }
  }
  
  await Promise.all(promises)
  await set(cacheKey, JSON.stringify(allResults), 'EX', 60 * 60 * 24)
  return allResults
}