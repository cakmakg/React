import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <NavLink className="nav-link" to="/" >
    home
    </NavLink>
    <NavLink className="nav-link" to="/about">
    ABOUT
    </NavLink>
    <NavLink className="nav-link" to="/github">
    GITHUB
    </NavLink>
    <NavLink className="nav-link" to="/logout">
    LOGOUT
    </NavLink>

    </div>
    
  )
}

export default Navbar