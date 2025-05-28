import React, { useState } from 'react';
import Gallery from '../Gallery/Gallery';
import OurMenu from './OurMenu/OurMenu';
import OurSpeciality from './OurSpeciality/OurSpeciality';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import './Menu.css'


const Menu = () => {

    return (
        <div className="menu-container">
            {/* Our Menu Section */}
            <section className="our-menu-section">
                <OurMenu />
            </section>

            {/* Our Specialty Section */}
            <section className="our-speciality-section">
                <OurSpeciality />
            </section>

            {/* Today's Special Offer Section */}
            <section className="special-offer-section">
                <SpecialOffer />
            </section>

            {/* Gallery Section */}
            <section className="our-gallery-section">
                <Gallery />
            </section>
        </div>
    );
};

export default Menu;
