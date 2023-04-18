import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001; // Ensures the header stays on top of other elements, including the menu
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
`;

const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 64px;
    left: 0;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.primaryColor};
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-130%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;



const NavLink = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>VoiceAssistant</Logo>
      <Hamburger onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
      <NavLinks open={menuOpen}>
        <NavLink onClick={toggleMenu}>Features</NavLink>
        <NavLink onClick={toggleMenu}>Pricing</NavLink>
        <NavLink onClick={toggleMenu}>Support</NavLink>
        <NavLink onClick={toggleMenu}>Login/Register</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
