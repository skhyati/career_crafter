import React from 'react'
import NavbarMain from '../shared/NavbarMain'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import AboutUs from './AboutUs'


function Home() {
  return (
    <div>
        <NavbarMain/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <AboutUs/>
        <Footer/>

    </div>
  )
}

export default Home