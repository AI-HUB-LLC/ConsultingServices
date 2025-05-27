import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageWrapper = styled.div`
  padding: 120px 0 60px;
  background-color: #f8f9fa;
`;

const Section = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
`;

const DifferentiatorCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  height: 100%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DifferentiatorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const DifferentiatorTitle = styled.h3`
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const DifferentiatorText = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 0;
`;

const WhyAIHub: React.FC = () => {
  const differentiators = [
    {
      icon: '🧩',
      title: 'Integrated Services from AI to Logistics',
      text: 'One-stop solution for all your business needs, from cutting-edge AI technology to essential logistics services.'
    },
    {
      icon: '👩‍💼',
      title: 'Woman-Owned + 15 Years of Experience',
      text: 'Combining diverse perspectives with extensive industry experience to deliver innovative solutions.'
    },
    {
      icon: '💡',
      title: 'Innovation-Driven, Socially Reinvested',
      text: 'Committed to innovation while making a positive social impact through our reinvestment initiatives.'
    },
    {
      icon: '📜',
      title: 'Certified & Compliant',
      text: 'WOSB, SAM, and WBENC certified, ensuring the highest standards of quality and compliance.'
    },
    {
      icon: '🏙️',
      title: 'Mission-Aligned with Smarter Cities',
      text: 'Dedicated to building intelligent, sustainable, and inclusive urban environments.'
    }
  ];

  return (
    <PageWrapper>
      <Container>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Why Choose AI HUB?</Title>
          <Row>
            {differentiators.map((diff, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <DifferentiatorCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DifferentiatorIcon>{diff.icon}</DifferentiatorIcon>
                  <DifferentiatorTitle>{diff.title}</DifferentiatorTitle>
                  <DifferentiatorText>{diff.text}</DifferentiatorText>
                </DifferentiatorCard>
              </Col>
            ))}
          </Row>
        </Section>
      </Container>
    </PageWrapper>
  );
};

export default WhyAIHub; 