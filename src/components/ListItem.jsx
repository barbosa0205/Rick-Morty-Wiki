import React from 'react'

export const ListItem = ({ title, text, isLink = false }) => {
  return (
    <div className='grid grid-cols-2'>
      <h2 className='py-5 text-4xl font-bold text-center  border-r-2 border-zinc-400 dark:border-zinc-300 text-gray-900 dark:text-gray-100'>
        {title}
      </h2>
      <p className='text-4xl text-center py-5 dark:text-gray-100'>{text}</p>
    </div>
  )
}
