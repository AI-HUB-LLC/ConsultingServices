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
  margin-bottom: 2rem;
  text-align: center;
`;

const Text = styled.p`
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const CertificationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CertificationIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CertificationTitle = styled.h4`
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CertificationDetails = styled.p`
  color: #7f8c8d;
  margin-bottom: 0;
`;

const About: React.FC = () => {
  const certifications = [
    {
      icon: '📌',
      title: 'WBENC Certified',
      details: "Women's Business Enterprise National Council"
    },
    {
      icon: '📋',
      title: 'SAM.gov Active',
      details: 'CAGE: 0QQE0 / UEI: DJDSW3BFJAS5'
    },
    {
      icon: '📄',
      title: 'SBA Registered',
      details: 'Small Business Administration'
    },
    {
      icon: '🏢',
      title: 'Founded',
      details: 'August 29, 2024'
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
          <Title>About AI HUB Consulting</Title>
          <Text>
            AI HUB is a WOSB-certified consulting firm based in Houston, Texas, with over 15 years of 
            leadership in AI, IT, engineering, and City, County, and federal contracts. Our expertise 
            spans across multiple sectors, making us a trusted partner for organizations seeking to 
            modernize their operations and embrace the future of technology.
          </Text>
          <Text>
            Our team combines deep technical knowledge with practical business acumen, allowing us to 
            deliver solutions that not only meet but exceed our clients' expectations. We pride ourselves 
            on our ability to bridge the gap between cutting-edge technology and real-world applications, 
            ensuring that our clients receive the most effective and efficient solutions for their needs.
          </Text>
          <Text>
            As a woman-owned business, we bring a unique perspective to the industry, fostering innovation 
            and inclusivity in everything we do. Our commitment to excellence and customer satisfaction 
            has earned us a reputation as a reliable and forward-thinking partner in the consulting industry.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title>Our Certifications</Title>
          <CertificationsList>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificationIcon>{cert.icon}</CertificationIcon>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationDetails>{cert.details}</CertificationDetails>
              </CertificationCard>
            ))}
          </CertificationsList>
        </Section>
      </Container>
    </PageWrapper>
  );
};

export default About; 