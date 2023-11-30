import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ProductsOnSale.css';

const ProductsOnSale = props => {
    const responsiveSettings = [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          }
        }
      ];
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: responsiveSettings,
      };

  return (
    <div className="products-on-sale">
      <Slider {...settings}>
        {props.responseData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="Product" />
            <div className="offer-percentage">{product.offerPercentage + ' off'}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsOnSale;
