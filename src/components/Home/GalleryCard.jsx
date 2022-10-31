import React from 'react'
import "./home.css"
const GalleryCard = ({src}) => {
  return (
    <div className='galleryCard'>
        <img src={src} alt="image" id='imgS4' loading='lazy'/>
    </div>
  )
}

export default GalleryCard