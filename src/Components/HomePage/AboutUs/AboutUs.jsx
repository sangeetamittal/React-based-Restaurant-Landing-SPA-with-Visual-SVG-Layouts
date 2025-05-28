import React from 'react'
import about from '../../../assets/aboutforhp.svg'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="aboutus-container" id="about us">
      <section className="aboutus-section">
        <img src={about} alt="About Us" className="aboutus-image" />
        <div className="aboutus-text">
          <h2>About Us</h2>
          <p> Welcome to Indian cafe, where every cup tells a story and every bite brings you closer to the heart of India. Our café blends traditional Indian flavors with a cozy, modern ambiance — perfect for chai lovers, coffee connoisseurs, and foodies alike.</p>
          <p>From hand-brewed masala chai to aromatic filter coffee and regional snacks, we take pride in serving authentic taste with a twist. Whether you're here for a quick break, a friendly chat, or a quiet moment, our café is your warm corner of India in the city.</p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
