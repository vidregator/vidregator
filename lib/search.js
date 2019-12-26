import sites from '../sites/index'

export default async (query) => {
  const allResults = []
  const promises = []

  for (let site of sites) {
    promises.push((async () => {
      const results = await site.search(query)
      allResults.push({
        name: site.name,
        results
      })
    })())
  }
  
  await Promise.all(promises)
  return allResults
}