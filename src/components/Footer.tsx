import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

const FooterLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin-left: 2rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#features">Features</FooterLink>
        <FooterLink href="#testimonials">Testimonials</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinks>
      <FooterText>&copy; {new Date().getFullYear()} Voice Assistant</FooterText>
    </FooterContainer>
  );
};

export default Footer;
