import React, { useState } from 'react';
import Slider from "react-slick";
import girl from "../../assets/images/girl.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Gallerycard.css'
const GallerySlider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const data=[girl,girl,girl,girl,girl,girl,girl,girl];
    const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode:true,
    beforeChange:(current,next)=>setSlideIndex(next),
    responsive: [
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1},
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2, slidesToScroll: 1},
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return ( 
     <Slider {...settings2}> 
        {data.map((img,index)=>{
            return(
                <div className={index===slideIndex?'slide slide-active':'slide'} key={index}>
                    <img src={img} alt="gallery" loading='lazy'/>
                </div>
            )
        })}
        </Slider>
  )
}

export default GallerySlider