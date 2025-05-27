import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
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

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactTitle = styled.h3`
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContactText = styled.p`
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const StyledForm = styled(Form)`
  .form-label {
    color: #2c3e50;
    font-weight: 500;
  }

  .form-control {
    border-radius: 8px;
    padding: 0.8rem;
    border: 1px solid #ddd;
    
    &:focus {
      border-color: #27ae60;
      box-shadow: 0 0 0 0.2rem rgba(39, 174, 96, 0.25);
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: #27ae60;
  border-color: #27ae60;
  padding: 0.8rem 2rem;
  font-weight: 600;
  border-radius: 30px;
  width: 100%;
  
  &:hover {
    background-color: #219a52;
    border-color: #219a52;
  }
`;

const AlertMessage = styled(Alert)`
  margin-top: 1rem;
  border-radius: 8px;
`;

const Contact: React.FC = () => {
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formspree.io/f/xkgrezyn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Contact Us</Title>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <ContactInfo>
                <ContactTitle>Get in Touch</ContactTitle>
                <ContactText>
                  Have questions about our services or want to learn more about how we can help your 
                  organization? We'd love to hear from you.
                </ContactText>
                <ContactText>
                  <strong>Address:</strong><br />
                  AI HUB LLC<br />
                  1200 Post Oak Boulevard<br />
                  Houston, Texas 77056
                </ContactText>
                <ContactText>
                  <strong>Email:</strong><br />
                  info@aihubagents.com
                </ContactText>
              </ContactInfo>
            </Col>
            <Col lg={6}>
              <StyledForm onSubmit={handleSubmit}>
                <input type="hidden" name="_replyto" value="info@aihubagents.com" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    required
                  />
                </Form.Group>

                <StyledButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </StyledButton>

                {status.type && (
                  <AlertMessage variant={status.type === 'success' ? 'success' : 'danger'}>
                    {status.message}
                  </AlertMessage>
                )}
              </StyledForm>
            </Col>
          </Row>
        </Section>
      </Container>
    </PageWrapper>
  );
};

export default Contact; 