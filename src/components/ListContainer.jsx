import React from 'react'

export const ListContainer = ({ title, maxWidth = 'max-w-5xl', children }) => {
  return (
    <>
      <h2 className='text-center text-5xl font-bold mt-16 mb-10 dark:text-gray-100'>
        {title}
      </h2>
      <section
        className={`container mx-auto grid grid-cols-1  rounded-xl my-5 shadow-sm bg-gray-200 ${maxWidth} divide-y-2 divide-zinc-400 dark:divide-zinc-300 dark:bg-zinc-800`}
      >
        {children}
      </section>
    </>
  )
}
