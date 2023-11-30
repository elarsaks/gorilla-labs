import React from "react";
import styled from "styled-components";
import NFTCard from "../components/ui/NFTCard";

const images = [
  "beach.png",
  "diving.png",
  "meditation.png",
  "muay_thai.png",
  "party.png",
  "pantheon.png",
  "rome.png",
  "tech_lab.png",
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

const MarketPlace = () => {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <PageContainer>
      <GridContainer>
        <StyledHeader>Marketplace</StyledHeader>
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <NFTCard
            key={index}
            image={`/assets/nft-images/${image}`}
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

export default MarketPlace;
