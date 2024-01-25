import NFTCard from "../components/shared/NFTCard";
import ProfileCard from "../components/ProfileCard";
import React from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";

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

const PageContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5); 

  // Hide scrollbar for Webkit browsers
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PageContentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid white;
  color: white;
  text-align: start;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 3px solid #ffffff;
  height: 70%;
  margin: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around; 
  align-items: flex-start;
  border-right: 1px solid white;
  height: 100%;
  padding-right: 5px;

  @media (max-width: 768px) {
    border: none;
  }
`;


const Button = styled.button<{
  color: string;
}>`
  background: transparent;
  border: none;
  color: ${(props) => props.color};
  cursor: ${(props) => props.color === '#ffffff' ? '' : 'pointer'};
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;

  &:hover {
    color: ${(props) => props.color === '#ffffff' ? 'ffffff' : 'aqua'};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
  padding: 1rem;
`;

const Profile = () => {
  const { data: session } = useSession();

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <PageContent>
      <PageContentHeader>
        <ProfileImage src={session?.user?.image || ""} alt={"img"} />
        <ButtonContainer>
          <Button color="#ffffff">{session?.user?.name || "User Name"}</Button>
          <Button color="#078dfa">Connect Wallet</Button>
          <Button color="#fc324a" onClick={() => { }}>Log Out!</Button>
        </ButtonContainer>


      </PageContentHeader>

      <GridContainer>
        {/* <ProfileCard
          image={session?.user?.image || ""}
          name={session?.user?.name || ""}
        /> */}

        {[...images].map((image, index) => (
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
    </PageContent >
  );
};

export default Profile;
