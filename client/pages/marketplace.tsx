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

// Create a styled grid container using styled-components
const GridContainer = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem; // Space between cards
  padding: 1rem;
  overflow: auto;
  max-height: 100vh;

  // Hide scrollbar for Webkit browsers
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Home = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <GridContainer>
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <NFTCard
            key={index}
            image={`/assets/nft-images/${image}`}
            name={image.split(".")[0]}
            description={`This is a description of the ${image} NFT.`}
            network="Ethereum"
            price="0.05 ETH"
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Home;
