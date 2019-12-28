import sites from '../sites/index'
import { get, set } from './optionalAsyncCache'

export default async (query) => {
  const cached = await get(query)
  if (cached) return JSON.parse(cached)

  const allResults = []
  const promises = []

  for (let i = 0; i < sites.length; i++) {
    promises.push((async () => {
      const results = await sites[i].search(query)
      allResults[i] = {
        name: sites[i].name,
        results
      }
    })())
  }
  
  await Promise.all(promises)
  await set(query, JSON.stringify(allResults), 'EX', 60 * 60 * 24)
  return allResults
}