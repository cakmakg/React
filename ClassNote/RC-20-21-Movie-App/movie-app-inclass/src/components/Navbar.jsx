import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>React Movie App</div>

      <div className='right'>
        <div>logo1</div>
        <div><a href="">logo2</a></div>
      </div>
    </div>
  )
}

export default Navbar