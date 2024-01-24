import NFTCard from "../components/ui/NFTCard";
import React from "react";
import styled from "styled-components";
import { useSession } from 'next-auth/react';

const images = [
  "beach",
  "diving",
  "meditation",
  "muay_thai",
  "party",
  "pantheon",
  "rome",
  "tech_lab",
];

const PageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98vw;
  padding-bottom: 5vh;
  padding-top: 5vh;

  // Hide scrollbar for Webkit browsers
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHeader = styled.h1`
  color: white;
  grid-column: 1 / -1; // Span the header across all columns
  text-align: start;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto 1fr; // Define rows, one for the header and one for the content
  gap: 1.5rem;
  padding: 1rem;
`;

const Profile = () => {
  const { data: session, } = useSession();

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(session)

  return (
    <PageContainer>
      <GridContainer>
        <StyledHeader>Profile</StyledHeader>
        {[...images,].map((image, index) => (
          <NFTCard
            key={index}
            image={`/assets/nft-images-webp/${image}.webp`}
            name={capitalize(image.split(".")[0])}
            description={`This is a description of the ${image} NFT.`}
            network="Ethereum"
            price="0.05 ETH"
          />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default Profile;
