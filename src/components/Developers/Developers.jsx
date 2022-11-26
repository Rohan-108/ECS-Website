import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import "./developers.css"
import Particle from "../Particle"
import maharav from '../../assets/galleryImage/maharav.jpeg'
import jacinth from '../../assets/galleryImage/jacinth.jpeg'
import {motion}from 'framer-motion'
const Developers = ({currentUser,setCurrentUser}) => {
  const dataAbhinav={
    name:"Abhinav Ghosh",
    desig:"Technical Head",
    insta:"link",
    linkedin:"link",
    src:"https://i.ibb.co/NSQW2PN/Whats-App-Image-2022-11-08-at-12-58-15-AM.jpg"
  }
  const devData = [
  {
    name: "Rayyan Shaikh",
    desig: "Developer",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/q5WX5D2/pfp1.png" 
  },
  {
    name: "Rohan Jha",
    desig: "Developer",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/ZhppwJ8/IMG-20211110-164910.jpg" 
  },
  {
    name: "Vishnu Padmakumar",
    desig: "Developer",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/7zcrkSy/Whats-App-Image-2022-11-03-at-11-31-49-PM.jpg",
  },
  {
    name: "Himangshu Sharma",
    desig: "Developer",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
  },
  {
    name: "Aryadeep Gogoi",
    desig: "UI/UX",
    insta: "link",
    linkedin: "link",
    src:"https://i.ibb.co/LPdBVhG/DSC-0217-01-1.jpg"
  },
  {
    name: "Jacinth Mahanta",
    desig: "UI/UX",
    insta: "link",
    linkedin: "link",
    src:jacinth
  },
  {
    name: "Maharnav",
    desig: "UI/UX",
    insta: "link",
    linkedin: "link",
    src:maharav
  }
  ]
  return (
    <>
    <Particle/>
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <motion.div initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{type:'spring',duration:1.8}}style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2rem",marginBottom:"-5rem"}}>
        <CardRayyan 
          data={dataAbhinav}/>
    </motion.div>
    <motion.div className="dev-container1"
     initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{type:'spring',duration:1.8}}
        > 
        {devData.map((elem, i) => 
          (<CardRayyan 
          key={i}
          data={elem}

          />)

        )}
        
    </motion.div>
    <Footer/>
    </>
  )
}

export default Developers