import React from 'react'
import './Newsletter.css';
import './Footer.css';
import { ReactComponent as MapSVG } from '../../../assets/MapForContact.svg';
import { ReactComponent as PinSVG } from '../../../assets/red-pin.svg';
import phoneicon from '../../../assets/phone-icon.svg';
import { Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitted successfully!');
    };

    return (
        <>
            {/* Newsletter Section */}
            <div className="newsletter-container">
                <div className="newsletter-text">
                    <h4>Newsletter</h4>
                    <p>Be the first one to know about discounts, offers and events</p>
                </div>
                <form className="newsletter-form">
                    <div className="newsletter-input-wrapper">
                        <Mail size={18} className="mail-icon" />
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>

            {/* Footer section */}

            <div className="footer-top">
                <h3>Have any questions?</h3>
                <p>Contact us we will Answer your question</p>
            </div>

            <div className="footer">
                <div className="footer-left contact-layout">
                    <div className="top-contact-row">
                        <div className="contact-item">
                            <div className="label"><img src={phoneicon} alt="" className='icon'/> Tel</div>
                            <div className="value">310-437-2766</div>
                        </div>
                        <div className="contact-item">
                            <div className="label"> Mail</div>
                            <div className="value">IndiaCafe456@gmail.com</div>
                        </div>
                        <div className="contact-item">
                            <div className="label">Address</div>
                            <div className="value">
                                <strong>815 Wayne Ave,</strong>Chambersburg, PA 17201
                            </div>
                        </div>
                    </div>

                    <div className="nav-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/menu">Menu</NavLink>
                        <NavLink to="/reserve">Reservation</NavLink>
                        <NavLink to="/services">Our Service</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>

                    <div className="info-columns">
                        <div className="info-column">
                            <NavLink to="/"><h4>Home</h4></NavLink>
                            <ul>
                                <li>Where Flavor Meets Tradition</li>
                                <li>Explore Our Menu</li>
                                <li>Order Online</li>
                                <li>Book A Table</li>
                                <li>Follow Us On Social Media</li>
                                <li><NavLink to="/review" className="rev-link">Customer Review</NavLink></li>
                            </ul>
                        </div>
                        <div className="info-column">
                            <NavLink to="/menu"><h4>Menu</h4></NavLink>
                            <ul>
                                <li>India Cafe veg Special</li>
                                <li>India Cafe Non veg Special</li>
                                <li>Traditional Desserts</li>
                                <li>Drinks</li>
                            </ul>
                        </div>
                        <div className="info-column">
                            <NavLink to="/services"><h4>Our Services</h4></NavLink>
                            <ul>
                                <li>customer service</li>
                                <li>Offers</li>
                                <li>Catering</li>
                                <li>Delivery</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <svg viewBox="0 0 512 512" className="map-svg" preserveAspectRatio="xMidYMid meet">
                        <MapSVG />
                        <g transform="translate(310, 183)">
                            <PinSVG/>
                        </g>
                    </svg>
                </div>
            </div>

            <div className="footer-bottom">
                © 2000-2030 all Reserved Rights
            </div>

        </>
    )
}

export default ContactSection
