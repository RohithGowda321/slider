import React, { useEffect, useState } from 'react';
import './Styles.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Slide will change every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={`path_to_your_image_${index + 1}.jpg`} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {data.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow left" onClick={prevSlide}>
        <span>&#8249;</span>
      </button>
      <button className="carousel-arrow right" onClick={nextSlide}>
        <span>&#8250;</span>
      </button>
    </div>
  );
};

export default Carousel;
