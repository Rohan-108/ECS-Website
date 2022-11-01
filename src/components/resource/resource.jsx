import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import "./Resource.css"
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
/////particle effect
import Particle from '../Particle'
import Footer from '../Footer/Footer'
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
    <Particle/>
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
        <Book bookName={"MA-101"} src={Ma101} href={"https://drive.google.com/drive/folders/1U049Mmp5HQz9Ru-mVG63STDlG5yBT4ao?usp=sharing"}/>
        <Book bookName={"CE-101"} src={ce101} href={"https://drive.google.com/drive/folders/1UXENwEHI0NXr7fZlCWiWnOQbdYx3JwTh?usp=sharing"}/>
        <Book bookName={"CS-101"} src={cs101} href={"https://drive.google.com/file/d/1JbHzF7H8BTe5LLkCTz6mUga4BDO7llK3/view?usp=sharing"}/>
        <Book bookName={"EC-101"} src={ec101} href={"https://drive.google.com/drive/folders/1UW6MITK5Wp6N413KvtBO655AiYUfWHTd?usp=sharing"}/>
        <Book bookName={"CH-101"} src={ch101} href={"https://drive.google.com/drive/folders/1UPJ6HVHTM4Bqb-r7IHikZxW4mJCsVhnI?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[1].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EE-101"} src={ee101} href={"https://drive.google.com/drive/folders/17_suMpeZ_hc-UhaNeoMaTQYIfIAPp4um?usp=sharing"}/>
        <Book bookName={"EGD"} src={egd} href={"https://drive.google.com/drive/folders/1Rl8hgGomTDegkm_N4FBfWH9WTqtM7Ha2?usp=sharing"}/>
        <Book bookName={"HS-101"} src={hs101} href={"https://drive.google.com/drive/folders/1Ymd5n6V724E6OEL6lGEjVqrfwTmIpn7g?usp=sharing"}/>
        <Book bookName={"ME-101"} src={me101} href={"https://drive.google.com/drive/folders/11E9dNQCvgRO2FXRWRtWcER3qDf_-iqYB?usp=sharing"}/>
        <Book bookName={"PH-101"} src={ph101} href={"https://drive.google.com/drive/folders/14rkf-pptG_AZ72QcyQpel5MfPJn5Fl7I?usp=sharing"}/>
        <Book bookName={"MA-102"} src={ma102}href={"https://drive.google.com/drive/folders/1yq3nYJLLgfBTdzVTLmLQpzKtsaKpcRej?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[2].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"MA-202"} src={Ma101} href={"https://drive.google.com/drive/folders/1o9O7EcyZWrebukg4tFr5f49UsP3BoY4m?usp=sharing"}/>
        <Book bookName={"EC-101"} src={ec201} href={"https://drive.google.com/drive/folders/1yg5DfbygXgUOw8hZY0PyRfNc1J5i9BL8?usp=sharing"}/>
        <Book bookName={"EC-202"} src={ec202} href={"https://drive.google.com/drive/folders/1X-NAB6RW7gt7D02iN4LrlodJdh-ExN-8?usp=sharing"}/>
        <Book bookName={"EC-203"} src={ec203} href={"https://drive.google.com/drive/folders/1ZreTTYywS3I6NXJqcKwa_BVprsv-GcRa?usp=sharing"}/>
        <Book bookName={"EE-221"} src={ee221} href={"https://drive.google.com/drive/folders/1pDK7I25VsC2-xUpxVP7QPbJvEQln2-LI?usp=sharing"}/>
        <Book bookName={"CS-201"} src={cs101} href={"https://drive.google.com/drive/folders/1Waw3okYfQZ4LAv0M4gH2hjDxihvYBp1U?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[3].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EC-205"} src={ec205} href={"https://drive.google.com/drive/folders/1VbiSWNCbpDxaPNC4h1tsv1Q_c6_i-8Di?usp=sharing"}/>
        <Book bookName={"EC-206"} src={ec206} href={"https://drive.google.com/drive/folders/1Vd5SP6jI3G4E4Yk6h7v257End3nZxR-G?usp=sharing"}/>
        <Book bookName={"EC-207"} src={ec207} href={"https://drive.google.com/drive/folders/1VjeumFaFfRsttzQOeKMILlVrdjqO7sLH?usp=sharing"}/>
        <Book bookName={"EC-208"} src={ec208}href={"https://drive.google.com/drive/folders/1VlFx3vh1zbMIBPJJLJw0H4lEIhdUXtw_?usp=sharing"}/>
        <Book bookName={"EC-209"} src={ec209}href={"https://drive.google.com/drive/folders/1Vaoa_VekARLfRlT3Pu9WjMvV4VMQJuTG?usp=sharing"}/>
        <Book bookName={"EC-210"} src={ec210}href={"https://drive.google.com/drive/folders/1VgxRDqHTmOH7tW15Ineqt-6xRgvSJBGa?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[4].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EC-301"} src={ec301} href={"https://drive.google.com/drive/folders/1k32bMGitS955ldzfUzJckEWc5-NSy6Gy?usp=sharing"}/>
        <Book bookName={"EC-302"} src={ec302}href={"https://drive.google.com/drive/folders/1O9YNjQ9FfjSyzqu6B3qkPbY5hFqRG9hU?usp=sharing"}/>
        <Book bookName={"EC-303"} src={ec303}href={"https://drive.google.com/drive/folders/1dP_PGkswfhyKRpCqjpqKSS8rj-ZvLEzm?usp=sharing"}/>
        <Book bookName={"EC-304"} src={ec304}href={"https://drive.google.com/drive/folders/11VHsWHEthLjANjvI4SqZpeIJpro_jYhQ?usp=sharing"}/>
        <Book bookName={"EC-305"} src={ec305}href={"https://drive.google.com/drive/folders/1N2x793UZjkPjZs2hueDIfTUiTkzxqWOn?usp=sharing"}/>
        <Book bookName={"EC-306"} src={ec306}href={"https://drive.google.com/drive/folders/1NEvBWsHpHa9JElmfOUQ-KHyxF4wCw9qH?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[5].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"EC-307"} src={ec307} href={"https://drive.google.com/drive/folders/1pDulg3-Lcfv0yTQvS132EeaqJLnkMBdk?usp=sharing"}/>
        <Book bookName={"EC-308"} src={ec308} href={"https://drive.google.com/drive/folders/1_lU7v6PHvBXQ4oABxAA8QV2qhS03tlyA?usp=sharing"}/>
        <Book bookName={"EC-309"} src={ec309} href={"https://drive.google.com/drive/folders/1LXLRsjGDQF6QDJe6-kmCZX2zvHguczO6?usp=sharing"}/>
        <Book bookName={"EC-310"} src={ec310} href={"https://drive.google.com/drive/folders/1XCKAWd8z8ApvRwdjqq8txgw9Gz6Sib1r?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[6].value &&<div className="cards">
      <div className="wrapper">
        <Book bookName={"MS-401"} src={ms401} href={"https://drive.google.com/drive/folders/1R2sZIkWWahKbhvv5elvq3xAqIrbLHBXu?usp=sharing"}/>
        <Book bookName={"EC-481"} src={ec481} href={"https://drive.google.com/drive/folders/1s9sX1mFn5C1F8QFaMYyV4HVR2uqevw51?usp=sharing"}/>
        <Book bookName={"EC-437"} src={ec437} href={"https://drive.google.com/drive/folders/11LBc0YsCPw5d_qDLMXDCTkdYroXpL4S8?usp=sharing"}/>
        <Book bookName={"EC-401"} src={ec401} href={"https://drive.google.com/drive/folders/1il1y5gfG8Gjtw_zuMipMcCmhrsis5_4e?usp=sharing"}/>
        </div>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    {book[7].value &&<div style={{display:"flex",justifyContent:"center",flexDirection:"column",gap:'2rem',alignItems:"center"}}>
       <GlassCard filename={"Study by Yourself"}/>
        <button className='button' onClick={handleclick}>Go Back</button>
      </div>
    }
    <Footer />
    </>
  )
}

export default Resource