import React from 'react'
import { Link } from 'react-router-dom'
import rickYMorty from '../assets/rick&morty.webp'
export const Home = () => {
  return (
    <main className='flex flex-col items-center min-h-screen w-full py-32'>
      <h1 className='text-7xl text-center my-20 px-3 font-bold text-emerald-400'>
        RICK & MORTY WIKI
      </h1>
      <img className='px-3' src={rickYMorty} alt='rick y morty' />

      <button className='my-16 w-96 bg-emerald-400 rounded-md py-5 text-4xl font-semibold text-white'>
        <Link to={'/all-characters'}>Watch characters</Link>
      </button>
    </main>
  )
}
