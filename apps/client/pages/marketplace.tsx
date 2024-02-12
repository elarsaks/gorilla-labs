import React, { useEffect, useState } from "react";

import LoadingCube from "../components/shared/LoadingCube";
import NFTCard from "../components/NFTCard";
import styled from "styled-components";

// import fetchNFTs from "./api/nfts/index";
// import { GetServerSideProps } from "next";

const DebugNFTS: NFT[] = [
  {
    category_id: 1,
    description: "A serene beach scene.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/beach.webp",
    minted: false,
    name: "Beach",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: null,
  },
  {
    category_id: 2,
    description: "An adventurous diving moment.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/diving.webp",
    minted: false,
    name: "Diving",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: null,
  },
  {
    category_id: 3,
    description: "A peaceful meditation session.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/meditation.webp",
    minted: false,
    name: "Meditation",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: null,
  },
  {
    category_id: 4,
    description: "Intense Muay Thai action.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/muay_thai.webp",
    minted: true,
    name: "Muay Thai",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: "0xabcdef123456789abcdef123456789abcdef123456",
  },
  {
    category_id: 5,
    description: "The majestic Pantheon.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/pantheon.webp",
    minted: false,
    name: "Pantheon",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: null,
  },
  {
    category_id: 5,
    description: "A lively party scene.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/party.webp",
    minted: true,
    name: "Party",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: "0x123456789abcdef123456789abcdef123456789a",
  },
  {
    category_id: 4,
    description: "Historic Rome in its glory.",
    img_link: "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/rome.webp",
    minted: false,
    name: "Rome",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: null,
  },
  {
    category_id: 5,
    description: "Futuristic tech lab.",
    img_link:
      "https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/tech_lab.webp",
    minted: false,
    name: "Tech Lab",
    network: "Ethereum",
    nft_id: null,
    owner_id: "elar@saks.com",
    wallet_id: null,
  },
];

const PageContent = styled.div`
  margin-top: 10vh;

  justify-content: center;
  align-items: center;
  min-width: 80vw;

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
`;

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
  width: 300px;

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const nfts = await fetchNFTs();
//     return { props: { nfts } };
//   } catch (error) {
//     console.error("Failed to fetch NFTs:", error);
//     return { props: { nfts: [] } };
//   }
// };

const Marketplace: React.FC<MarketplaceProps> = ({ nfts }) => {
  // TODO: Error handling!
  // const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PageContent>
      <GridContainer>
        <PageContentHeader>Marketplace</PageContentHeader>
        <DevCard>
          <LoadingCube height="300px" />
          <h3>🚧 UNDER DEVELOPMENT 🚧</h3>
        </DevCard>

        {/* {isLoading && (
          <DevCard>
            <LoadingCube height="300px" />
            <h3> Loading ...</h3>
          </DevCard>
        )} */}

        {!isLoading &&
          DebugNFTS.map((nft, index) => (
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
