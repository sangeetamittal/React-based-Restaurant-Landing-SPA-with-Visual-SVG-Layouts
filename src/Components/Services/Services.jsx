import React from "react";
import "./Services.css";
import serv1 from '../../assets/service1.svg'
import serv2 from '../../assets/service2.svg'
import serv3 from '../../assets/service3.svg'
import serv4 from '../../assets/service4.svg'

const services = [
  {
    title: "Customer Care",
    image: serv1, 
  },
  {
    title: "Offers",
    image: serv2,
  },
  {
    title: "Catering",
    image: serv3,
  },
  {
    title: "Delivery",
    image: serv4,
  },
];

const Services = () => {
  return (
    <section className="our-service" id="services">
      <h2>Our service</h2>
      <div className="intro-and-two">
        <p className="service-text">
          We provide excellent service, delicious food, and a welcoming atmosphere.
          Our friendly staff ensures a great dining experience every time. Your satisfaction
          is our priority!
        </p>
        <div className="service-boxes-row">
          {services.slice(0, 2).map((service, idx) => (
            <div className="service-box" key={idx}>
              <img src={service.image} alt={service.title} className="service-img" />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="service-boxes-row">
        {services.slice(2).map((service, idx) => (
          <div className="service-box" key={idx}>
            <img src={service.image} alt={service.title} className="service-img" />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
