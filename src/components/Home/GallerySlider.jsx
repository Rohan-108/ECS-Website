import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Gallerycard.css'
import chess from "../../assets/galleryImage/DSC_1692.jpg"
import dancer from "../../assets/galleryImage/dancer.jpg"
import fresher from "../../assets/galleryImage/fresher.jpg"
import mime from "../../assets/galleryImage/mime.jpg"
import light from "../../assets/galleryImage/light.jpg"
import guitar from "../../assets/galleryImage/guitar.jpg"
const GallerySlider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const data=[
      "https://i.ibb.co/vzc54hp/Whats-App-Image-2022-11-09-at-9-01-53-PM.jpg",
      chess,
      dancer,
      fresher,
      mime,
      guitar,
      light
    ];
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
        settings: { slidesToShow: 1, slidesToScroll: 1},
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