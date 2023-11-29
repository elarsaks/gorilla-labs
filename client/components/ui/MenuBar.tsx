import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

  &:hover {
    text-decoration: underline;
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
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
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
            <img src="/assets/logo.png" alt="Gorilla Labs Logo" />
          </Logo>
          <Button onClick={navigateToMarketplace}>Marketplace</Button>
          <Button onClick={navigateToCreate}>Create</Button>
        </LogoAndButtons>

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
    </>
  );
};

export default MenuBar;
