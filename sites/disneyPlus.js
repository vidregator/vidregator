import fetch from 'isomorphic-unfetch'
import slugify from 'slugify'

const typeToPlural = {
  'DmcVideo': 'movies',
  'DmcSeries': 'series'
}
const typeToSingular = {
  'DmcVideo': 'movie',
  'DmcSeries': 'series'
}

const search = async (query, count) => {
  const url = [
    'https://search-api-disney.svcs.dssott.com',
    '/svc/search/v2/graphql/persisted/query/core/disneysearch',
    '?variables=',
    encodeURIComponent(JSON.stringify({
      preferredLanguage: [ 'en' ],
      index: 'disney_global',
      q: query
    }))
  ].join('')

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.DISNEY_PLUS_BEARER}`
    }
  })
  const json = await res.json()

  return json.data.disneysearch.hits.slice(0, count).map(({ hit }) => {
    const videoUrl = `https://www.disneyplus.com/${typeToPlural[hit.type]}/${
      hit.texts
        .find(({ field, type }) => field === 'title' && type === 'slug')
        .content
    }/${hit.encodedParentOf}`

    const image = hit.images
      .filter(({ aspectRatio }) => aspectRatio === 1.78)
      .sort((a, b) => a.width > b.width ? -1 : 1)[0]
      .url

    return {
      name: hit.texts.find(({ field, type }) => field === 'title' && type === 'full').content,
      description: hit.texts.find(({ field, type }) => field === 'description' && type === 'medium').content,
      tags: [ typeToSingular[hit.type], ...hit.genres.map((genre) => slugify(genre, { lower: true })) ],
      uploadDate: Date.parse(hit.currentAvailability.appears),
      url: videoUrl,
      image
    }
  })
}

export default {
  name: 'Disney+',
  search,
  searchByTag: async (tag, count) => {
    if (tag === 'movie' || tag === 'series') return []
    console.log('owo', tag)
    return await search(tag.replace('-', ' '), count)
  }
}