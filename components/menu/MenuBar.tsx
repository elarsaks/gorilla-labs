import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { Sidebar, SidebarItem } from "./StyledSidebar";

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
  height: 40px;
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
          <span>Logo</span>
        </Logo>
        <Icons>
          <FaShoppingCart />
          <FaUser />
        </Icons>
      </NavBar>
      <Sidebar isOpen={isMenuOpen}>
        <SidebarItem>Menu Item 1</SidebarItem>
        <SidebarItem>Menu Item 2</SidebarItem>
        <SidebarItem>Menu Item 3</SidebarItem>
        {/* Add more menu items as needed */}
      </Sidebar>
    </>
  );
};

export default MenuBar;
