import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled(BootstrapNavbar)`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  .navbar-brand {
    font-weight: 700;
    color: #2c3e50;
  }

  .nav-link {
    color: #2c3e50;
    font-weight: 500;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #27ae60;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <StyledNavbar expand="lg" fixed="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">AI HUB Consulting</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/mission-vision">Mission & Vision</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/why-aihub">Why AI HUB</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar; 