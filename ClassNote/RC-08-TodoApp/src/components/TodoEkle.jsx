import React, { useState } from 'react'


const TodoEkle = ({datam,setDatam}) => {
  const [yapilacakIs,setyapilacakIs]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    setDatam([...datam, {
      id: datam.length,
      text:yapilacakIs ,
      day: new Date().getDate(),
      isDone: false,
    },])
  }

  return (
    <div>
    <h1>Todo App</h1>
    

      {/* 3-bir form oluşturup input içine ekleyelim. 
      4-input içindeki bilgiyi bir statede (yapilacakIs)  tutalım (input onchange)
      5-formun onSubmit bir fonksiyon tanımlayıp  */}
      
    </div>
  )
}

export default TodoEkle