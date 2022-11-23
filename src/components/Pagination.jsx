import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export const Pagination = ({ next, prev, changeURL }) => {
  const [pages, setPages] = useState([])
  const { t } = useTranslation()
  return (
    <nav className='flex items-center justify-between bg-zinc-800 p-3 text-white font-bold'>
      {prev ? (
        <button
          onClick={() => changeURL(prev)}
          className='sm:mx-20 px-10 py-2 bg-emerald-700 rounded-sm text-3xl'
        >
          {t('PaginationPrev.text')}
        </button>
      ) : (
        <button className='sm:mx-20 px-10 py-2 bg-gray-500 rounded-sm text-3xl text-gray-100'>
          {t('PaginationPrev.text')}
        </button>
      )}
      {next ? (
        <button
          onClick={() => changeURL(next)}
          className='sm:mx-20 px-10 py-2 bg-emerald-700 rounded-sm text-3xl'
        >
          {t('PaginationNext.text')}
        </button>
      ) : (
        <button className='sm:mx-20 px-10 py-2 bg-gray-500 rounded-sm text-3xl text-gray-100'>
          {t('PaginationNext.text')}
        </button>
      )}
    </nav>
  )
}
