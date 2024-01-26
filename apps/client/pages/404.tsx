import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
`;

const CenteredContent = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.75);
  border: 2px solid white;
  padding: 20px;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: aqua;
`;

const Custom404: React.FC = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <FullPageContainer>
      <CenteredContent>
        <h1>404 | Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>

        <Button onClick={navigateToHome}>
          <span> GO BACK HOME</span>
        </Button>
      </CenteredContent>
    </FullPageContainer>
  );
};

export default Custom404;
