import React from 'react'

export const Label = ({ icon, text, title }) => {
  return (
    <div
      title={title}
      className='w-fit h-fit flex items-center justify-between my-3 mx-1 shadow-sm bg-gray-900 rounded-xl text-white cursor-default'
    >
      <i
        className={`${icon} text-white text-4xl px-5 py-3 bg-zinc-700 min-h-full rounded-l-xl`}
      ></i>
      <p className='text-4xl px-5'>{text}</p>
    </div>
  )
}
