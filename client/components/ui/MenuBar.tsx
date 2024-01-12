import { FaStore, FaUser, FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import CustomConnectButton from "./CustomConnectButton";
import LinkedInLoginButton from './LinkedInLoginButton';

export const NavBar = styled.nav`
  background: rgba(0, 0, 0, 0.9);
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

export const LogoAndButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 40px; // You can adjust this value as needed
  }
`;

// TODO: Shared button
export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    color: aqua;

    svg {
      color: aqua;
    }
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
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
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleLogoClick = () => {
    router.push("/");
  };

  const navigateToMarketplace = () => {
    router.push("/marketplace"); // Update this with your actual marketplace route
  };

  const navigateToCreate = () => {
    router.push("/create"); // Update this with your actual create route
  };

  return (
    <>
      <NavBar>
        <LogoAndButtons>
          <Logo onClick={handleLogoClick}>
            <img src="/assets/logo.png" alt="Gorilla Labs" />
          </Logo>

          <Button onClick={navigateToMarketplace}>
            <FaStore />
            <span> Marketplace</span>
          </Button>

          <Button onClick={navigateToCreate}>
            <FaPlus />
            <span> Create</span>
          </Button>
        </LogoAndButtons>

        <LinkedInLoginButton />

      </NavBar>
    </>
  );
};

export default MenuBar;
