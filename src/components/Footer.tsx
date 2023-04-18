import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Cookie Policy</FooterLink>
      </LinksContainer>
      <SocialIcons>
        {/* Replace with your social media icons */}
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </SocialIcons>
      <Copyright>© {new Date().getFullYear()} VoiceAssistant. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
