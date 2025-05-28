import React from 'react'
import './OurSpeciality.css'
import speciality from '../../../assets/speciality.svg'

const OurSpeciality = () => {
    return (
        <section className="specialty-section" id="speciality">
            <h2>Our Specialty</h2>
            <div className="specialty-content">
                <img src={speciality} alt="Indian Specialty Dish" className="specialty-image" />
                <p className="specialty-text">
                    At India Café, we specialize in bringing authentic Indian flavors to your plate.
                    Our menu is crafted with traditional recipes, rich spices, and fresh ingredients
                    to give you a true taste of India.
                </p>
            </div>
        </section>
    )
}

export default OurSpeciality
