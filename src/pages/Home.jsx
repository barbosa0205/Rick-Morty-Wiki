import React from 'react'
import { Link } from 'react-router-dom'
import rickYMorty from '../assets/rick&morty.webp'
import { useTranslation } from 'react-i18next'
export const Home = () => {
  const { t } = useTranslation()

  return (
    <main className='flex flex-col items-center min-h-screen w-full py-32 dark:bg-zinc-900'>
      <h1 className='text-7xl text-center my-20 px-3 font-bold text-emerald-500'>
        RICK & MORTY WIKI
      </h1>
      <img className='px-3 sm:max-w-7xl' src={rickYMorty} alt='rick y morty' />

      <button className='my-24 w-96 bg-emerald-500 rounded-md py-5 text-4xl font-semibold text-white'>
        <Link to={'/all-characters'}>{t('ButtonHome.text')}</Link>
      </button>
    </main>
  )
}
