import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './NavStyle.css';
import {Link} from 'react-router-dom';

export default function CustomNavbar() {
  const navigateLogin = () => {
    console.log('login');
  };
  const navigateSignup = () => {
    console.log('signup');
  };
  return (
    <Navbar collapseOnSelect  expand="lg" className='NavBar' >
      <Container>
        <Navbar.Brand href="/" className='logo'>CARE </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link id='NavItems' to="/home">Home</Link>
            <Link  id='NavItems' to="#pricing">History</Link>
            <Link  id='NavItems' to="#pricing">Contact</Link>
            <Link  id='NavItems' to="#pricing">About</Link>
          </Nav>
          <Nav>
            <Button onClick={navigateLogin} variant="outline-info mx-2">Login</Button>
            <Button onClick={navigateSignup} variant="outline-info mx-2">Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
