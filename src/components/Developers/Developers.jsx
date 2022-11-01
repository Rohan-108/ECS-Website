import React from 'react'
import CardRayyan from '../CardRayyan/CardRayyan.jsx'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.jsx'
import "./developers.css"

const Developers = ({currentUser,setCurrentUser}) => {
  
  const devData = [
  {
    name: "Rayyan Shaikh",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },
  {
    name: "Rohan Jha",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },
  {
    name: "Vishnu Padmakumar",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },
  {
    name: "Himangshu Sharma",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },
  {
    name: "Himangshu Sharma",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },
  {
    name: "Himangshu Sharma",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },
  {
    name: "Himangshu Sharma",
    desig: "Junior Technical Member",
    insta: "link",
    linkedin: "link"
  },

  ]



  return (
    <>
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