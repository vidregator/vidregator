import fetch from 'isomorphic-unfetch'

export default async (query) => {
  const res = await fetch(`/api/search/${encodeURIComponent(query)}`)
  if (res.ok) {
    return await res.json()
  } else {
    throw new Error(await res.text())
  }
}