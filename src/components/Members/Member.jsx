import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import Particle from '../Particle.js'
import "./member.css"
import afsana from "../../assets/galleryImage/Afsana.jpg"
import vani from "../../assets/galleryImage/Vani_Goel.jpg"
import sneha from "../../assets/galleryImage/sneha.jpg"
import aryan from "../../assets/galleryImage/aryan_batch.jpg"
import priyambada from "../../assets/galleryImage/priyambada.jpg"
import bhargab from "../../assets/galleryImage/bhargab.jpeg"
import {motion} from 'framer-motion'
const Member = ({currentUser,setCurrentUser}) => {

  const leadData = [
    {
      name: "Afsana Yasmin",
      desig: "President",
      insta: "https://www.facebook.com/afsanayasmin.37?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/afsanayasmin1502/",
      src:afsana,
    },
    {
      name: "Aditya Bhura",
      desig: "Senior Member",
      insta: "https://www.facebook.com/aditya.bhura.5",
      linkedin: "https://www.linkedin.com/in/aditya-bhura-98b43a1a2/",
      src:"https://i.ibb.co/0Dwq6cC/aditya.jpg"
    },
  ]
  const senData = [
    {
      name: "Aaryan",
      desig: "General Secretary",
      insta: "https://www.facebook.com/profile.php?id=100015547038499",
      linkedin: "https://www.linkedin.com/in/aaryan4200/",
      src:aryan
    },
    {
      name: "Abhinav Ghosh",
      desig: "Technical Head",
      insta: "https://www.facebook.com/profile.php?id=100006867829068&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/abhinav-ghosh-sl/",
      src:"https://i.ibb.co/NSQW2PN/Whats-App-Image-2022-11-08-at-12-58-15-AM.jpg",
    },
    {
      name: "Nishtha Baruah",
      desig: "Literary and PR Head",
      insta: "https://www.facebook.com/nistha.baruah.58",
      linkedin: "https://www.linkedin.com/in/nistha-baruah-201abb212/",
      src:"https://i.ibb.co/410wxPW/IMG-20220722-WA0014.jpg"
    },
    {
      name: "Vani Goel",
      desig: "Design Head",
      insta: "https://www.facebook.com/profile.php?id=100058433141458",
      linkedin: "https://www.linkedin.com/in/vanigoel14/",
      src:vani
    },
    {
      name: "Abhigyan Dandriyal",
      desig: "Treasurer",
      insta: "https://www.facebook.com/abhigyan.dandriyal.7",
      linkedin: "https://www.linkedin.com/in/abhigyan-dandriyal-9a32b7131/",
      src:"https://i.ibb.co/D8m0jmj/EDITED.png",
    },
    {
      name: "Sneha Das",
      desig: "Senior Executive",
      insta: "https://www.facebook.com/snehadiya.das?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/sneha-das-2669b7227/",
      src:sneha
    }
  ]
  const junData = [
    {
      name: "Bhargab Raj Gogoi",
      desig: "Junior Executive Member",
      insta: "https://www.facebook.com/profile.php?id=100076289673970&mibextid=LQQJ4d",
      linkedin: "https://www.linkedin.com/in/bhargab-raj-gogoi-348236241",
      src:bhargab
    },
    {
      name: "Sanidhya Sinha",
      desig: "Junior Executive Member",
      insta: "https://www.facebook.com/profile.php?id=100076053614436",
      linkedin: "https://www.linkedin.com/in/sanidhya-sinha-293100229",
      src:"https://i.ibb.co/PTrzXMW/Whats-App-Image-2022-10-30-at-1-24-40-AM.jpg"
    },
    {
      name: "Vibha Garg",
      desig: "Junior Executive Member",
      insta: "https://www.facebook.com/profile.php?id=100074807146502&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vibha-garg-978047225",
      src:"https://i.ibb.co/QjS3wRJ/Whats-App-Image-2022-11-01-at-10-59-41-AM.jpg"
    },
    {
      name: "Priyambada Hazarika",
      desig: "Junior Design Member",
      insta: "https://www.facebook.com/profile.php?id=100076411391244",
      linkedin: "https://www.linkedin.com/in/priyambada-hazarika-423237241",
      src:priyambada
    },
    {
      name: "Aryadeep Gogoi",
      desig: "Junior Design Member",
      insta: "https://www.facebook.com/profile.php?id=100076109862434",
      linkedin: "https://www.linkedin.com/in/aryadeep-gogoi-696609236",
      src:"https://i.ibb.co/LPdBVhG/DSC-0217-01-1.jpg" 
    },
    {
      name: "Himangshu Sharma",
      desig: "Junior Design Member",
      insta: "https://www.facebook.com/himangshu.sarma.54379236",
      linkedin: "https://www.linkedin.com/in/himangshu-sarma-34813722a",
      src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
    },
    {
      name: "Diptabh Medhi",
      desig: "Junior Literary Member",
      insta: "https://www.facebook.com/profile.php?id=100076196678788",
      linkedin: "http://www.linkedin.com/in/diptabh-medhi-4836a8229",
      src:"https://i.ibb.co/gSSTZNd/Whats-App-Image-2022-10-30-at-2-56-31-PM.jpg"
    },
    {
      name: "Ananya Chetia",
      desig: "Junior Literary Member",
      insta: "https://www.facebook.com/ananya.chetia.10",
      linkedin: "https://www.linkedin.com/mwlite/in/ananya-chetia-a06ab6223",
      src:"https://i.ibb.co/gR29jcj/Whats-App-Image-2022-11-01-at-11-39-13-PM.jpg"
    },
    {
      name: "Uttirna Talukdar",
      desig: "Junior Literary Member",
      insta: "https://www.facebook.com/uttirna.talukdar",
      linkedin: "https://www.linkedin.com/in/uttirna-talukdar-a9539b243/",
      src:"https://i.ibb.co/tq1PGL9/Whats-App-Image-2022-11-06-at-11-40-26-PM.jpg"
    },
    {
      name: "Rohan Jha",
      desig: "Junior Technical Member",
      insta: "https://www.facebook.com/profile.php?id=100010061770737",
      linkedin: "https://www.linkedin.com/in/rohan-jha-ab635322b/",
      src:"https://i.ibb.co/ZhppwJ8/IMG-20211110-164910.jpg" 
    },
    {
      name: "Vishnu Padmakumar",
      desig: "Junior Technical Member",
      insta: "https://www.facebook.com/profile.php?id=100075797247014&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishnu-padmakumar-8515ba22a",
      src:"https://i.ibb.co/7zcrkSy/Whats-App-Image-2022-11-03-at-11-31-49-PM.jpg",
    },
    {
      name: "Rayyan Shaikh",
      desig: "Junior Technical Member",
      insta: "https://www.facebook.com/rayyan.shaikh.71868/",
      linkedin: "https://www.linkedin.com/in/rayyan-shaikh-a51581129/",
      src:"https://i.ibb.co/q5WX5D2/pfp1.png" 
    },
  ]


  return (
    <>
      <Particle/>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <motion.div className="lead" 
       initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{type:'spring',duration:1.8}}
        >
      {leadData.map((elem, i) => 
          (<CardRayyan 
          key={i}
          data={elem}
          />)
        )}
      </motion.div>
      <motion.div className="designation-title"
       initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{type:'spring',duration:2}}>Senior Members</motion.div>
      <div className="seniors">
      {senData.map((elem, i) => 
          (<CardRayyan 
          key={i}
          data={elem}
          />)
        )}
      </div>
      <div className="designation-title">Junior Members</div>
      <div className="juniors">
      {junData.map((elem, i) => 
          (<CardRayyan 
          key={i}
          data={elem}
          />)
        )}
      </div>
      <Footer/>
    </>

  )
}

export default Member