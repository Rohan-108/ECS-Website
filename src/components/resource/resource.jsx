import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import "./Resource.css"
import { Link } from 'react-router-dom'
import GlassCard from './GlassCard'
import Reading from "../../assets/images/reading.svg"
import Book from './Book'
///importing photo for 1sem
import Ma101 from "../../assets/ResHubImages/1stSemImg/ma101.jpeg"
import ch101 from "../../assets/ResHubImages/1stSemImg/ch101.jpg"
import cs101 from "../../assets/ResHubImages/1stSemImg/cs101..jpg"
import ec101 from "../../assets/ResHubImages/1stSemImg/ec101.jpg"
import ce101  from "../../assets/ResHubImages/1stSemImg/ce101.jpg"
////importing for 2nd sem 
import ee101 from "../../assets/ResHubImages/2ndSemImg/EE101.jpg"
import egd from "../../assets/ResHubImages/2ndSemImg/EGD.jpg"
import hs101 from "../../assets/ResHubImages/2ndSemImg/HS101.jpg"
import ma102 from "../../assets/ResHubImages/2ndSemImg/MA102.png"
import me101 from "../../assets/ResHubImages/2ndSemImg/ME101.jpg"
import ph101 from "../../assets/ResHubImages/2ndSemImg/PH101.jpg"
////importing for 3rd sem
import ec201 from "../../assets/ResHubImages/3rdSemImg/EC201.jpg"
import ec202 from "../../assets/ResHubImages/3rdSemImg/EC202.jpg"
import ec203 from "../../assets/ResHubImages/3rdSemImg/EC203.jpg"
import ee221 from "../../assets/ResHubImages/3rdSemImg/EE221.jpg"
////importing for 4th sem
import ec205 from "../../assets/ResHubImages/4thSemImg/EC205.jpg"
import ec206 from "../../assets/ResHubImages/4thSemImg/EC206.jpg"
import ec207 from "../../assets/ResHubImages/4thSemImg/EC207.jpg"
import ec208 from "../../assets/ResHubImages/4thSemImg/EC208.jpg"
import ec209 from "../../assets/ResHubImages/4thSemImg/EC209.jpg"
import ec210 from "../../assets/ResHubImages/4thSemImg/EC210.jpg"
////IMPORTING FOR 5TH SEM
import ec301 from "../../assets/ResHubImages/5thSemImg/EC301.jpg"
import ec302 from "../../assets/ResHubImages/5thSemImg/EC302.jpg"
import ec303 from "../../assets/ResHubImages/5thSemImg/EC303.jpg"
import ec304 from "../../assets/ResHubImages/5thSemImg/EC304.jpg"
import ec305 from "../../assets/ResHubImages/5thSemImg/EC305.jpg"
import ec306 from "../../assets/ResHubImages/5thSemImg/EC306.jpg"
/////importing for 6th sem
import ec307 from "../../assets/ResHubImages/6thSemImg/EC307.jpg"
import ec308 from "../../assets/ResHubImages/6thSemImg/EC308.jpg"
import ec309 from "../../assets/ResHubImages/6thSemImg/EC309.jpg"
import ec310 from "../../assets/ResHubImages/6thSemImg/EC310.jpg"
////importing for 7th sem/////
import ec401 from "../../assets/ResHubImages/7thSemImg/EC401.jpg"
import ec437 from "../../assets/ResHubImages/7thSemImg/EC437.jpg"
import ec481 from "../../assets/ResHubImages/7thSemImg/EC481.jpg"
import ms401 from "../../assets/ResHubImages/7thSemImg/MS401.jpg"

