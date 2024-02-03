import React, { useEffect, useState } from "react";

import { GetServerSideProps } from "next";
import LoadingCube from "../components/shared/LoadingCube";
import NFTCard from "../components/NFTCard";
import fetchNFTs from "./api/nfts/index";
import styled from "styled-components";

// import NFTCard from "../components/shared/NFTCard";

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

const DevCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: scale 0.7s;
  color: orange;
  min-height: 350px;
  text-align: center;

  &:hover {
    color: aqua;
    border: 1px solid aqua;
    background-color: rgba(0, 0, 0, 0.9);

    cursor: pointer;
    scale: 1.05;
  }
`;

type MarketplaceProps = {
  nfts: NFT[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const nfts = await fetchNFTs();
    return { props: { nfts } };
  } catch (error) {
    console.error("Failed to fetch NFTs:", error);
    return { props: { nfts: [] } };
  }
};

const Marketplace: React.FC<MarketplaceProps> = ({ nfts }) => {
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
      {/* <GridContainer>
        <PageContentHeader>Marketplace</PageContentHeader>
        <DevCard>
          <LoadingCube height="300px" />
          <h3>🚧 UNDER DEVELOPMENT 🚧</h3>
        </DevCard>

        {nfts.map((nft, index) => (
          <NFTCard
            type="EXISTING"
            key={index}
            image={nft.img_link}
            name={nft.name}
            description={nft.description}
            network="Ethereum"
            price="0.05 ETH"
          />
        ))}
      </GridContainer>
    </PageContent>
  );
};

export default Marketplace;
