import React from 'react';
import styled from 'styled-components';

const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
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

const CTASection: React.FC = () => {
  return (
    <CTAContainer>
      <CTATitle>Ready to get started?</CTATitle>
      <CTADescription>Join Voice Assistant today and revolutionize your communication.</CTADescription>
      <CTAButton>Sign Up Now</CTAButton>
    </CTAContainer>
  );
};

export default CTASection;
