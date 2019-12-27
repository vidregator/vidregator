export default {
  name: 'Test',
  search: (query) => [
    {
      name: query,
      description: `Lorem ipsum dolor sit amet. This is an example result for the query "${query}"`,
      tags: query.split(' '),
      uploadDate: Date.now(),
      url: 'https://example.com/',
      image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C14D27F582C0ADB8BC1080627E6D862D4726FBB770B1CDF5996A34BA59CAF24/scale?width=800&aspectRatio=1.78&format=jpeg'
    },
    {
      name: `${query} test bruh oof lmao lol bruhhhh wtf lol`,
      description: `Lorem ipsum dolor sit amet. This is an example result for the query "${query}"`,
      tags: query.split(' '),
      uploadDate: Date.now(),
      url: 'https://example.com/',
      image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/518D85C73B76D171A7677845E749177A8A238E688BEA228B6F3B493BBE5E79D6/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals'
    }
  ]
}