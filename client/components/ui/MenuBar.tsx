import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
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

const MenuBar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const router = useRouter();

  useEffect(() => {
    // As soon as the component mounts, we acknowledge it's on the client
    setIsClient(true);
  }, []);

  // Render nothing if it's not on the client
  if (!isClient) {
    return null;
  }

  const handleLogoClick = () => {
    router.push("/"); // Navigate to root
  };

  return (
    <>
      <NavBar>
        <Logo onClick={handleLogoClick}>
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
    </>
  );
};

export default MenuBar;
