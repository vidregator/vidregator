import { useState, useEffect } from 'react'

export default (ms = 100, defaultValue = false) => {
  const [ bool, setBool ] = useState(defaultValue)
  useEffect(() => {
    const timeout = setTimeout(() => setBool(!defaultValue), ms)
    return () => clearTimeout(timeout)
  })
  return bool
}