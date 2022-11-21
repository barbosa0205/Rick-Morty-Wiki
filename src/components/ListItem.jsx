import React from 'react'

export const ListItem = ({ title, text, isLink = false }) => {
  return (
    <div className='grid grid-cols-2'>
      <h2 className='py-5 text-4xl font-bold text-center  border-r-2 border-zinc-400 text-gray-900'>
        {title}
      </h2>
      <p className='text-4xl text-center py-5'>{text}</p>
    </div>
  )
}
