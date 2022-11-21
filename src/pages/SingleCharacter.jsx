import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Label } from '../components/Label'
import { LinkItem } from '../components/LinkItem'
import { ListContainer } from '../components/ListContainer'
import { ListItem } from '../components/ListItem'
import { Loading } from '../components/Loading'
import { useFetch } from '../hooks/useFetch'

export const SingleCharacter = () => {
  const { id } = useParams()

  // const [character, setCharacter] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [episodesLoading, setEpisodesLoading] = useState(false)
  const {
    data: character,
    startFetching,
    loading,
  } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

  useEffect(() => {
    startFetching()
  }, [])

  useEffect(() => {
    if (character) {
      let array = []
      character.episode.map((ep) => {
        array.push({
          id: ep.substring(ep.lastIndexOf('/') + 1, ep.length),
          url: ep,
        })
      })
      setEpisodes(array)
    }
  }, [character])

  return (
    <>
      {character ? (
        <main className='container mx-auto'>
          <header className='flex flex-col items-center'>
            <img
              className={`mt-10 rounded-full ring-8 ${
                character.status === 'Alive'
                  ? 'ring-emerald-600'
                  : character.status === 'Dead'
                  ? 'ring-red-600'
                  : 'ring-gray-500'
              }`}
              src={character.image}
              alt='character'
            />
            <h1 className='text-center text-7xl font-semibold my-5'>
              {character.name}
            </h1>
            <section className='flex flex-wrap items-center justify-evenly p-5 shadow-sm bg-zinc-200 rounded-xl'>
              <Label
                text={character.status}
                icon='ri-heart-pulse-fill'
                title={'Status'}
              />
              <Label
                text={character.gender}
                icon={
                  character.gender === 'Female'
                    ? 'ri-women-line'
                    : character.gender === 'Male'
                    ? 'ri-men-line'
                    : 'ri-genderless-line'
                }
                title={'Gender'}
              />
              <Label
                text={character.species}
                icon='ri-user-6-line'
                title={'Species'}
              />
            </section>
          </header>
          {/* Table 1 */}
          <ListContainer title={`${character.name} is from...?`}>
            <ListItem title='Origin' text={character.origin.name} />
            <LinkItem title={`Location`}>
              <Link
                to={`/single-location/${character.location.url.slice(
                  character.location.url.lastIndexOf('/') + 1
                )}`}
                className='text-4xl text-center py-5 text-cyan-600 hover:text-sky-500 hover:underline hover:underline-offset-2'
              >{`${character.location.name}`}</Link>
            </LinkItem>
          </ListContainer>

          {/* Table 2 */}
          <ListContainer
            title={`Episodes where ${character.name} appears`}
            maxWidth='max-w-7xl'
          >
            {episodes.length &&
              episodes.map((ep) => (
                <LinkItem key={ep.id} title={`Episode ${ep.id}`}>
                  <Link
                    to={`/single-episode/${ep.id}`}
                    className='text-4xl text-center py-5 text-cyan-600 hover:text-sky-500 hover:underline hover:underline-offset-2'
                  >{`Go to Episode ${ep.id}`}</Link>
                </LinkItem>
              ))}
          </ListContainer>
        </main>
      ) : (
        <section className='container p-3 mt-10 shadow-md rounded-md bg-gray-50'>
          <Loading />
        </section>
      )}
    </>
  )
}
