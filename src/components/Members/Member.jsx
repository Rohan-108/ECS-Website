import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import Particle from '../Particle.js'
import "./member.css"
////imports for images//////
import vibha from "../../assets/MemberImage/vibha.jpeg"
import aryadeep from "../../assets/MemberImage/aryadeep.jpeg"
import bhargab from "../../assets/MemberImage/bhargab.jpeg"
import sanidhya from "../../assets/MemberImage/sanidhya.jpeg"
import diptabh from "../../assets/MemberImage/diptabh.jpeg"
import ananya from "../../assets/MemberImage/ananya.jpeg"
import rohan from "../../assets/MemberImage/rohan.jpg"
import vishnu from "../../assets/MemberImage/vishnu.jpeg"
import uttrina from "../../assets/MemberImage/uttrina.jpeg"
import himangshu from "../../assets/MemberImage/himangshu.jpg"
import rayyan from "../../assets/MemberImage/rayyan.png"
const Member = ({currentUser,setCurrentUser}) => {

  const leadData = [
    {
      name: "Afsana Yasmin",
      desig: "President",
      insta: "link",
      linkedin: "link"
    },
  ]
  const senData = [
    {
      name: "Aaryan",
      desig: "General Secretary",
      insta: "link",
      linkedin: "link"
    },
    {
      name: "Abhinav Ghosh",
      desig: "Technical Head",
      insta: "link",
      linkedin: "link"
    },
    {
      name: "Nishtha Baruah",
      desig: "Literary and PR Head",
      insta: "link",
      linkedin: "link"
    },
    {
      name: "Vani Goel",
      desig: "Design Head",
      insta: "link",
      linkedin: "link"
    },
    {
      name: "Abhigyan Dandriyal",
      desig: "Treasurer",
      insta: "link",
      linkedin: "link"
    },
  ]
  const junData = [
    {
      name: "Bhargab Raj Gogoi",
      desig: "Junior Executive Member",
      insta: "link",
      linkedin: "link",
      src:bhargab
    },
    {
      name: "Sanidhya Sinha",
      desig: "Junior Executive Member",
      insta: "link",
      linkedin: "link",
      src:sanidhya
    },
    {
      name: "Vibha Garg",
      desig: "Junior Executive Member",
      insta: "link",
      linkedin: "link",
      src:vibha
    },
    {
      name: "Priyambada Hazarika",
      desig: "Junior Design Member",
      insta: "link",
      linkedin: "link"
    },
    {
      name: "Aryadeep Gogoi",
      desig: "Junior Design Member",
      insta: "link",
      linkedin: "link",
      src:aryadeep
    },
    {
      name: "Himangshu Sharma",
      desig: "Junior Design Member",
      insta: "link",
      linkedin: "link",
      src:himangshu
    },
    {
      name: "Diptabh Medhi",
      desig: "Junior Literary Member",
      insta: "link",
      linkedin: "link",
      src:diptabh
    },
    {
      name: "Ananya Chetia",
      desig: "Junior Literary Member",
      insta: "link",
      linkedin: "link",
      src:ananya
    },
    {
      name: "Uttirna Talukdar",
      desig: "Junior Literary Member",
      insta: "link",
      linkedin: "link",
      src:uttrina
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
      src:vishnu,
    },
    {
      name: "Rayyan Shaikh",
      desig: "Junior Technical Member",
      insta: "link",
      linkedin: "link",
      src:rayyan
    },
  ]


  return (
    <>
      <Particle/>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="lead">
      {leadData.map((elem, i) => 
          (<CardRayyan 
          key={i}
          data={elem}
          />)
        )}
      </div>
      <div className="designation-title">Senior Members</div>
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