import React from 'react';
import './SpecialOffer.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import sp1 from '../../../assets/sp1.svg';
import sp2 from '../../../assets/sp2.svg';
import sp3 from '../../../assets/sp3.svg';

const OrriginalOffers = [
    {
        name: 'Veg Dum Biryani',
        price: '₹ 189',
        image: sp1,
    },
    {
        name: 'Chicken Kari',
        price: '₹ 239',
        image: sp2,
    },
    {
        name: 'Mushroom Tandoori',
        price: '₹ 209',
        image: sp3,
    },
];

const SpecialOffer = () => {
    return (
        <section className="gallery-container" id="offer">
            <h2 className="gallery-heading">Today's Special Offer</h2>
            <div className="splide-container">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        focus: 'center',
                        gap: '2rem',
                        pagination: false,
                        arrows: true,
                        height: "600px",
                        breakpoints: {
                            1024: { perPage: 2 },
                            768: { perPage: 1 },
                        }
                    }}
                    aria-label="Special Offers"
                    className="custom-splide"
                >
                    {OrriginalOffers.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="carousel-card">
                                <img src={item.image} alt={item.name} className="gallery-image" />
                                <div className="carousel-info">
                                    <p className="carousel-title">{item.name}</p>
                                    <p className="carousel-price">{item.price}</p>
                                    <button className="order-btn">Order Now</button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default SpecialOffer;
