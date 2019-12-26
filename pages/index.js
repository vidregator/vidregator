import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import apiSearch from '../lib/apiSearch'

export default () => {
  const { data, error } = useSWR('test lol', apiSearch)

  return (
    <div>
      <Head>
        <title>Vidregator</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css' />
      </Head>

      {error ? 'Error!' : data ? (
        data.map((site) => (
          <div>
            <strong>{site.name}</strong><br/>
            <ul>{site.results.map((result) => (
              <li>
                <strong>{result.name}</strong><br/>
                Description:  {result.description}<br/>
                Tags: {result.tags.join(', ')}
              </li>
            ))}</ul>
          </div>
        ))
      ) : 'Loading...'}
    </div>
  )
}