import React, { ReactNode } from "react";

import styled from "styled-components";

interface NavButtonProps {
  icon: ReactNode;
  text: string;
  hideTextOnMobile: boolean;
  marginleft?: string;
  marginright?: string;
  onClick: () => void;
}

const StyledButton = styled.button<{
  $marginleft?: string;
  $marginright?: string;
  $hideTextOnMobile: boolean;
}>`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: ${(props) => props.$marginleft || "1rem"};
  margin-right: ${(props) => props.$marginright || "1rem"};
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
    ${(props) =>
      props.$hideTextOnMobile &&
      `
      @media (max-width: 768px) {
        display: none;
      }
    `}
  }

  &:hover {
    color: aqua;

    svg {
      color: aqua;
    }
  }
`;

export const NavButton: React.FC<NavButtonProps> = ({
  icon,
  text,
  hideTextOnMobile,
  marginleft,
  marginright,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      $marginleft={marginleft}
      $marginright={marginright}
      $hideTextOnMobile={hideTextOnMobile}
    >
      {icon}
      <span>{text}</span>
    </StyledButton>
  );
};
