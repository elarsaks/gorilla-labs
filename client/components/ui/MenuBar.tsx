import { FaPlus, FaStore, FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react';

import { NavButton } from './NavButton'
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const { data: session } = useSession();

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

  const handleAuthClick = () => {

    // if (session) {
    //   signOut({ callbackUrl: '/' });
    // } else {
    //   signIn('linkedin', { callbackUrl: '/' });
    // }
  };


  return (
    <>
      <NavBar>
        <LogoAndButtons>
          <Logo onClick={handleLogoClick}>
            <img src="/assets/logo.png" alt="Gorilla Labs" />
          </Logo>

          <NavButton
            icon={<FaStore />}
            text={"MARKETPLACE"}
            onClick={navigateToMarketplace}
          />

          <NavButton
            icon={<FaPlus />}
            text={"CREATE"}
            onClick={navigateToCreate}
            marginleft="0px"
          />
        </LogoAndButtons>

        <NavButton
          icon={<FaUser />}
          text={session ? 'Log Out' : 'Log In'}
          onClick={handleAuthClick}
          marginright="2em"
        />

      </NavBar>
    </>
  );
};

export default MenuBar;
