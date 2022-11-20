import React from 'react'
import lines from "../../assets/images/lines.png"
import "./home.css"
import Textspan from './Textspan'
import {motion} from "framer-motion"
const Hero = () => {
  const sentence ="Electronics and Communication Society".split("");
  const sentence1 ="NIT Silchar".split("");
  return (
    <div className='hero_section' style={{height:"75vh"}}>
        <img src={lines} alt="lines" id='lines'/>
        <img src={lines} alt="lines" id='lines1'/>
        <motion.div className='heading'
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{type:'spring',duration:1.8}}
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
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{type:'spring',duration:2}}
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