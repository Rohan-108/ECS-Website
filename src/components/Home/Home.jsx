import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Hero from './Hero';
import "./home.css"
import Message from './Message';
import Slider from "react-slick";
import Polygon from "../../assets/images/Polygon.png"
import Cards from './Cards';
import GalleryCard from './GalleryCard';
import girl from "../../assets/images/girl.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Particle from '../Particle';
const Home = (props) => {
  const{currentUser,setCurrentUser}=props;
      const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: "linear",
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding:0
    };
    let settings2 = {
     dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
       swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <Particle />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Hero />
      <div className='sliders'>
        <h2>Message</h2>
        <Slider {...settings}>
        <Message message={"ECE is one most active societies of NITS, and I feel privileged to serve as its Vice President for the session 2021-22. As a society, we aim to provide a platform where the students get ample opportunities to explore, learn, and grow in technical as well as non-technical fields. We will continue to work hard and take ECS to greater heights. I would request everyone to make the most out of these opportunities and enhance their skillset. I wish everyone the best of luck for all their future endeavours"} name={"Afsana Yasmin"} designation={"President"} src={Polygon}/>
        <Message message={"ECE is one most active societies of NITS, and I feel privileged to serve as its Vice President for the session 2021-22. As a society, we aim to provide a platform where the students get ample opportunities to explore, learn, and grow in technical as well as non-technical fields. We will continue to work hard and take ECS to greater heights. I would request everyone to make the most out of these opportunities and enhance their skillset. I wish everyone the best of luck for all their future endeavours"} name={"Aryan"} designation={"General Secretary"} src={Polygon}/>
        </Slider>
      </div>
      <div className='about_us' id="about">
        <h2>About Us</h2>
        <div className='about_mess'>
          Electronics and Communication society, ECS is known for its activeness and creativity.
          This society stands on the frontline to dig out innovative minds and raw talents.
          ECS provides the most suitable platform for students to showcase their skills, be it academic, technical or cultural.
          ECS always facilitates the freshers with warm atmosphere so that they get acquainted with the norms of the branch and the college and also encourages them to create a fresh bond with the seniors.
        </div>
      </div>
      <div className="annual">
        <h2>Annual Attractions</h2>
        <Slider {...settings2}>
                <Cards src={Polygon} message={"The technical weekend of ECS, alias Spectrum, is the platform where students are urged to showcase their technical skills and knowledge which is conducted once annually. It nurtures their base and helps them strengthen their skills in a fun way. more..."}
                ocassion={"Spectre"}/>
                <Cards ocassion={'Dehleez'} message={"The technical weekend of ECS, alias Spectrum, is the platform where students are urged to showcase their technical skills and knowledge which is conducted once annually. It nurtures their base and helps them strengthen their skills in a fun way. more..."}
                src={Polygon}/>
                <Cards src={Polygon} message={"The technical weekend of ECS, alias Spectrum, is the platform where students are urged to showcase their technical skills and knowledge which is conducted once annually. It nurtures their base and helps them strengthen their skills in a fun way. more..."}
                ocassion={"Orientation"}/>
                <Cards message={"The technical weekend of ECS, alias Spectrum, is the platform where students are urged to showcase their technical skills and knowledge which is conducted once annually. It nurtures their base and helps them strengthen their skills in a fun way. more..."} ocassion={"Spectrum"} src={Polygon}/>
        </Slider>
      </div>
      <div className="gallery_container">
        <h2>Gallery</h2>
        <Slider {...settings1}>
              <GalleryCard src={girl}/>
              <GalleryCard src={girl} />
              <GalleryCard src={girl} />
              <GalleryCard src={girl} />
              <GalleryCard src={girl} />
        </Slider>
        <Link className='button1' to="/gallery">Show More</Link>
      </div>
    </>
  )
}

export default Home