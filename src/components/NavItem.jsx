import React from 'react'

export const NavItem = ({ children }) => {
  return (
    <li className='h-full flex items-center justify-center px-3 py-2 text-4xl font-bold hover:text-emerald-600 cursor-pointer'>
      {children}
    </li>
  )
}
