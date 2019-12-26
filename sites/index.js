module.exports = [
  {
    name: 'Test',
    search: (query) => new Promise((resolve) => {
      setTimeout(() => resolve([
        {
          name: query,
          description: `Lorem ipsum dolor sit amet. This is an example result for the query "${query}"`,
          tags: query.split(' '),
          uploadDate: new Date(),
          url: 'https://example.com/'
        }
      ]), 2000)
    })
  }
]