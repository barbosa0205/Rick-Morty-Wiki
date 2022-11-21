import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navigation } from '../components/Navigation'
import { SingleEpisode } from '../pages/SingleEpisode'
import { AllCharacters } from '../pages/AllCharacters'
import { AllLocations } from '../pages/AllLocations'
import { Home } from '../pages/Home'
import { SingleCharacter } from '../pages/SingleCharacter'
import { SingleLocation } from '../pages/SingleLocation'
import { AllEpisodes } from '../pages/AllEpisodes'

export const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/all-characters' element={<AllCharacters />} />
          <Route path='/single-character/:id' element={<SingleCharacter />} />
          <Route path='/all-locations' element={<AllLocations />} />
          <Route path='/single-location/:id' element={<SingleLocation />} />

          <Route path='/all-episodes' element={<AllEpisodes />} />
          <Route path='/single-episode/:id' element={<SingleEpisode />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
