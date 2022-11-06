import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import "./developers.css"
import Particle from "../Particle"
import rohan from "../../assets/MemberImage/rohan.jpg"
import vishnu from "../../assets/MemberImage/vishnu.jpeg"
import rayyan from "../../assets/MemberImage/rayyan.png"
import himangshu from "../../assets/MemberImage/himangshu.jpg"
const Developers = ({currentUser,setCurrentUser}) => {
  
  const devData = [
  {
    name: "Rayyan Shaikh",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link",
    src:rayyan
  },
  {
    name: "Rohan Jha",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link",
    src:rohan
  },
  {
    name: "Vishnu Padmakumar",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link",
    src:vishnu
  },
  {
    name: "Himangshu Sharma",
    desig: "Junior Design Member",
    insta: "link",
    linkedin: "link",
    src:himangshu
  }
  ]



  return (
    <>
    <Particle/>
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <div className="dev-container1"> 
        {devData.map((elem, i) => 
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

export default Developers