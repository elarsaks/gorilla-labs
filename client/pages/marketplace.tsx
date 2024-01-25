import React, { useEffect, useState } from "react";

import LoadingCube from "../components/shared/LoadingCube";
import NFTCard from "../components/shared/NFTCard";
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
  const [isLoading, setIsLoading] = useState(true);

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <PageContent>
      <GridContainer>
        <PageContentHeader>Marketplace</PageContentHeader>
        {isLoading ? (
          <LoadingCube height="400px" />
        ) : (
          images.map((image, index) => (
            <NFTCard
              type='EXISTING'
              key={index}
              image={`/assets/nft-images-webp/${image}.webp`}
              name={capitalize(image.split(".")[0])}
              description={`This is a description of the ${image} NFT.`}
              network="Ethereum"
              price="0.05 ETH"
            />
          ))
        )}
      </GridContainer>
    </PageContent>
  );
};

export default MarketPlace;