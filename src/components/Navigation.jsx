import React, { useEffect, useState } from 'react'
import { NavItem } from './NavItem'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../context/ThemeContext'

export const Navigation = () => {
  const { t } = useTranslation()

  const lngs = [
    { code: 'en', nativeName: t('LangEn.text') },
    { code: 'es', nativeName: t('LangEs.text') },
  ]

  const { theme, setTheme } = useThemeContext()

  return (
    <nav className='w-full flex flex-col px-2 shadow-md  dark:bg-zinc-900'>
      <ul className='w-full flex flex-wrap items-center justify-evenly h-full pb-5'>
        <NavItem>
          <Link className='text-center' to='/'>
            {t('NavHome.text')}
          </Link>
        </NavItem>
        <NavItem>
          <Link className='text-center' to='/all-characters'>
            {t('NavAllCharacters.text')}
          </Link>
        </NavItem>
        <NavItem>
          <Link className='text-center' to='/all-locations'>
            {t('NavAllLocations.text')}
          </Link>
        </NavItem>
        <NavItem>
          <Link className='text-center' to='/all-episodes'>
            {t('NavAllEpisodes.text')}
          </Link>
        </NavItem>
      </ul>
      <ul className='w-full flex flex-wrap items-center justify-between h-full border-t dark:border-zinc-500 py-4 sm:px-5 border-b'>
        {/* Language section */}
        <section className='px-3 flex items-center h-full'>
          {lngs.map((lng) => (
            <button
              className='mx-3 py-1 rounded-md text-emerald-500 font-bold
              hover:text-black
              dark:text-gray-100 hover:dark:text-emerald-500'
              key={lng.code}
              type='submit'
              onClick={() => i18n.changeLanguage(lng.code)}
            >
              {lng.nativeName}
            </button>
          ))}
        </section>

        {/* DarkMode section */}
        <section className='px-3 flex'>
          <button>
            <i
              onClick={() => {
                if (theme === 'light') {
                  localStorage.setItem('themeMode', 'dark')
                  setTheme('dark')
                  document.documentElement.classList.toggle('dark')
                } else {
                  localStorage.setItem('themeMode', 'light')
                  setTheme('light')
                  document.documentElement.classList.toggle('dark')
                }
              }}
              className={`text-4xl dark:text-gray-100 ${
                theme === 'light' ? 'ri-sun-line' : 'ri-moon-clear-line'
              }`}
            ></i>
          </button>
        </section>
      </ul>
    </nav>
  )
}
