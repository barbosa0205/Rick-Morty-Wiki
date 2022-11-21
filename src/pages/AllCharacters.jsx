import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import { Pagination } from '../components/Pagination'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'

export const AllCharacters = () => {
  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl text-center font-bold text-emerald-600 mt-10'>
        All Characters
      </h1>

      <List initialURL={'https://rickandmortyapi.com/api/character'} />
    </main>
  )
}
