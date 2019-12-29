import fetch from 'isomorphic-unfetch'

const fetchAndFormat = async (q, count) => {
  const res = await fetch(`https://unogs.com/nf.cgi?u=5unogs&q=${q}&st=adv&ob=Relevance&p=1&l=100&inc=&ao=and`, {
    headers: {
      'Host': 'unogs.com',
      'Referer': 'https://unogs.com/',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  const json = await res.json()

  return json.ITEMS.slice(0, count).map(([ id, name, image, description, __, ___, type, year ]) => {
    const date = new Date()
    date.setYear(year)

    return {
      name,
      image,
      description,
      tags: [ type ],
      uploadDate: date.getTime(),
      url: `https://www.netflix.com/watch/${id}`
    }
  })
}

export default {
  name: 'Netflix',
  search: async (query, count) => await fetchAndFormat(`${encodeURIComponent(query)}-!1900,${new Date().getFullYear()}-!0,5-!0,10-!0,10-!Any-!Any-!Any-!Any-!I%20Don&t=ns&cl=21,23,26,29,33,307,45,39,327,331,334,265,337,336,269,267,357,65,67,392,268,400,402,408,412,447,348,270,73,34,425,432,46,78`, count),
  searchByTag: async (tag, count) => {
    if (tag === 'movie' || tag === 'series') {
      return await fetchAndFormat(`-!1900,${new Date().getFullYear()}-!0,5-!0,10-!0,10-!Any-!${tag}-!Any-!Any-!I%20Don&t=ns&cl=21,23,26,29,33,307,45,39,327,331,334,265,337,336,269,267,357,65,67,392,268,400,402,408,412,447,348,270,73,34,425,432,46,78`, count)
    } else return []
  }
}