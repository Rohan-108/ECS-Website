import React from 'react'
import rain from "../../assets/images/circuit.svg"
import "./home.css"
const Hero = () => {
  return (
    <div className='hero_section' style={{height:"75vh"}}>
      <img src={rain} alt='corcuits' id="circuits"/>
      <img src={rain} alt='corcuits' id="circuits1"/>
        <div className='heading'>Electronics and Communication Society</div>
        <div className='nit'>NIT Silchar</div>
    </div>
  )
}

export default Hero