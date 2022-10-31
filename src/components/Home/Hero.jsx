import React from 'react'
import Polygon from "../../assets/images/Polygon.png"
import "./home.css"
const Hero = () => {
  return (
    <div className='hero_section'>
        <img src={Polygon} alt="polygon" id='poly1' loading='lazy'/>
        <img src={Polygon} alt="polygon" id='poly2' loading='lazy'/>
        <img src={Polygon} alt="polygon" id='poly3' loading='lazy'/>
        <div className='heading'>Electronics and Communication Society</div>
        <div className='nit'>NIT Silchar</div>
    </div>
  )
}

export default Hero