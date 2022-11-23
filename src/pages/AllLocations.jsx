import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import { useFetch } from '../hooks/useFetch'
import { Loading } from '../components/Loading'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination'
import { ListContainer } from '../components/ListContainer'
import { LinkItem } from '../components/LinkItem'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export const AllLocations = () => {
  const { t } = useTranslation()
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/location/'
  )

  const { data, startFetching, loading } = useFetch(apiURL)

  useEffect(() => {
    startFetching()
  }, [apiURL])

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl text-center font-bold text-emerald-600 mt-10'>
        {t('NavAllLocations.text')}
      </h1>

      <List loading={loading}>
        {data && (
          <>
            <Pagination
              next={data.info.next}
              prev={data.info.prev}
              changeURL={setApiURL}
            />
            <ListContainer
              title={t('LocationListTitle.text')}
              maxWidth='max-w-7xl'
            >
              {data.results.map((location) => (
                <LinkItem key={location.id} title={`${location.name}`}>
                  <Link
                    to={`/single-location/${location.id}`}
                    className='text-4xl text-center py-5 text-cyan-600 hover:text-sky-500 hover:underline hover:underline-offset-2'
                  >{`${t('LocationGo.text')} ${location.name}`}</Link>
                </LinkItem>
              ))}
            </ListContainer>
          </>
        )}
      </List>
    </main>
  )
}
