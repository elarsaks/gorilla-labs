import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react';

import styled from "styled-components";

interface ProfileCardProps {
  image: string;
  name: string;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: scale 0.7s;
  color: #ffffff;
  padding-bottom: 20px;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(7, 31, 77, 0.7);
  height: 50%;
  min-height: 100px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 3px solid #ffffff;
  height: 70%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 50%; 
  padding: 16px;
`;

const Name = styled.h2`
  margin: 0;
  color: white;
  font-size: 1.5em;
`;

interface ButtonProps {
  color: string;
}

const Button = styled.div<ButtonProps>`
  margin-top: 8px;
  border-radius: 4px;
  padding: 8px;
  background-color: #f8f9fa;
  text-align: center;
  font-weight: bold;
  color: ${props => props.color}; 
  cursor: pointer;
`;


const NFTCard: React.FC<ProfileCardProps> = ({
  image,
  name,

}) => {

  const capitalize = (fullName: string) =>
    fullName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

  const logOut = () => signOut(/* { callbackUrl: 'http://localhost:3000/marketplace' } */);

  return (
    <Card>
      <ProfileImageWrapper>
        <ProfileImage src={image} alt={name} />
      </ProfileImageWrapper>

      <Info>
        <Name>{capitalize(name)}</Name>
        <div>
          <Button color="#007bff">Connect Wallet</Button>
          <Button color="#7d0632" onClick={logOut}>Log Out!</Button>
        </div>
      </Info>
    </Card>
  );
};

export default NFTCard;
