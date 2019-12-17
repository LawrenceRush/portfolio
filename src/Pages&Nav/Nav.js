import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navigation() {
    return (
        
  <Navbar className= "nav-bg" expand="lg">
  <Navbar.Brand className = "nav-title" href="#home">Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto, nav-ulb">
      <Nav.Link className = "nav-lib" href="#home">About</Nav.Link>
      <Nav.Link className = "nav-lib" href="#link">Projects</Nav.Link>
      <Nav.Link className = "nav-lib" href="#link">Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>


    )
}

export default Navigation
