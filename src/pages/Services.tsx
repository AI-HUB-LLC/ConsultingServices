import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageWrapper = styled.div`
  padding: 120px 0 60px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceList = styled.ul`
  color: #34495e;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const StyledButton = styled(Button)`
  background-color: #27ae60;
  border-color: #27ae60;
  width: 100%;
  
  &:hover {
    background-color: #219a52;
    border-color: #219a52;
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Technology & AI',
      image: '/images/ai-infrastructure.jpg',
      items: [
        'AI agents, automation tools, software development',
        'Cloud migration, cybersecurity, IT governance',
        'Training, support, and full project lifecycle delivery'
      ]
    },
    {
      icon: '🏗️',
      title: 'Construction & Engineering',
      image: '/images/construction.jpg',
      items: [
        'Concrete foundations, drywall, site prep, and finishing',
        'General contracting and compliance management'
      ]
    },
    {
      icon: '👥',
      title: 'Staffing & Recruitment',
      image: '/images/staffing.jpg',
      items: [
        'IT engineers, medical staff, admin & lab techs',
        'Flexible and scalable placement solutions'
      ]
    },
    {
      icon: '🏢',
      title: 'Supply & Distribution',
      image: '/images/supply-chain.jpg',
      items: [
        'Construction materials, plastics, IT hardware, digital office tools',
        'Wholesale logistics & broker support'
      ]
    },
    {
      icon: '🚚',
      title: 'Moving & Logistics',
      image: '/images/moving.jpg',
      items: [
        'Office relocation, tech setup, and transport',
        'Government and commercial move coordination'
      ]
    },
    {
      icon: '🌿',
      title: 'Landscaping & Environmental',
      image: '/images/landscaping.jpg',
      items: [
        'Landscaping for commercial and public spaces',
        'Erosion control, re-vegetation, and eco-restoration'
      ]
    },
    {
      icon: '🦷',
      title: 'Dental Laboratory Services',
      image: '/images/ai-dental.jpg',
      items: [
        'Comprehensive dental lab services for uninsured children and at-risk seniors',
        'Diagnostic, preventive, restorative, and prosthetic support',
        'Surgical support and specialized dental care',
        'HCAAA referral program management'
      ]
    },
    {
      icon: '👓',
      title: 'Vision Services',
      image: '/images/vision.jpg',
      items: [
        'Licensed optometrist services for adults 60+ in Harris County',
        'Comprehensive eye exams and vision evaluations',
        'Custom eyewear and optical solutions',
        'Specialized vision care for seniors'
      ]
    }
  ];

  return (
    <PageWrapper>
      <Container>
        <Title>Our Services</Title>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <ServiceCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceImage>
                  <img src={service.image} alt={service.title} />
                </ServiceImage>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceList>
                  {service.items.map((item, itemIndex) => (
                    <ServiceItem key={itemIndex}>{item}</ServiceItem>
                  ))}
                </ServiceList>
                <StyledButton variant="primary">Request a Quote</StyledButton>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Services; 