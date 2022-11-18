import React from 'react'

const GlassCard = ({src,id,filename,setView,setBook,book}) => {
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
        <img src={src} alt="folder" />
        <p onClick={handleclick} style={{cursor:"pointer"}}>{filename}</p>
    </div>
  )
}

export default GlassCard