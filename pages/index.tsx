import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  text-align: center;
  // Add more styles for your content container as needed
`;

const StyledImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  margin-bottom: 20px; // Adjust as needed
`;

const Home = () => {
  return (
    <PageContainer>
      <StyledImage src="/assets/logo.png" alt="Logo" />
      <ContentContainer>
        <h1>Home Page</h1>
        {/* Additional content can go here */}
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;
