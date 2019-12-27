# Vidregator Core

Vidregator is a project that aims to let anyone run video aggregator sites super easily.

If you want to get started, run the below commands in a shell. If you need help with anything feel free to create a GitHub Issue.

[![Run on Repl.it](https://repl.it/badge/github/vidregator/vidregator)](https://repl.it/github/vidregator/vidregator)

```
git clone https://github.com/vidregator/vidregator.git
cd vidregator
yarn dev
```

## Adding Sites

This repository only provides the base interface and infrastructure to create your very own video aggregator website. To actually get videos from sites to Vidregator you'll need to write some simple JavaScript code.

Look in the `sites/` directory for some examples.

In essence:

- `sites/index.js` must export an array of sites
- Each site is of the structure `{ name: string, search: function }`
- `search` is a function that:
  - May return a `Promise`
  - May be marked as `async`
  - Must return an object of this structure: 
  ```
  {
    name: string,
    description: string,
    tags: array,
    uploadDate: number,
    url: string,
    image: string
  }
  ```

## Legal Notes

Aggregators are tricky, especially with multimedia content. We (the developers) of Vidregator try to keep any code, especially scraping-related, out of this repository. This is one of the reasons we encourage site owners to write their own data pulling code.

Nevertheless, if you or the organization you are employed at believes any code in this repository is infringing on your rights do not hesitate to create a GitHub Issue.

## Planned Features

- Recommended videos
- Popular videos
- Profile syncing
- More site examples
- Legal review