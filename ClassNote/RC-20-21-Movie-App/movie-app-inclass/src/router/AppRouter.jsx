import React from 'react'
import Navbar from "../components/Navbar"
import Main from "../pages/Main"
import Login from "../pages/Login"
import MovieDetail from "../pages/MovieDetail"
import Register from "../pages/Register"
import { Route, Routes } from 'react-router-dom'



const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/moviedetail/:id' element={<MovieDetail />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>

  )
}

export default AppRouter