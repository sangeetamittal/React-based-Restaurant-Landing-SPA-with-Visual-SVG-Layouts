import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Reserve.css';
import fb from '../../assets/fb-icon.svg'
import insta from '../../assets/insta-icon.svg'
import yt from '../../assets/youtube-icon.svg'

const Reserve = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        setIsSubmitted(true);
        setTimeout(() => {
            reset();
        }, 2000);
    };

    return (
        <div className='reserve' id="reserve">
            <h2>Reserve A Table</h2>
            <p>Dine With US - Reserve Now</p>
            <div className="reservation-container">
                <div className="form">
                    {isSubmitted ? (
                        <div className="success-message">
                            <h3>Booked Successfully!</h3>
                            <p>Thank you for your reservation. We'll contact you shortly.</p>
                        </div>
                    ) : (
                        <form className="reservation-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" {...register('name')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" {...register('email')} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile No</label>
                                    <input id="mobile" type="text" {...register('mobile')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="guests">No of Guest</label>
                                    <input id="guests" type="number" {...register('guests')} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="date">Date Of Reservation</label>
                                    <input id="date" type="date" {...register('date')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Time of Reservation</label>
                                    <input id="time" type="time" {...register('time')} />
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="request">Special Request</label>
                                    <textarea id="request" {...register('request')} />
                                </div>
                            </div>

                            <button className="submit-button" type="submit">Book Table</button>
                        </form>
                    )}
                </div>

                <div className="reservation-info">
                    <h4>Address</h4>
                    <p>
                        815 Wayne Ave, Chambersburg, PA 17201
                    </p>

                    <h4>Contact</h4>
                    <p>310-437-2766</p>

                    <h4>Open Time</h4>
                    <p>Open: 11:00 AM – 12:00 PM</p>
                    <p>Close: 10:00 PM – 11:30 PM</p>

                    <h4>Stay connected</h4>
                    <div className="social-icons">
                        <a href="#"><img src={fb} alt="" className='fb-icon' /></a>
                        <a href="#"><img src={insta} alt="" className='ig-icon' /></a>
                        <a href="#"><img src={yt} alt="" className='yt-icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reserve;
