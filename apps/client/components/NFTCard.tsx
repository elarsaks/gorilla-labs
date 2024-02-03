import styled from "styled-components";
import { useRouter } from "next/router";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: scale 0.7s;
  color: #ffffff;
  height: 500px;
  width: 300px;
  overflow: hidden;

  &:hover {
    color: aqua;
    border: 1px solid aqua;
    background-color: rgba(0, 0, 0, 0.9);

    cursor: pointer;
    scale: 1.05;
  }
`;

interface CardImageProps {
  $backgroundImage: string;
}

const CardImage = styled.div<CardImageProps>`
  background-image: url(${(props) => props.$backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50%;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s ease;
    opacity: 1;
  }

  &:hover::before {
    opacity: 0;
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
  height: 250px;
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

interface NFTCardProps {
  description: string;
  image: string;
  name: string;
  network: string;
  price: string;
  type: string; //TODO: Use ENUM-s
}

const NFTCard: React.FC<NFTCardProps> = ({
  description,
  image,
  name,
  network,
  price,
  type = "EXISTING",
}) => {
  const router = useRouter();
  const onClickCreate = () => router.push("/create");
  // TODO: onClickNF

  return (
    <Card>
      <CardImage $backgroundImage={image} />
      {type === "CREATE" ? (
        <CreateContainer onClick={onClickCreate}>
          <h1>+</h1>
          <h3>Create NFT</h3>
        </CreateContainer>
      ) : (
        <div>
          {/* <Image src={image} alt={name} /> */}
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
