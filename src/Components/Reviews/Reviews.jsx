import React from "react";
import "./Reviews.css";
import { useLocation } from 'react-router-dom';
import rev1 from '../../assets/reviews1.svg'
import rev2 from '../../assets/reviews2.svg'
import rev3 from '../../assets/reviews3.svg'

const testimonials = [
    {
        name: "Kshitija Shinde",
        quote: `"Delicious meals, cozy atmosphere. Highly recommend!"`,
        image: rev1,
    },
    {
        name: "Pooja Shinde",
        quote: `"Good value for money. Cozy place with friendly staff."`,
        image: rev2,
    },
    {
        name: "Mrunal Vase",
        quote: `"Loved everything! Tasty dishes, excellent hospitality, and a beautiful setting."`,
        image: rev3,
    },
];

const Reviews = () => {
    const location = useLocation();
    const isReviewPage = location.pathname === '/review';

    return (
        <section className="testimonials" id="reviews">
            <h2>Over 1000+ people trust us</h2>
            <p className="subtext">
                India café brings you the best of Indian cuisine. From rich curries to sizzling
                tandoori, every dish is made with passion. Come taste the tradition!
            </p>

            <div className="cards">
                {testimonials.map((t, i) => (
                    <div className="card" key={i}>
                        <img src={t.image} alt={t.name} className="card-image" />
                        <p className="quote">{t.quote}</p>
                        <p className="name">{t.name}</p>
                    </div>
                ))}
            </div>

            {isReviewPage && (
                <button className="review-btn">Add Your Review</button>
            )}
        </section>
    );
};

export default Reviews;
