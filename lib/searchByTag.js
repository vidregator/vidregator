import sites from '../sites/index'
import { get, set } from './optionalAsyncCache'

export default async (tag, count = 1) => {
  const cacheKey = `tagSearch:${count}:${tag}`
  const cached = await get(cacheKey)
  if (cached) return JSON.parse(cached)

  const allResults = []

  let siteIndex = 0
  while (allResults.length < count) {
    const remaining = count - allResults.length
    const promises = []

    for (let i = 0; i < remaining; i++) {
      promises[i] = (async () => {
        const results = await sites[siteIndex % sites.length].searchByTag(tag, 1)
        siteIndex++
        if (!results[0]) return
        allResults.push(results[0])
      })()
    }
    
    await Promise.all(promises)
  }
  
  await set(cacheKey, JSON.stringify(allResults), 'EX', 60 * 30)
  return allResults
}