import React from 'react'
import bannerImage from '../assets/images/hero.png'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
const Banner = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        };
  return (
    <>
        <section className='Banner'>
          <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='w-full' src={bannerImage} alt="banner image" />
        </div>
        <div>
          <img className='w-full' src={bannerImage} alt="banner image" />
        </div>
      </Slider>
    </div>
        </section> 
    </>
  )
}

export default Banner
