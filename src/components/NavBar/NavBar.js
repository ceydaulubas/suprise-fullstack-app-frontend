import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="justify-content-between" bg="light">
      <Navbar.Brand as={Link} to="/private/mainpage" style={{ marginLeft: '40px' }}>
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end" style={{ marginRight: '40px' }}>
        <Nav>
          <Nav.Link as={Link} to="/private/surpriseform">MakeSurprise</Nav.Link>
          <Nav.Link as={Link} to="/private/allsurprises">Your Lists</Nav.Link>
          <Nav.Link as={Link} to="/private/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
