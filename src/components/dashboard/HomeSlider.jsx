import React from 'react';
import Slider from 'react-slick';
import './HomeSlider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src="Gallery/first.jpg" alt="Slide 1" />
          <div className="slide-text">Welcome to JTrendsHub - Your Style, Your Trend!</div>
        </div>
        <div className="slide-item">
          <img src="Gallery/second.jpg" alt="Slide 2" />
          <div className="slide-text">Discover the Latest Fashion Trends</div>
        </div>
        <div className="slide-item">
          <img src="Gallery/third.jpg" alt="Slide 3" />
          <div className="slide-text">Exclusive Collections Just for You</div>
        </div>
      </Slider>
    </div>
  );
};
