import React, { createContext, useState } from 'react'
import Home from "./components/Home"
import data from "./data"
//!1- context alanı açıyoruz
export const StudentContext=createContext()

const App = () => {

const[students,setStudents]=useState(data)

const changeColor=(id,newRenk)=>{

  setStudents(students.map((a)=>a.id===id ? {...a,color:newRenk}:a))
// set in içinde bir dögüyle, şartı tutan elemanı değiştirmek istersek && yerine ternary tercih etmeliyiz
}

  return (

   //!2- bütün projeye gönderilebilsin diye ilk olarak Home  sayfasını, gönderilecek verilerle ve context le sarmallayalım
    <StudentContext.Provider value={{students,changeColor}}>
      <Home/>
    </StudentContext.Provider>
  )
}

export default App