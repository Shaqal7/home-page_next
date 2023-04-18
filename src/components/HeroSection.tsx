import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background-image: url('/images/hero-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Headline>Voice Assistant App</Headline>
      <Description>
        Enhance your communication with our AI-powered Voice Assistant. Stay organized and efficient with context-aware chats.
      </Description>
      <CTAButton>Learn More</CTAButton>
    </HeroContainer>
  );
};

export default HeroSection;