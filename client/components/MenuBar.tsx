import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

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

export const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 65px;
  left: 0;
  width: 250px;
  height: calc(100% - 50px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
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
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  text-decoration: none;
  &:hover {
    background-color: #1b3f7b;
  }
`;

const MenuBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  useEffect(() => {
    // As soon as the component mounts, we acknowledge it's on the client
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render nothing if it's not on the client
  if (!isClient) {
    return null;
  }

  return (
    <>
      <NavBar>
        <Logo onClick={toggleMenu}>
          <FaBars />
          <span>GORILLA LABS</span>
        </Logo>
        <Icons>
          <FaShoppingCart />

          {isAuthenticated ? (
            <div onClick={() => signOut()}>
              <FaUser /> {/* User icon for authenticated users */}
            </div>
          ) : (
            <div onClick={() => signIn()}>
              Login {/* Login text for unauthenticated users */}
            </div>
          )}
        </Icons>
      </NavBar>

      <Sidebar $isOpen={isMenuOpen}>
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          <SidebarItem>Home</SidebarItem>
        </Link>

        <Link href="/explore" passHref style={{ textDecoration: "none" }}>
          <SidebarItem>Explore</SidebarItem>
        </Link>
        <Link href="/cart" passHref style={{ textDecoration: "none" }}>
          <SidebarItem>Cart</SidebarItem>
        </Link>
        <Link href="/contact" passHref style={{ textDecoration: "none" }}>
          <SidebarItem>Contact</SidebarItem>
        </Link>
        <Link href="/profile" passHref style={{ textDecoration: "none" }}>
          <SidebarItem>Profile</SidebarItem>
        </Link>
      </Sidebar>
    </>
  );
};

export default MenuBar;
