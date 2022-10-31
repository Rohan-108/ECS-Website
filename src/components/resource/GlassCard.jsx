import React from 'react'

const GlassCard = ({id,filename,setView,setBook,book}) => {
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
    </div>
  )
}

export default GlassCard