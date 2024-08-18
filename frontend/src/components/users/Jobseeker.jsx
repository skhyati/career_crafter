import React from 'react'
import Navbar from '../shared/Navbar'
import HeroSection from '../home/HeroSection'
import CategoryCarousel from '../home/CategoryCarousel'
import LatestJobs from '../home/LatestJobs'
import Footer from '../home/Footer'



function Jobseeker() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Jobseeker