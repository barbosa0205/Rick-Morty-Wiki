import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import { useFetch } from '../hooks/useFetch'
import { Loading } from '../components/Loading'
import { Card } from '../components/Card'
export const AllLocations = () => {
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/location/'
  )

  const { data: locations, startFetching, loading } = useFetch(apiURL)

  useEffect(() => {
    startFetching()
  }, [])

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl text-center font-bold text-emerald-600 mt-10'>
        All Locations
      </h1>

      <List initialURL={'https://rickandmortyapi.com/api/location'}></List>
    </main>
  )
}
