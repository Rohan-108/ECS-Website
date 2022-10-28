import React from 'react'

const GlassCard = ({id,filename,src,href,sem,setView,setBook,book}) => {
    const handleclick=()=>{
        setView(false);
        const newBook=book.map(obj=>{
            if(obj.id===id){
                return {id:id,value:true}
            }
            return obj;
        })
        setBook(newBook);
    }
  return (
    <div className='glass_container'>
        <p onClick={handleclick} style={{cursor:"pointer"}}>{filename}</p>
        <div className='glassImage'>
            {src &&<img src={src} alt="folder" />}
        </div>
        {sem &&<a className='glassLink' href={href} target="_blank">Open it</a>}
    </div>
  )
}

export default GlassCard