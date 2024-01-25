import { on } from "events";
import styled from "styled-components";
import { useRouter } from "next/router";

interface NFTCardProps {
  description: string;
  image: string;
  name: string;
  network: string;
  price: string;
  type: string; //TODO: Use ENUM-s
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: scale 0.7s;
  color: #ffffff;

  &:hover {
    color: aqua;
    border: 1px solid aqua;
    background-color: rgba(0, 0, 0, 0.9);

    cursor: pointer;
    scale: 1.05;
  }
`;

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Info = styled.div`
  padding: 16px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const Description = styled.p`
  color: #ffffff;
`;

const Network = styled.p`
  color: #007bff;
  font-weight: bold;
`;

const Price = styled.div`
  margin-top: 8px;
  border-radius: 4px;
  padding: 8px;
  background-color: #f8f9fa;
  text-align: center;
  font-weight: bold;
  color: #28a745;
`;

const NFTCard: React.FC<NFTCardProps> = ({
  description,
  image,
  name,
  network,
  price,
  type = 'EXISTING',
}) => {
  const router = useRouter();
  const onClickCreate = () => router.push("/create");
  // TODO: onClickNFT

  return (
    <Card>
      {type === 'CREATE' ? (
        <CreateContainer onClick={onClickCreate}>
          <h1>+</h1>
          <h3>Create NFT</h3>
        </CreateContainer>
      ) : (
        <div>
          <Image src={image} alt={name} />
          <Info>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Network>{network}</Network>
            <Price>{price}</Price>
          </Info>
        </div>
      )}
    </Card>
  );
};


export default NFTCard;
