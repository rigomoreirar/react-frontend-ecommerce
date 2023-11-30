import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MainPageProductsDisplay.css';

const MainPageProductsDisplay = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
    ],
  };

  return (
    <div className="new-products-carousel">
      <Slider {...settings}>
        {props.responseData.map(product => (
          <div key={product.id} className="new-product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainPageProductsDisplay;

