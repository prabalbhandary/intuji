import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Header = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isTemplateHovered, setIsTemplateHovered] = useState(false);

  return (
    <StyledHeader>
      <Logo>AR SHAKIR</Logo>
      <Menu>
        <MenuItem
          onMouseEnter={() => setIsProductHovered(true)}
          onMouseLeave={() => setIsProductHovered(false)}
        >
          Product {isProductHovered ? <FiChevronUp /> : <FiChevronDown />}
          <Dropdown>
            <DropdownItem href='#feature1'>Product 1</DropdownItem>
            <DropdownItem href='#feature2'>Product 2</DropdownItem>
            <DropdownItem href='#feature3'>Product 3</DropdownItem>
          </Dropdown>
        </MenuItem>
        <MenuItem
          onMouseEnter={() => setIsTemplateHovered(true)}
          onMouseLeave={() => setIsTemplateHovered(false)}
        >
          Template {isTemplateHovered ? <FiChevronUp /> : <FiChevronDown />}
          <Dropdown>
            <DropdownItem href='#template1'>Template 1</DropdownItem>
            <DropdownItem href='#template2'>Template 2</DropdownItem>
            <DropdownItem href='#template3'>Template 3</DropdownItem>
          </Dropdown>
        </MenuItem>
        <MenuItem href='#blog'>Blog</MenuItem>
        <MenuItem href='#pricing'>Pricing</MenuItem>
      </Menu>
      <Buttons>
        <SignInButton>Sign In</SignInButton>
        <StartFreeButton>Start Free</StartFreeButton>
      </Buttons>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const MenuItem = styled.div`
  margin: 0 1rem;
  position: relative;
  cursor: pointer;

  svg {
    margin-left: 0.25rem;
  }

  &:hover > div {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  min-width: 150px;
  border-radius: 5px;
  overflow: hidden;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;

  &:hover {
    background: #f1f1f1;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SignInButton = styled.button`
  padding: 0.5rem 1rem;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StartFreeButton = styled.button`
  background: #007bff;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
