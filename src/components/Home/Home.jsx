import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Hero from './Hero';
import "./home.css"
import Message from './Message';
import Slider from "react-slick";
import Polygon from "../../assets/images/Polygon.png"
import Cards from './Cards';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Particle from '../Particle';
import Footer from '../Footer/Footer';
import GallerySlider from './GallerySlider';
import afsana from "../../assets/galleryImage/Afsana.jpg"
import aryan_batch from "../../assets/galleryImage/aryan_batch.jpg"
const Home = (props) => {
  const{currentUser,setCurrentUser}=props;
      const settings1 = {
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
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 750,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 2080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Particle />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Hero />
      <div className='sliders'>
        <h2 style={{letterSpacing:"3px"}}>Message</h2>
        <Slider {...settings1}>
        <Message message={`"A job handled by 100 individuals can be a mess, but a 100 turned into a team can be the biggest buzz of the century."\nIt's been a privilege to be a part of ECS since the last 3 years and I do feel that taking the baton in my hands, I have faith in my team that they will definitely lead to greater things for ECE and the contemporaries. We promise to do better and we hope this website will be a guiding light and a storehouse of all one needs. We have introduced new features which will be really beneficial and will definitely be a deal of pride for the students of ECE. \n
        Good luck!
        Long Live, ECS!`
        } name={"Afsana Yasmin"} designation={"President"} src={afsana}/>
        <Message message={"ECE is one most active societies of NITS, and I feel privileged to serve as its Vice President for the session 2021-22. As a society, we aim to provide a platform where the students get ample opportunities to explore, learn, and grow in technical as well as non-technical fields. We will continue to work hard and take ECS to greater heights. I would request everyone to make the most out of these opportunities and enhance their skillset. I wish everyone the best of luck for all their future endeavours"} name={"Aaryan"} designation={"General Secretary"} src={aryan_batch}/>
        </Slider>
      </div>
      <div className='about_us' id="about_us">
        <h2 style={{letterSpacing:"2px"}}>About Us</h2>
        <div className='about_mess'>
         The Electronics and Communication Society,ECS, is one of the  active societies of NIT Silchar , whose main goal is to care for the general development of the students, particularly those in the ECE branch. It gives upcoming talented minds a platform to display their intellectual, technical, and artistic prowess.It helps the newcomers adjust to the course and develop positive relationships with the seniors, through several interactive sessions.
        </div>
      </div>
      <div className="annual" id='annual'>
        <h2 style={{letterSpacing:"2px"}}>Annual Attractions</h2>
        <Slider {...settings}>
                <Cards src={Polygon} message={"The new members of the Electronics and Communication Department are cordially welcomed by ECS. The numerous facets of the branch, the faculties, and the various events that the society has planned for them are introduced to the newcomers. Freshmen are given the chance to clear any query they may have about the branch."}
                ocassion={"Orientation"}/>
                <Cards ocassion={'Spectrum'} message={"Spectrum is the annual branch fest of ECE organised to foster the technical and artistic traits in the students .To display a variety of skills, coding competitions, hackathons, literary contests, photography competitions, poster competitions, and many more amusing competitions are organised."}
                src={Polygon}/>
                <Cards src={Polygon} message={"The departmental bulletin for ECE, which is published yearly, is a storehouse of knowledge on the branch. It records every occurrence that takes place during the year. The poets, writers, and painters have the opportunity to showcase their untapped ability."}
                ocassion={"Spectre"}/>
                <Cards message={"We say adieu in style. Final-year seniors leave the college in a fun and memorable way by walking through Dahleez. Dahleez, the ECE branch farewell, gives  the seniors a chance to reconcile their exciting college journey."} ocassion={"Dehleez"} src={Polygon}/>
        </Slider>
      </div>
      <div className="gallery_container">
        <h2 style={{letterSpacing:"3px",display:"block",marginBottom:"4rem"}}>Gallery</h2>
        <GallerySlider/>
        <Link className='button1' to="/Gallery">Show More</Link>
      </div>
      <Footer />
    </>
  )
}

export default Home