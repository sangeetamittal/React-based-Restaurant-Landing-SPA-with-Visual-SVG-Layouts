import React from 'react'
import Navbar from './Components/CommonComponents/Navbar/Navbar'
import ContactSection from './Components/CommonComponents/ContactSection/ContactSection'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ContactSection />
    </>
  )
}

export default Layout
