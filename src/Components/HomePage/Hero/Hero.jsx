import React, { useState } from 'react';
import './Hero.css';
import search from '../../../assets/search.svg';

const Hero = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const targetId = query.trim().toLowerCase();
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Section not found!');
      }
    }
  };

  return (
    <div className="hero-section" id="hero">
      <div className="hero-overlay">
        <div className="search-bar">
          <img src={search} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className="hero-text">
          <h1>Indian Cafe</h1>
          <p>
            Brewing Stories, One Cup at a Time. <br />
            Flavors of India in Every Sip. <br />
            Coffee, Chai, and Conversations.
          </p>
          <div className="hero-buttons">
            <button>Order Online</button>
            <button>Reservation Table</button>
            <button>Track Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;