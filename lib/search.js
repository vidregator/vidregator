import sites from '../sites/index'

export default async (query) => {
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
  return allResults
}