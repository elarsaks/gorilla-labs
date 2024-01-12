import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    color: aqua;

    svg {
      color: aqua;
    }
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;