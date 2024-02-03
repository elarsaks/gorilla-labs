import React from "react";

type MarketplaceProps = {
  nfts: NFT[];
};

const Marketplace: React.FC<MarketplaceProps> = ({ nfts }) => {
  return (
    <div>
      <h1>Marketplace</h1>
      <ul>
        {nfts.map((nft: NFT) => (
          <li key={nft.nft_id}>
            {nft.name} - {nft.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Note: The `context` parameter type is from 'NextPageContext' type, which can be imported from 'next'
export async function getServerSideProps(context: any) {
  // Using `any` for simplicity; consider using specific types for `context` if needed
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/nfts`);
  const res = await fetch(`http://localhost:3000/api/nfts`);
  const nfts: NFT[] = await res.json();

  return {
    props: {
      nfts,
    },
  };
}

export default Marketplace;
