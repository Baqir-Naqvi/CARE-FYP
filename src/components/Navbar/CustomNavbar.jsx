import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './NavStyle.css';

export default function CustomNavbar() {
  return (
    <Navbar collapseOnSelect  expand="lg" className='NavBar' >
      <Container>
        <Navbar.Brand href="#home" className='logo'>CARE </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link  id='NavItems' href="#features">Home</Nav.Link>
            <Nav.Link  id='NavItems' href="#pricing">History</Nav.Link>
            <Nav.Link  id='NavItems' href="#pricing">Contact</Nav.Link>
            <Nav.Link  id='NavItems' href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-info mx-2">Login</Button>
            <Button variant="outline-info mx-2">Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
