import React, { useRef } from 'react';
import './Nursery.css';
import nurseryData from '../Nursery.json';

const Nursery = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth, // scroll by the width of the container
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='nursery-container'>
        <h2>Nursery</h2>
        <div className="carousel-container">
            <button className="arrow left-arrow" onClick={scrollLeft}>
                &#10094; {/* Left arrow icon */}
            </button>

            <div className="carousel-wrapper" ref={carouselRef}>
                {nurseryData.map((item, index) => (
                <div key={index} className="carousel-item">
                    <div className="image-container">
                    <img src={item.image} alt="Nursery plant" className="carousel-image" />
                    </div>
                    <p className="carousel-caption">{item.caption}</p>
                </div>
                ))}
            </div>

            <button className="arrow right-arrow" onClick={scrollRight}>
                &#10095; {/* Right arrow icon */}
            </button>

            <img 
                className='whatsapp-logo-btn'
                src="https://static.vecteezy.com/system/resources/previews/016/716/468/original/whatsapp-icon-free-png.png"
                alt="whatsapp logo"
            />
            </div>
    </div>
  );
};

export default Nursery;
