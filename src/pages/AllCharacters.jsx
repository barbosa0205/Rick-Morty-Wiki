import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import { Pagination } from '../components/Pagination'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'
import { useTranslation } from 'react-i18next'
export const AllCharacters = () => {
  const { t } = useTranslation()
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/character'
  )

  const { data, loading, startFetching } = useFetch(apiURL)

  useEffect(() => {
    startFetching()
  }, [apiURL])

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl text-center font-bold text-emerald-500 mt-10'>
        {t('NavAllCharacters.text')}
      </h1>

      <List loading={loading}>
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
            <Pagination
              next={data.info.next}
              prev={data.info.prev}
              changeURL={setApiURL}
            />
          </>
        )}
      </List>
    </main>
  )
}
