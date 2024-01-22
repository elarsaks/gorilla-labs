import { FaGithub, FaLinkedin } from "react-icons/fa";

import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  text-align: center;
  // Add more styles for your content container as needed
`;

const StyledImage = styled.img`
  max-width: 700px;
  max-height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 70%;
    max-height: 50%;
  }
`;
const SocialLinks = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: center;
  gap: 50px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 2rem;
  // Make corners rounded

  border-radius: 50px;
`;

const SocialLink = styled.a`
  color: #ffffff;

  &:hover {
    color: #f9a825;
    // Scale slowly on hover
    transform: scale(1.1);
    transition: transform 0.5s;
    scale: 1.2;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <StyledImage src="/assets/logo.webp" alt="Logo" />

      <ContentContainer>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/elarsaks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="50" />
          </SocialLink>
          <SocialLink
            href="https://github.com/elarsaks/gorilla-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="50" />
          </SocialLink>
        </SocialLinks>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;
