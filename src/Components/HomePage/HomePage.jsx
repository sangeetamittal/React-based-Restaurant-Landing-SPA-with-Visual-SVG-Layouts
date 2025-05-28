import React from 'react'
import './HomePage.css'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import OurSpeciality from '../Menu/OurSpeciality/OurSpeciality'
import OurMenu from '../Menu/OurMenu/OurMenu'
import SpecialOffer from '../Menu/SpecialOffer/SpecialOffer'
import Recommendations from './Recommendations/Recommendations'
import Reserve from '../Reserve/Reserve'
import Services from '../Services/Services'
import MeetTheChef from '../About/MeetTheChef/MeetTheChef'
import Reviews from '../Reviews/Reviews'
import GalleryforHomePage from './GalleryforHomePage/GalleryforHomePage'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <AboutUs/>
        <OurSpeciality/>
        <OurMenu/>
        <SpecialOffer/>
        <Recommendations/>
        <Reserve/>
        <Services/>
        <MeetTheChef/>
        <Reviews/>
        <GalleryforHomePage/>
    </>
  )
}

export default HomePage
