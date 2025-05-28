import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import g1 from '../../../assets/g1.svg'
import g2 from '../../../assets/g2.svg'
import g3 from '../../../assets/g3.svg'
import './GalleryforHomePage.css'

const images = [g1, g2, g3];

const GalleryforHomePage = () => {

  return (
    <div className="gallery-container" id="gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="splide-container custom-splide">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            focus: 'center',
            gap: '1rem',
            pagination: false,
            arrows: true,
            height: "400px",
            width: "1200px",
          }}
          aria-label="Image Gallery"
        >
          {images.map((img, idx) => (
            <SplideSlide key={idx}>
              <img src={img} alt={`Slide ${idx + 1}`} className="gallery-image" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default GalleryforHomePage
