import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPlus, FaStore, FaUser } from "react-icons/fa";

import { NavButton } from "../components/ui/NavButton";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react';

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

const StyledImage = styled.img`
  max-width: 700px;
  max-height: auto;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    max-width: 70%;
    max-height: 50%;
  }
`;

const TxtContainer = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: center;
  gap: 50px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 2rem;

  border-radius: 50px;
`;

const Home = () => {
  const router = useRouter();
  const { data: session, } = useSession();

  const navigateToMarketplace = () => router.push("/marketplace");

  function openInNewTab(url: string): void {
    if (url) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    } else {
      console.error("Invalid URL");
    }
  }

  return (
    <PageContainer>
      <StyledImage src="/assets/logo.webp" alt="Logo" />

      <TxtContainer>
        <NavButton
          icon={<FaStore />}
          text={"MARKETPLACE"}
          onClick={navigateToMarketplace}
          marginleft="0px"
          marginright="0px"
          hideTextOnMobile={false}
        />

        <NavButton
          icon={<FaUser />}
          text={session?.user?.name || 'Log in'}
          onClick={() => { }}
          marginleft="0px"
          marginright="0px"
          hideTextOnMobile={false}
        />
      </TxtContainer>
      <br></br>

      <TxtContainer>
        <NavButton
          icon={""}
          text={"🚧 UNDER DEVELOPMENT 🚧"}
          onClick={() => { }}
          marginleft="0px"
          marginright="0px"
          hideTextOnMobile={false}
        />
      </TxtContainer>

      <br></br>
      <TxtContainer>
        <NavButton
          icon={<FaGithub />}
          text={"Source Code"}
          onClick={() => openInNewTab("https://github.com/elarsaks")}
          marginleft="0px"
          marginright="0px"
          hideTextOnMobile={false}
        />
      </TxtContainer>

      <br></br>
      <TxtContainer>
        <NavButton
          icon={<FaLinkedin />}
          text={"Author"}
          onClick={() => openInNewTab("https://www.linkedin.com/in/elarsaks/")}
          marginleft="0px"
          marginright="0px"
          hideTextOnMobile={false}
        />
      </TxtContainer>
    </PageContainer>
  );
};

export default Home;
