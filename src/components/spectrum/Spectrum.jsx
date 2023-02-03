import Footer from "../Footer/Footer";
import Slider from "react-slick";
import lines from "../../assets/images/lines.png";
import Navbar from "../Navbar/Navbar";
import Particle from "../Particle";
import Poster from "./Poster";
import { useState } from "react";
import Textspan from "../Home/Textspan";
import { motion } from "framer-motion";
import poesis from "../../assets/galleryImage/Poesis.png";
import moments from "../../assets/galleryImage/moments.jpeg";
import ipl from "../../assets/galleryImage/ipl.jpeg";
import smartdroid from "../../assets/galleryImage/smartdroid.jpeg";
import fastWeb from "../../assets/galleryImage/fastWeb.jpeg";
import getHired from "../../assets/galleryImage/getHired.jpeg";
import knock from "../../assets/galleryImage/knock.jpeg";
import arduino from "../../assets/galleryImage/arduino.png";
import electro from "../../assets/galleryImage/electro.png";
import chamber from "../../assets/galleryImage/chamber.jpeg";
import "./spectrum.css";
const Spectrum = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { currentUser, setCurrentUser } = props;
  const sentence = "Spectrum 9.0".split("");
  const data = [
    poesis,
    moments,
    ipl,
    smartdroid,
    fastWeb,
    getHired,
    knock,
    arduino,
    electro,
    chamber,
  ];
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
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
    <>
      <Particle />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="specContainer" style={{ height: "50vh" }}>
        <img src={lines} alt="lines" id="lines" />
        <img src={lines} alt="lines" id="lines1" />
        <motion.div
          className="heading1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1.8 }}
        >
          {sentence.map((letter, index) => {
            return (
              <Textspan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </Textspan>
            );
          })}
        </motion.div>
      </div>
      <Slider {...settings2}>
        {data.map((img, index) => {
          return (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <img src={img} alt="gallery" loading="lazy" />
            </div>
          );
        })}
      </Slider>
      <Poster />
      <Footer />
    </>
  );
};

export default Spectrum;
