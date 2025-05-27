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

const Subtitle = styled.h3`
  color: #27ae60;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const List = styled.ul`
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MissionVision: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Our Mission</Title>
          <Text>
            AI HUB Consulting delivers high-impact, cross-sector solutions that empower public agencies, 
            private enterprises, and corporate institutions to operate smarter, safer, and more efficiently.
          </Text>
          <Text>
            We specialize in a full spectrum of services—from advanced AI, software, IT, and cloud systems 
            to logistics, staffing, construction, and landscaping—making us a trusted, WOSB-certified partner 
            in the government, energy, oil & gas, technology, and commercial sectors.
          </Text>
          <Text>
            Our mission is to help modernize operations and build intelligent, future-ready infrastructure—starting 
            in cities like Houston, Los Angeles, San Francisco, Miami, and New York, and expanding globally to 
            Toronto, Vancouver, London, Rome, Zurich, Geneva, Paris, Florence, Dubai, and beyond.
          </Text>
          <Text>
            From the most sophisticated AI systems to the most essential day-to-day services, we deliver unified, 
            end-to-end solutions.
          </Text>
          <Text>
            And we go further: 10% of our consulting revenue is reinvested into AI HUB's product division, which 
            develops ethical, voice-powered AI companions for elderly and disabled individuals—designed to promote 
            independence, reduce isolation, and improve quality of life.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title>Our Vision</Title>
          <Text>
            To lead the transformation of cities, industries, and institutions into intelligent, inclusive, and 
            resilient ecosystems—powered by automation, innovation, and purpose.
          </Text>
          <Text>
            We envision a future where public and private sector leaders—from municipalities and federal agencies 
            to global oil & gas firms and high-growth tech companies—have access to the tools, talent, and 
            technology they need to:
          </Text>
          <List>
            <ListItem>Stay competitive</ListItem>
            <ListItem>Operate efficiently and Faster</ListItem>
            <ListItem>Serve communities and stakeholders with excellence</ListItem>
          </List>
          <Text>
            Through our consulting engagements and social reinvestment model, AI HUB Consulting builds capacity 
            today—and social equity for tomorrow.
          </Text>
        </Section>
      </Container>
    </PageWrapper>
  );
};

export default MissionVision; 