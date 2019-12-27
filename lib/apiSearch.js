import fetch from 'isomorphic-unfetch'

export default async (query) => {
  if (!query.trim()) return null

  const cached = typeof window === 'object' && window.localStorage.getItem(`cache:${encodeURIComponent(query)}`)
  if (cached) return JSON.parse(cached)

  const res = await fetch(`/api/search/${encodeURIComponent(query)}`)
  if (res.ok) {
    const json = await res.json()
    typeof window === 'object' && window.localStorage.setItem(`cache:${encodeURIComponent(query)}`, JSON.stringify(json))
    return json
  } else {
    throw new Error(await res.text())
  }
}