import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Card } from './Card'
import { Loading } from './Loading'
import { Pagination } from './Pagination'

export const List = ({ initialURL }) => {
  const [apiURL, setApiURL] = useState(initialURL)

  const { data, loading, startFetching } = useFetch(apiURL)

  useEffect(() => {
    startFetching()
  }, [apiURL])

  return (
    <>
      {loading ? (
        <section className='container p-3 mt-10 shadow-md rounded-md bg-gray-50'>
          <Loading />
        </section>
      ) : (
        <section className='container p-3 mt-10 shadow-md rounded-md bg-gray-50'>
          {data && (
            <>
              <Pagination
                next={data.info.next}
                prev={data.info.prev}
                changeURL={setApiURL}
              />

              <div className='flex flex-wrap justify-center my-5'>
                {data.results.map((character) => (
                  <Card key={character.id} data={character} />
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </>
  )
}

// next={data.data.info.next} prev={data.data.info.prev}
