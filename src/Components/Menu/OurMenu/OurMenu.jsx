import React from 'react'
import './OurMenu.css'
import food from '../../../assets/food.svg'
import drink from '../../../assets/drink.svg'
import dessert from '../../../assets/dessert.svg'

const menuItems = [
    {
        title: 'Food',
        image: food,
    },
    {
        title: 'Drink',
        image: drink,
    },
    {
        title: 'Desert',
        image: dessert,
    },
];

const OurMenu = () => {
    return (
        <section className="our-menu" id="menu">
            <h2>Our Menu</h2>
            <div className="menu-cards">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-card">
                        <img src={item.image} alt={item.title} />
                        <div className="card-footer">
                            <div className="menu-title">{item.title}</div>
                            <button className="explore-btn">Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurMenu
