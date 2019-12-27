import { useState } from 'react'
import useSWR from 'swr'
import { useDebounce } from 'use-debounce'
import Global from '../components/Global'
import SearchBox from '../components/SearchBox'
import VideoSection from '../components/VideoSection'
import Stack from '../components/Stack'
import apiSearch from '../lib/apiSearch'

export default () => {
  const [ query, setQuery ] = useState('')
  const [ debouncedQuery ] = useDebounce(query, 800)
  const { data, error } = useSWR(debouncedQuery, apiSearch)

  return (
    <div>
      <Global />

      <Stack space={48}>
        <SearchBox
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for anything...'
        />

        {query.trim() && (error ? `Error! ${error.message}` : data ? (
          data.map((site) => (
            <VideoSection
              name={site.name}
              videos={site.results}
            />
          ))
        ) : 'Loading...')}
      </Stack>
    </div>
  )
}