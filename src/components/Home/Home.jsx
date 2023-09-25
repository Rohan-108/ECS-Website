import { Link } from "react-router-dom";
import Slider from "react-slick";
import Hero from "./Hero";
import "./home.scss";
import Message from "./Message";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  washimMeassage,
  hodMessage,
  spectre,
  spectrum,
  gsMessage,
  vcMessage,
  presidentMessage,
  orientation,
  dehleez,
  aboutUs,
} from "./data";
import GallerySlider from "./GallerySlider";
import afsana from "../../assets/galleryImage/Afsana.jpeg";
import fresher from "../../assets/galleryImage/fresher.jpg";
import aryanBatch from "../../assets/galleryImage/aryan_batch.jpg";
import wasim from "../../assets/galleryImage/wasim.jpg";
import dehle from "../../assets/galleryImage/dehleez.jpeg";
import rabul from "../../assets/galleryImage/rabul.jpeg";
import light from "../../assets/galleryImage/light.jpg";
import spect from "../../assets/galleryImage/spectre.jpeg";
const Home = () => {
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
      <Hero />
      <div className="sliders">
        <h2 style={{ letterSpacing: "3px" }}>Message</h2>
        <Slider {...settings1}>
          <Message
            message={washimMeassage}
            name={"Dr. Wasim arif"}
            designation={"Faculty Advisor"}
            src={wasim}
          />
          <Message
            message={gsMessage}
            name={"Aryadeep Gogoi"}
            designation={"General Secretary"}
            src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695668086/ecs/aryadeep_ayq2j9.jpg"
          />
          <Message
            message={vcMessage}
            name={"Aaryan"}
            designation={"Vice President, ECS"}
            src={aryanBatch}
          />
          {/* <Message
            message={vcMessage}
            name={"Aditya Bhura"}
            designation={"Senior Member"}
            src={"https://i.ibb.co/0Dwq6cC/aditya.jpg"}
          /> */}
          <Message
            message={hodMessage}
            designation={"HOD"}
            name={"Rabbul Hussain Laskar"}
            src={rabul}
          />
        </Slider>
      </div>
      <div className="about_us" id="about_us">
        <h2 style={{ letterSpacing: "2px" }}>About Us</h2>
        <div className="about_mess">{aboutUs}</div>
      </div>
      {/* <div className="annual" id="annual">
        <h2 style={{ letterSpacing: "2px" }}>Annual Attractions</h2>
        <Slider {...settings}>
          <Cards src={light} message={orientation} ocassion={"Orientation"} />
          <Cards ocassion={"Spectrum"} message={spectrum} src={fresher} />
          <Cards src={spect} message={spectre} ocassion={"Spectre"} />
          <Cards message={dehleez} ocassion={"Dehleez"} src={dehle} />
        </Slider>
      </div> */}
      <div className="gallery_container">
        <h2
          style={{
            letterSpacing: "3px",
            display: "block",
            marginBottom: "4rem",
          }}
        >
          Gallery
        </h2>
        <GallerySlider />
        <Link className="button1" to="/Gallery">
          Show More
        </Link>
      </div>
    </>
  );
};

export default Home;
