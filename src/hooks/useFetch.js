import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [startFetch, setStartFetch] = useState(false)

  const startFetching = () => {
    setStartFetch(true)
  }

  const fetchData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setData(data)
    } catch (error) {
      setData({
        success: false,
        data: null,
      })
    }
  }

  useEffect(() => {
    if (startFetch) {
      setLoading(true)
      fetchData(url)
      setLoading(false)
      setStartFetch(false)
    }

    return () => {
      setData(null)
      setLoading(false)
      setStartFetch(false)
    }
  }, [startFetch])

  return { data, loading, startFetching }
}
