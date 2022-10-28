import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./home.css"
const Message = (props) => {
    const{message,name,designation,src}=props;
  return (
    <div className='message_container'>
        <img src={src} alt="image for people" id='img2s'/>
        <div className="mess">{message}</div>
        <div className="name_deg">
            <p>{name}</p>
            <p>-{designation}</p>
        </div>
    </div>
  )
}

export default Message