import React from 'react'
import './Recommendations.css';
import recom1 from '../../../assets/recom1.svg'
import recom2 from '../../../assets/recom2.svg'
import recom3 from '../../../assets/recom3.svg'
import recom4 from '../../../assets/recom4.svg'

const Recommendations = () => {
  return (
    <div className="recommendation-container" id="recommendations">
      <h2 className="recommendation-title">Recommendation</h2>
      <div className="recommendation-content">
        <div className="recommendation-images">
          <img src={recom1} alt="Dish 1" className="image image1" />
          <img src={recom2} alt="Dish 2" className="image image2" />
          <img src={recom3} alt="Dish 3" className="image image3" />
          <img src={recom4} alt="Drink" className="image image4" />
        </div>
        <ul className="recommendation-list">
          <li>Most Popular meal for Vegetarian</li>
          <li>India Cafe Special Non veg Special</li>
          <li>Traditional Desserts</li>
          <li>Drinks</li>
        </ul>
      </div>
      <button className="order-button">Order Now</button>
    </div>
  )
}

export default Recommendations
