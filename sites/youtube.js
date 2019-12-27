import fetch from 'isomorphic-unfetch'
import unescape from 'unescape'

const topics = {
  '/m/04rlf': [ 'music' ],
  '/m/05fw6t': [ 'music', 'childrens-music' ],
  '/m/02mscn': [ 'music', 'christian-music' ],
  '/m/0ggq0m': [ 'music', 'classical-music' ],
  '/m/01lyv': [ 'music', 'country' ],
  '/m/02lkt': [ 'music', 'electronic-music' ],
  '/m/0glt670': [ 'music', 'hip-hop' ],
  '/m/05rwpb': [ 'music', 'independent-music' ],
  '/m/03_d0': [ 'music', 'jazz' ],
  '/m/028sqc': [ 'music', 'asia' ],
  '/m/0g293': [ 'music', 'latin-america' ],
  '/m/064t9': [ 'music', 'pop-music' ],
  '/m/06cqb': [ 'music', 'reggae' ],
  '/m/06j6l': [ 'music', 'rhythm-and-blues' ],
  '/m/06by7': [ 'music', 'rock-music' ],
  '/m/0gywn': [ 'music', 'soul' ],
  '/m/0bzvm2': [ 'gaming' ],
  '/m/025zzc': [ 'gaming', 'action-games' ],
  '/m/02ntfj': [ 'gaming', 'action-games' ],
  '/m/0b1vjn': [ 'gaming', 'casual-gaming' ],
  '/m/02hygl': [ 'gaming', 'music-games' ],
  '/m/04q1x3q': [ 'gaming', 'puzzles' ],
  '/m/01sjng': [ 'gaming', 'racing-games', 'racing' ],
  '/m/0403l3g': [ 'gaming', 'rpg' ],
  '/m/021bp2': [ 'gaming', 'simulation' ],
  '/m/022dc6': [ 'gaming', 'sports' ],
  '/m/03hf_rm': [ 'gaming', 'strategy' ],
  '/m/06ntj': [ 'sports' ],
  '/m/0jm_': [ 'sports', 'soccer' ],
  '/m/018jz': [ 'sports', 'baseball' ],
  '/m/018w8': [ 'sports', 'basketball' ],
  '/m/01cgz': [ 'sports', 'boxing' ],
  '/m/09xp_': [ 'sports', 'cricket' ],
  '/m/02vx4': [ 'sports', 'football' ],
  '/m/037hz': [ 'sports', 'golf' ],
  '/m/03tmr': [ 'sports', 'ice-hockey' ],
  '/m/01h7lh': [ 'sports', 'martial-arts' ],
  '/m/0410tth': [ 'sports', 'motorsport' ],
  '/m/066wd': [ 'sports', 'wrestling' ],
  '/m/07bs0': [ 'sports', 'tennis' ],
  '/m/07_53': [ 'sports', 'volleyball' ],
  '/m/02jjt': [ 'entertainment' ],
  '/m/095bb': [ 'entertainment', 'animation', 'cartoon' ],
  '/m/09kqc': [ 'entertainment', 'humor' ],
  '/m/02vxn': [ 'entertainment', 'movies' ],
  '/m/05qjc': [ 'entertainment', 'performing-arts' ],
  '/m/019_rr': [ 'lifestyle' ],
  '/m/032tl': [ 'lifestyle', 'fashion' ],
  '/m/027x7n': [ 'lifestyle', 'fitness', 'health' ],
  '/m/02wbm': [ 'lifestyle', 'food', 'health' ],
  '/m/0kt51': [ 'lifestyle', 'health' ],
  '/m/03glg': [ 'lifestyle', 'hobby' ],
  '/m/068hy': [ 'lifestyle', 'pets' ],
  '/m/041xxh': [ 'lifestyle', 'beauty' ],
  '/m/07c1v': [ 'technology', 'knowledge' ],
  '/m/07bxq': [ 'tourism', 'society' ],
  '/m/07yv9': [ 'vehicles' ],
  '/m/01k8wb': [ 'knowledge', 'society' ],
  '/m/098wr': [ 'society' ]
}

export default {
  name: 'YouTube',
  search: async (query) => {
    const res1 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${encodeURIComponent(process.env.YOUTUBE_API_KEY)}`, {
      headers: {  'Accept': 'application/json' }
    })
    const json1 = await res1.json()

    if (json1.error) {
      throw new Error(json1.error.errors[0].message)
    }

    const videoTags = await Promise.all(json1.items.map((item) => (async () => {
      const res2 = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=topicDetails&id=${encodeURIComponent(item.id.videoId)}&maxResults=1&key=${encodeURIComponent(process.env.YOUTUBE_API_KEY)}`, {
        headers: {  'Accept': 'application/json' }
      })
      const json2 = await res2.json()

      const tags = []
      for (let topicId of json2.items[0].topicDetails.relevantTopicIds) {
        if (!topics[topicId]) continue
        for (let tag of topics[topicId]) {
          if (tags.includes(tag)) continue
          tags.push(tag)
        }
      }
      if (tags.length === 0) tags.push('other')
      return tags
    })()))

    return json1.items.map((item, index) => ({
      name: unescape(item.snippet.title),
      description: unescape(item.snippet.description),
      tags: videoTags[index],
      uploadDate: Date.parse(item.snippet.publishedAt),
      url: `https://youtube.com/watch?v=${item.id.videoId}`,
      image: item.snippet.thumbnails.default.url
    }))
  }
}