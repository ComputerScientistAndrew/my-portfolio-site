import React, { useContext, useState, useEffect } from 'react';
import { Nav } from "react-bootstrap";

const NavBarComponent = () => {
    return (
        <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#about">About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" href="#projects">My Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href="#contact">Contact</Nav.Link>
    </Nav.Item>
  </Nav>
    )
}

export default NavBarComponent;