const Resource = (props) => {
  const {currentUser,setCurrentUser}=props;
  const [view,setView]=useState(true);
  const sems=[
    {
      id:1,
      text:"1st Sem",
    },
    {
      id:2,
      text:"2nd Sem",
    },
    {
      id:3,
      text:"3rd Sem",
    },
    {
      id:4,
      text:"4th Sem",
    },
    {
      id:5,
      text:"5th Sem",
    },
    {
      id:6,
      text:"6th Sem",
    },
    {
      id:7,
      text:"7th Sem",
    },
    {
      id:8,
      text:"8th Sem",
    }
  ]
  const books=[
    {id:1,value:false},
    {id:2,value:false},
    {id:3,value:false},
    {id:4,value:false},
    {id:5,value:false},
    {id:6,value:false},
    {id:7,value:false},
    {id:8,value:false},
  ]
  const [book,setBook]=useState(books);
  const handleclick=()=>{
    setBook(books);
    setView(true);
  }
  return (
    <>
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
      <img src={Reading} alt="reading" />
    </div>
    <div className="Glasscard_container">
    {view && sems.map((e)=>{
      return(
        <GlassCard filename={e.text} setView={setView} id={e.id}
        setBook={setBook} book={book}/>
      )
    })}
    </div>
    {book[0].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"MA-101"} src={Ma101}/>
        <Book bookName={"CE-101"} src={ce101}/>
        <Book bookName={"CS-101"} src={cs101}/>
        <Book bookName={"EC-101"} src={ec101}/>
        <Book bookName={"CH-101"} src={ch101}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[1].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EE-101"} src={ee101}/>
        <Book bookName={"EGD"} src={egd}/>
        <Book bookName={"HS-101"} src={hs101}/>
        <Book bookName={"ME-101"} src={me101}/>
        <Book bookName={"PH-101"} src={ph101}/>
        <Book bookName={"MA-102"} src={ma102}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[2].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"MA-202"} src={Ma101}/>
        <Book bookName={"EC-101"} src={ec201}/>
        <Book bookName={"EC-202"} src={ec202}/>
        <Book bookName={"EC-203"} src={ec203}/>
        <Book bookName={"EE-221"} src={ee221}/>
        <Book bookName={"CS-201"} src={cs101}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[3].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EC-205"} src={ec205}/>
        <Book bookName={"EC-206"} src={ec206}/>
        <Book bookName={"EC-207"} src={ec207}/>
        <Book bookName={"EC-208"} src={ec208}/>
        <Book bookName={"EC-209"} src={ec209}/>
        <Book bookName={"EC-210"} src={ec210}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[4].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EC-301"} src={ec301}/>
        <Book bookName={"EC-302"} src={ec302}/>
        <Book bookName={"EC-303"} src={ec303}/>
        <Book bookName={"EC-304"} src={ec304}/>
        <Book bookName={"EC-305"} src={ec305}/>
        <Book bookName={"EC-306"} src={ec306}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[5].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EC-307"} src={ec307}/>
        <Book bookName={"EC-308"} src={ec308}/>
        <Book bookName={"EC-309"} src={ec309}/>
        <Book bookName={"EC-310"} src={ec310}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[6].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"MS-401"} src={ms401}/>
        <Book bookName={"EC-481"} src={ec481}/>
        <Book bookName={"EC-437"} src={ec437}/>
        <Book bookName={"EC-401"} src={ec401}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[7].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"MA-101"} src={Ma101}/>
        <Book bookName={"CE-101"} src={ce101}/>
        <Book bookName={"CS-101"} src={cs101}/>
        <Book bookName={"EC-101"} src={ec101}/>
        <Book bookName={"CH-101"} src={ch101}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }

    {/* footer section */}
     <div className='footer_container'>
        <div className="grid_container">
          <div className="col1">
            <p style={{fontWeight:500}}>Quick Links</p>
            <div style={{display:"flex",flexDirection:"column",fontSize:".8rem",justifyContent:"center",textAlign:"center",gap:"1rem"}}>
              <Link to="/ResourceHub">Resource Hub</Link>
              <a href='#'>Message</a>
              <a href='#'>Annual Attractions</a>
            </div>
          </div>
          <div className="col2">
            <p style={{fontWeight:500}}>Contact Us</p>
            <div>
              <p style={{color:"white"}}>Email: ecs.nitsilchar2022@gmail.com</p>
            </div>
          </div>
          <div className="col3" >
            <p style={{fontWeight:500}}>Quick Links</p>
            <div style={{display:"flex",flexDirection:"column",fontSize:".8rem",justifyContent:"center",textAlign:"center",gap:"1rem"}}>
              <a href='#'>Message</a>
              <Link to="/Member">Members</Link>
              <Link to="/Gallery">Gallery</Link>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>© Copyright 2022 All rights reserved</p>
          <p>ECS NIT Silchar</p>
        </div>
      </div>
    </>
  )
}

export default Resource