import React from "react";
import "./Gallery.css";
import food1 from '../../assets/food1.svg'
import food2 from '../../assets/food2.svg'
import food3 from '../../assets/food3.svg'
import food4 from '../../assets/food4.svg'
import food5 from '../../assets/food5.svg'
import food6 from '../../assets/food6.svg'

const Gallery = () => {
  const images = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-title">Gallery</div>
      <svg
        className="gallery-grid"
        viewBox="0 0 1440 1850"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href={food1} className="gallery-img img-1" x="16" y="80" height="490" width="617" />
        <image href={food2} className="gallery-img img-2" x="624" y="16" height="583" width="685" />
        <image href={food3} className="gallery-img img-3" x="-8" y="568" height="490" width="664" />
        <image href={food4} className="gallery-img img-4" x="660.8" y="576" height="490" width="664" />
        <image href={food5} className="gallery-img img-5" x="32" y="1056" height="707" width="587" />
        <image href={food6} className="gallery-img img-6" x="576" y="992" height="755" width="802" />
      </svg>
    </div>
  );
};

export default Gallery;
