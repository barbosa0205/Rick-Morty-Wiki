import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const Pagination = ({ next, prev, changeURL }) => {
  const [pages, setPages] = useState([])

  return (
    <nav className='flex items-center justify-between bg-zinc-800 p-3 text-white font-bold'>
      {prev ? (
        <button
          onClick={() => changeURL(prev)}
          className='sm:mx-20 px-10 py-2 bg-emerald-700 rounded-sm text-3xl'
        >
          Prev
        </button>
      ) : (
        <button className='sm:mx-20 px-10 py-2 bg-gray-500 rounded-sm text-3xl text-gray-100'>
          Prev
        </button>
      )}
      {next ? (
        <button
          onClick={() => changeURL(next)}
          className='sm:mx-20 px-10 py-2 bg-emerald-700 rounded-sm text-3xl'
        >
          Next
        </button>
      ) : (
        <button className='sm:mx-20 px-10 py-2 bg-gray-500 rounded-sm text-3xl text-gray-100'>
          Next
        </button>
      )}
    </nav>
  )
}
