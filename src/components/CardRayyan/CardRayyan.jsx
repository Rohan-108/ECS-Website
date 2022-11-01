import React from 'react'
import "./cardRayyan.css"
import insta from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"

export default function CardRayyan({data}) {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <img src={data.src} alt="placeholder" className="prof-pic" />
          <div className="bottom-container">

            <h3>{data.name}</h3>
            <p>{data.desig}</p>
            <div className="linksR">

              <a href={data.insta}><img src={insta} alt="insta" className="soc-icon"/></a>
              <a href={data.linkedin}><img src={linkedin} alt="twitter" className="soc-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
