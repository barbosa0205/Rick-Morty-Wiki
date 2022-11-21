import React from 'react'
import { NavItem } from './NavItem'
import { Link } from 'react-router-dom'
export const Navigation = () => {
  return (
    <nav className='w-full flex px-2 py-8 shadow-md'>
      <ul className='w-full flex flex-wrap items-center justify-evenly h-full'>
        <NavItem>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/all-characters'>All characters</Link>
        </NavItem>
        <NavItem>
          <Link to='/all-locations'>All Locations</Link>
        </NavItem>
        <NavItem>
          <Link to='/all-episodes'>All Episodes</Link>
        </NavItem>
      </ul>
    </nav>
  )
}
