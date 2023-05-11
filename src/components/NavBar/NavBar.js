import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="justify-content-between" bg="light">
      <Navbar.Brand as={Link} to="/" style={{ marginLeft: '40px' }}>
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
          <Nav.Link as={Link} to="/makesurprise">MakeSurprise</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/yourlist">Your List</Nav.Link>
          <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
