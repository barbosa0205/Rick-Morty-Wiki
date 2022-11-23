import React from 'react'

export const Label = ({ icon, text, title }) => {
  return (
    <div
      title={title}
      className='w-fit h-fit flex items-center justify-between my-3 mx-1 shadow-sm bg-zinc-900 rounded-xl text-white cursor-default'
    >
      <i
        className={`${icon} text-white dark:text-zinc-900 text-4xl px-5 py-3 bg-zinc-700 dark:bg-zinc-300 min-h-full rounded-l-xl`}
      ></i>
      <p className='text-4xl px-5'>{text}</p>
    </div>
  )
}
