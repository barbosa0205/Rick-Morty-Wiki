import React, { useEffect, useState } from 'react'
import { NavItem } from './NavItem'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
  const { t } = useTranslation()

  const lngs = [
    { code: 'en', nativeName: t('LangEn.text') },
    { code: 'es', nativeName: t('LangEs.text') },
  ]

  const [themeMode, setThemeMode] = useState('light')

  useEffect(() => {
    // Verify if themeMode are saveed on localStorage
    if (localStorage.getItem('themeMode')) {
      setThemeMode(localStorage.getItem('themeMode'))
      console.log(localStorage.getItem('themeMode'))
    }
  }, [])

  return (
    <nav className='w-full flex flex-col px-2 shadow-md'>
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
      <ul className='w-full flex flex-wrap items-center justify-between h-full border-t py-2'>
        {/* DarkMode section */}
        <section className='px-3 flex'>
          <i
            onClick={() => {
              if (themeMode === 'light') {
                console.log('XD')
              }
            }}
            className={
              themeMode === 'light' ? 'ri-sun-line' : 'ri-moon-clear-line'
            }
          ></i>
        </section>

        {/* Language section */}
        <section className='px-3 flex items-center h-full'>
          {lngs.map((lng) => (
            <button
              className='mx-3 py-1 rounded-md text-emerald-500 font-bold'
              key={lng.code}
              type='submit'
              onClick={() => i18n.changeLanguage(lng.code)}
            >
              {lng.nativeName}
            </button>
          ))}
        </section>
      </ul>
    </nav>
  )
}
