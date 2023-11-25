import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";

import styled from "styled-components";

export const NavBar = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  z-index: 1000;
  font-family: Arial, sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;

  span {
    margin-left: 0.5rem;
    font-weight: bold;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-right: 2rem;

  & > * {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 65px;
  left: 0;
  width: 250px;
  height: calc(100% - 50px); // Adjusted to account for the NavBar's height
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.div`
  padding: 10px 15px;
  color: #ffffff; // Set text color
  font-family: Arial, sans-serif;
  font-size: 1.5rem; // Match font size of the logo
  font-weight: bold; // Match font weight of the logo
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1b3f7b; // Change as needed
  }

  // Add more styles as needed
`;

const MenuBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavBar>
        <Logo onClick={toggleMenu}>
          <FaBars />
          <span>GORILLA LABS</span>
        </Logo>
        <Icons>
          <FaShoppingCart />
          <FaUser />
        </Icons>
      </NavBar>
      <Sidebar isOpen={isMenuOpen}>
        <SidebarItem>Home</SidebarItem>
        <SidebarItem>Explore</SidebarItem>
        <SidebarItem>Cart</SidebarItem>
        <SidebarItem>Contact</SidebarItem>
        {/* Add more menu items as needed */}
      </Sidebar>
    </>
  );
};

export default MenuBar;
