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
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); // Adjust the minmax values as needed
  gap: 1rem; // Space between cards
  padding: 1rem;
`;

const Home = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <GridContainer>
        {[...images, ...images, ...images].map((image, index) => (
          <NFTCard
            key={index}
            image={`/assets/nft-images/${image}`}
            name="NFT Name"
            description="This is a description of the NFT."
            network="Ethereum"
            price="0.05 ETH"
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Home;
