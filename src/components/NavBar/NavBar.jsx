import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Item>
            <Nav.Link>
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="projects" smooth duration={1000}>
                Projects
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
