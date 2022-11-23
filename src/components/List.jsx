import React, { useEffect, useState } from 'react'

import { Card } from './Card'
import { Loading } from './Loading'
import { Pagination } from './Pagination'

export const List = ({ children, loading }) => {
  return (
    <>
      {loading ? (
        <section className='container p-3 mt-10 shadow-md rounded-md bg-gray-50 dark:bg-zinc-800'>
          <Loading />
        </section>
      ) : (
        <section className='container p-3 mt-10 shadow-md rounded-md bg-gray-50 dark:bg-zinc-800'>
          {children}
        </section>
      )}
    </>
  )
}

// next={data.data.info.next} prev={data.data.info.prev}
