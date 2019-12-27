import fetch from 'isomorphic-unfetch'

export default {
  name: 'Netflix',
  search: async (query) => {
    const res = await fetch(`https://unogs.com/nf.cgi?u=5unogs&q=${encodeURIComponent(query)}-!1900,2019-!0,5-!0,10-!0,10-!Any-!Any-!Any-!Any-!I%20Don&t=ns&cl=21,23,26,29,33,307,45,39,327,331,334,265,337,336,269,267,357,65,67,392,268,400,402,408,412,447,348,270,73,34,425,432,46,78&st=adv&ob=Relevance&p=1&l=100&inc=&ao=and`, {
      headers: {
        'Host': 'unogs.com',
        'Referer': 'https://unogs.com/',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const json = await res.json()

    return json.ITEMS.slice(0, 5).map(([ id, name, image, description, __, ___, type, year ]) => {
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
}