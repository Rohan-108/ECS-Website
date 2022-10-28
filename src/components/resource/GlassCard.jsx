import React from 'react'

const GlassCard = ({filename,src,href}) => {
  return (
    <div className='glass_container'>
        <p>{filename}</p>
        <div className='glassImage'>
            <img src={src} alt="folder" />
        </div>
        <a className='glassLink' href={href}>Open it</a>
    </div>
  )
}

export default GlassCard