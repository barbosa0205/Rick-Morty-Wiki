import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkItem } from '../components/LinkItem'
import { List } from '../components/List'
import { ListContainer } from '../components/ListContainer'
import { Pagination } from '../components/Pagination'
import { useFetch } from '../hooks/useFetch'

export const AllEpisodes = () => {
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/episode/'
  )

  const { data, startFetching, loading } = useFetch(apiURL)

  useEffect(() => {
    startFetching()
  }, [apiURL])

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl text-center font-bold text-emerald-600 mt-10'>
        All Episodes
      </h1>

      <List loading={loading}>
        {data && (
          <>
            <Pagination
              next={data.info.next}
              prev={data.info.prev}
              changeURL={setApiURL}
            />
            <ListContainer title={`EPISODES`} maxWidth='max-w-7xl'>
              {data.results.map((episode) => (
                <LinkItem title={episode.name} key={episode.id}>
                  <Link
                    className='text-4xl text-center py-5 text-cyan-600 hover:text-sky-500 hover:underline hover:underline-offset-2'
                    to={`/single-episode/${episode.id}`}
                  >
                    Watch episode{' '}
                    {episode.episode.slice(
                      episode.episode.lastIndexOf('S') + 1,
                      episode.episode.lastIndexOf('E')
                    )}{' '}
                    X{' '}
                    {episode.episode.slice(
                      episode.episode.lastIndexOf('E') + 1
                    )}
                  </Link>
                </LinkItem>
              ))}
            </ListContainer>
          </>
        )}
      </List>
    </main>
  )
}
