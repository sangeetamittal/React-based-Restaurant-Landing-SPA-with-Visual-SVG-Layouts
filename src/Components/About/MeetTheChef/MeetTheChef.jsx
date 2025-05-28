import React from 'react'
import './MeetTheChef.css'
import chef1 from '../../../assets/chef1.svg'
import chef2 from '../../../assets/chef2.svg'
import chef3 from '../../../assets/chef3.svg'

const MeetTheChef = () => {
    return (
        <section className="chef-section" id="chef">
            <h3>Meet The Chef</h3>
            <p className="chef-subtitle">The Master Behind The Menu</p>
            <div className="chef-gallery">
                <img src={chef1} alt="Chef 1" />
                <img src={chef2} alt="Chef 2" />
                <img src={chef3} alt="Chef 3" />
            </div>
        </section>
    )
}

export default MeetTheChef
