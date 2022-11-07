import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import Particle from '../Particle.js'
import "./member.css"
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
      src:"https://i.ibb.co/qg57b8L/Whats-App-Image-2022-11-01-at-11-43-22-AM.jpg"
    },
    {
      name: "Sanidhya Sinha",
      desig: "Junior Executive Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/PTrzXMW/Whats-App-Image-2022-10-30-at-1-24-40-AM.jpg"
    },
    {
      name: "Vibha Garg",
      desig: "Junior Executive Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/QjS3wRJ/Whats-App-Image-2022-11-01-at-10-59-41-AM.jpg"
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
      src:"https://i.ibb.co/LPdBVhG/DSC-0217-01-1.jpg" 
    },
    {
      name: "Himangshu Sharma",
      desig: "Junior Design Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/jWk9mkG/IMG-20220225-012129-105.jpg"
    },
    {
      name: "Diptabh Medhi",
      desig: "Junior Literary Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/gSSTZNd/Whats-App-Image-2022-10-30-at-2-56-31-PM.jpg"
    },
    {
      name: "Ananya Chetia",
      desig: "Junior Literary Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/gR29jcj/Whats-App-Image-2022-11-01-at-11-39-13-PM.jpg"
    },
    {
      name: "Uttirna Talukdar",
      desig: "Junior Literary Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/tq1PGL9/Whats-App-Image-2022-11-06-at-11-40-26-PM.jpg"
    },
    {
      name: "Rohan Jha",
      desig: "Junior Technical Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/ZhppwJ8/IMG-20211110-164910.jpg" 
    },
    {
      name: "Vishnu Padmakumar",
      desig: "Junior Technical Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/7zcrkSy/Whats-App-Image-2022-11-03-at-11-31-49-PM.jpg",
    },
    {
      name: "Rayyan Shaikh",
      desig: "Junior Technical Member",
      insta: "link",
      linkedin: "link",
      src:"https://i.ibb.co/q5WX5D2/pfp1.png" 
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