import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import planetImg from '../assets/planet.png'
import { Loading } from '../components/Loading'
import { Label } from '../components/Label'
import { ListContainer } from '../components/ListContainer'
import { LinkItem } from '../components/LinkItem'
import { Card } from '../components/Card'
import { useTranslation } from 'react-i18next'
export const SingleLocation = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const [residents, setResidents] = useState([])

  const {
    data: location,
    startFetching,
    loading,
  } = useFetch(`https://rickandmortyapi.com/api/location/${id}`)

  const fetchResidents = async (urls) => {
    let newUrls = urls
    if (urls.length > 100) {
      newUrls = urls.slice(100)
    }
    const results = await Promise.all(
      newUrls.map((url, index) => fetch(url).then((r) => r.json()))
    )
    return results
  }

  useEffect(() => {
    startFetching()
  }, [])

  useEffect(() => {
    if (location) {
      ;(async () => {
        const residentsData = await fetchResidents(location.residents)

        setResidents(residentsData)
      })()
    }
  }, [location])

  return (
    <>
      {location ? (
        <>
          <header className='flex flex-col items-center'>
            <img
              className='max-w-xl mx-auto mt-20'
              src={planetImg}
              alt='planet'
            />
            <h1 className='text-center text-7xl font-bold my-10 text-zinc-800 dark:text-zinc-100'>
              {location.name}
            </h1>

            <section className='flex flex-wrap items-center justify-evenly p-5 shadow-sm bg-zinc-200 rounded-xl dark:bg-zinc-800'>
              <Label
                text={
                  location.type === 'Planet'
                    ? t('TypePlanet.text')
                    : location.type === 'Cluster'
                    ? t('TypeCluster.text')
                    : location.type === 'Microverse'
                    ? t('TypeMicroverse.text')
                    : location.type === 'Resort'
                    ? t('TypeResort.text')
                    : location.type === 'Fantasy town'
                    ? t('TypeFantasyTown.text')
                    : location.type
                }
                icon='ri-earth-line'
                title={'Type'}
              />
              <Label
                text={
                  location.dimension === 'Fantasy Dimension'
                    ? t('DimensionFantasy.text')
                    : location.dimension === 'unknown'
                    ? t('Unknown.text')
                    : location.dimension === 'Post-Apocalyptic Dimension'
                    ? t('DimensionPostApocalyptic.text')
                    : location.dimension
                }
                icon={'ri-space-ship-line'}
                title={'Dimension'}
              />
            </section>
          </header>
          <section>
            <h1 className='text-center text-5xl font-bold mt-20 dark:text-zinc-100'>
              {t('AllCharactersInLocation.text')}
            </h1>
            <div className='flex flex-wrap justify-center my-5'>
              {residents
                ? residents.map((resident) => (
                    <Card key={resident.id} data={resident} />
                  ))
                : ''}
            </div>
          </section>
        </>
      ) : (
        <section className='h-screen w-full flex items-center justify-center'>
          <Loading />
        </section>
      )}
    </>
  )
}
