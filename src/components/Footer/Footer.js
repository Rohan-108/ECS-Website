import React from 'react'
import {Link} from 'react-router-dom'
import "../Footer/Footer.css"

const Footer = () => {
    return(
        <>
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

export default Footer