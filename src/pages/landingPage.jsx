import React from 'react'
import NavBar from '../componentes/NavBar'
import HeroSection from '../componentes/HeroSection'
import Competencies from '../componentes/Competencies'
import StaticsServices from '../componentes/StaticsServices'
import AlarmServices from '../componentes/AlarmServices'
import SearchSection from './../componentes/SearchSection';

const landingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Competencies />
      <StaticsServices />
      <AlarmServices />
      <SearchSection />
    </div>
  )
}

export default landingPage
