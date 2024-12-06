import React from 'react'
import { Container,Image } from 'react-bootstrap'
import nbaLogo from "../assets/nba-logo.png"
const Header = () => {
  return (
    <Container className="my-3">
        <Image src={nbaLogo}/>
        <h1 className="display-4 fw-bold font-monospace my-1 ">NBA Legends</h1>
    </Container>
  )
}

export default Header