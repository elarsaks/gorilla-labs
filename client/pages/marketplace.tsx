import NFTCard from "../components/shared/NFTCard";
import React from "react";
import styled from "styled-components";

const PageContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Hide scrollbar for Webkit browsers
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PageContentHeader = styled.h1`
  color: white;
  grid-column: 1 / -1; 
  text-align: start;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 8px; 
  background-color: rgba(0, 0, 0, 0.5); 
`;

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

const MarketPlace = () => {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <PageContent>
      <GridContainer>
        <PageContentHeader>Marketplace</PageContentHeader>
        {[...images,].map((image, index) => (
          <NFTCard
            type='EXISTING'
            key={index}
            image={`/assets/nft-images-webp/${image}.webp`}
            name={capitalize(image.split(".")[0])}
            description={`This is a description of the ${image} NFT.`}
            network="Ethereum"
            price="0.05 ETH"
          />
        ))}
      </GridContainer>
    </PageContent>
  );
};

export default MarketPlace;
