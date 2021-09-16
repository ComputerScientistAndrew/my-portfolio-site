import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBarComponent = () => {
  return (
    <Nav className="nav-links justify-content-end" activeKey="/home">
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
  );
};

export default NavBarComponent;
