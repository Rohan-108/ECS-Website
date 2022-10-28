import React from 'react'
import Polygon from "../../assets/images/Polygon.png"
import "./home.css"
const Hero = () => {
  return (
    <div className='hero_section'>
        <img src={Polygon} alt="polygon" id='poly1'/>
        <img src={Polygon} alt="polygon" id='poly2'/>
        <img src={Polygon} alt="polygon" id='poly3'/>
        <div className='heading'>Electronics and Communication Society</div>
        <div className='nit'>NIT Silchar</div>
    </div>
  )
}

export default Hero