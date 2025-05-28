import React from 'react';
import Gallery from '../Gallery/Gallery'; // Adjust the path as necessary
import './About.css';
import about from '../../assets/about.svg'
import MeetTheChef from './MeetTheChef/MeetTheChef';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-section">
                <img src={about} alt="About Us" className="about-image" />
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>Welcome to Indian cafe, where every cup tells a story and every bite brings you closer to the heart of India. Our café blends traditional Indian flavors with a cozy, modern ambiance — perfect for chai lovers, coffee connoisseurs, and foodies alike. </p>
                    <p>From hand-brewed masala chai to aromatic filter coffee and regional snacks, we take pride in serving authentic taste with a twist. Whether you're here for a quick break, a friendly chat, or a quiet moment, our café is your warm corner of India in the city</p>
                </div>
            </section>

            <section className="meet-chef">
                <MeetTheChef />
            </section>
            
            <section className="gallery-section">
                <Gallery />
            </section>
        </div>
    );
};

export default About;
