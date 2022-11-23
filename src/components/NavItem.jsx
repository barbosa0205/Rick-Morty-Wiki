import React from 'react'

export const NavItem = ({ children }) => {
  return (
    <li className='h-full flex items-center justify-center px-3 py-2 text-4xl font-bold hover:text-emerald-500 cursor-pointer dark:text-gray-100'>
      {children}
    </li>
  )
}
