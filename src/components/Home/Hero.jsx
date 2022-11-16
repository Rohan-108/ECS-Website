import React from 'react'
import rain from "../../assets/images/circuit.svg"
import "./home.css"
import Textspan from './Textspan'
import {motion} from "framer-motion"
const Hero = () => {
  const sentence ="Electronics and Communication Society".split("");
  const sentence1 ="NIT Silchar".split("");
  return (
    <div className='hero_section' style={{height:"75vh"}}>
      {/* <img src={rain} alt='corcuits' id="circuits"/>
      <img src={rain} alt='corcuits' id="circuits1"/> */}
        <motion.div className='heading'
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:'spring',duration:1.8,bounce:0.3}}
        >
          {sentence.map((letter,index)=>{
            return(
              <Textspan key={index}>
                {letter===" "?"\u00A0":letter}
              </Textspan>
            )
          })}
          </motion.div>
        <motion.div className='nit'
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{type:'spring',duration:2,bounce:0.3}}
        > 
        {sentence1.map((letter,index)=>{
            return(
              <Textspan key={index}>
                {letter===" "?"\u00A0":letter}
              </Textspan>
            )
          })}</motion.div>
    </div>
  )
}

export default Hero