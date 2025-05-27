import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/images/WEBSITEBACKGROUND.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: white;
  padding-top: 80px;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  padding: 0.8rem 2rem;
  font-weight: 600;
  border-radius: 30px;
  
  &.btn-primary {
    background-color: #27ae60;
    border-color: #27ae60;
    
    &:hover {
      background-color: #219a52;
      border-color: #219a52;
    }
  }
  
  &.btn-outline-light {
    &:hover {
      background-color: #27ae60;
      border-color: #27ae60;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Smarter Cities, Stronger Enterprises, and a Better Tomorrow
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI HUB Consulting delivers integrated, cross-sector solutions across technology, 
              infrastructure, staffing, and logistics—built for both innovation and impact.
            </Subtitle>
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <StyledButton variant="primary" href="#contact">
                Contact Us
              </StyledButton>
              <StyledButton variant="outline-light" href="/documents/AI HUB Capabilities Statement 1.pdf" target="_blank">
                View Capabilities Statement
              </StyledButton>
            </ButtonGroup>
          </HeroContent>
        </Container>
      </HeroSection>
    </>
  );
};

export default Home; 