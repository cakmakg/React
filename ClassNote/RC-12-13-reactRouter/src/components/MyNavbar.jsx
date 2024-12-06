import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from 'react-router-dom';
import logo from "../img/logo.png"
//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? React uygulamanız içinde, etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın. React uygulamanız içinde, etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. Son olarak, React uygulamanızda harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, <a></a>  etiketini kullanın.Nav.Link react-bootstrap ten stilli bir a etiketidir. a className="nav-link" demek gibidir

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              style={({ isActive }) => ({ color: isActive === true && "red" })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                background: isActive === true && "aqua",
              })}
              className="nav-link"
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                fontSize: isActive === true && "50px",
              })}
              className="nav-link"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                border: isActive === true && "2px solid green",
              })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
            <Link className="nav-link" to="/paths">
              Paths
            </Link>

            <Nav.Link href="https://github.com/clarusway" target='blank'>Github</Nav.Link>
            {/* <a className='nav-link' href="#link">Github</a> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar