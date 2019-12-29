import { useState } from 'react'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import { useDebounce } from 'use-debounce'
import Global from '../components/Global'
import SearchBox from '../components/SearchBox'
import VideoSection from '../components/VideoSection'
import Loader from '../components/Loader'
import Stack from '../components/Stack'
import apiSearch from '../lib/apiSearch'

const registerVisit = async (tags) => {
  const res = await fetch(`/api/interests/add/${encodeURIComponent(JSON.stringify(tags))}`)
  if (!res.ok) console.error(await res.text())
}

export default () => {
  const [ query, setQuery ] = useState('')
  const [ debouncedQuery ] = useDebounce(query, 500)
  const searchRes = useSWR(debouncedQuery, apiSearch)
  const suggestionsRes = useSWR('/api/interests/suggestions', (url) => fetch(url).then((res) => res.json()))

  return (
    <Global>
      <Stack space={48}>
        <SearchBox
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for anything...'
        />

        {query.trim() && (searchRes.error ? `Error! ${searchRes.error.message}` : searchRes.data ? (
          searchRes.data.map((site) => site.results.length > 0 ? (
            <VideoSection
              name={site.name}
              videos={site.results}
              key={site.name}
              onVideoVisit={registerVisit}
            />
          ) : null)
        ) : <Loader />)}

        {suggestionsRes.error ? `Error! ${suggestionsRes.error.message}` : suggestionsRes.data ? (
          suggestionsRes.data.map((suggestion) => (
            <VideoSection
              name={suggestion.name}
              videos={suggestion.videos}
              key={suggestion.name}
              onVideoVisit={registerVisit}
            />
          ))
        ) : <Loader />}
      </Stack>
    </Global>
  )
}