import React from 'react'
import HeroSection from '../home/HeroSection'
import CategoryCarousel from '../home/CategoryCarousel'
import LatestJobs from '../home/LatestJobs'
import Footer from '../home/Footer'
import NavbarRecruiter from '../shared/NavbarRecruiter'


function Recruiter() {
  return (
    <div>
        <NavbarRecruiter/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Recruiter