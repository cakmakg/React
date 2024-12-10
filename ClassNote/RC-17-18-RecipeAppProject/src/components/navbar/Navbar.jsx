import React from 'react'
import {  } from 'react-router-dom'
import "./NavbarStyles.jsx"
import { Nav, Menu, MenuLink, Logo } from "./NavbarStyles";

const Navbar = () => {
  return (
       
    <Nav>
     <Menu>
    <Logo to="/home">Clarusway</Logo>
   
    <MenuLink  to="/about">
    ABOUT
    </MenuLink>
    <a href="/github">
    GITHUB
    </a>
    <MenuLink  to="/logout">
    LOGOUT
    </MenuLink>
    </Menu> 

    </Nav>
    
    
    

    
  )
}

export default Navbar