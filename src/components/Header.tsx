import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const NavLink = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>VoiceAssistant</Logo>
      <NavLinks>
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Support</NavLink>
        <NavLink>Login/Register</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
