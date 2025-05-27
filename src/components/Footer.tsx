import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterTitle = styled.h5`
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #27ae60;
  }
`;

const Address = styled.p`
  color: #ecf0f1;
  margin-bottom: 0.5rem;
`;

const SocialLink = styled.a`
  color: #ecf0f1;
  margin-right: 1rem;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #27ae60;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <FooterTitle>AI HUB Consulting</FooterTitle>
            <Address>1200 Post Oak Boulevard</Address>
            <Address>Houston, Texas 77056</Address>
            <Address>📧 info@aihubagents.com</Address>
          </Col>
          <Col md={4} className="mb-4">
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/mission-vision">Mission & Vision</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/why-aihub">Why AI HUB</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </Col>
          <Col md={4} className="mb-4">
            <FooterTitle>Certifications</FooterTitle>
            <Address>📌 WBENC Certified</Address>
            <Address>📌 SAM.gov Active</Address>
            <Address>📌 SBA Registered</Address>
            <Address>📌 WOSB Certified</Address>
          </Col>
        </Row>
        <Copyright>
          <p>© {new Date().getFullYear()} AI HUB Consulting. All rights reserved.</p>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 