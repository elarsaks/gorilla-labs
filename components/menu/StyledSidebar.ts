import styled from "styled-components";

// TODO: Get menubar height as a prop
export const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50px;
  left: 0;
  width: 250px;
  height: calc(100% - 50px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.div`
  padding: 10px 15px;
  color: #ffffff; // Set text color
  font-family: Arial, sans-serif;
  font-size: 1.5rem; // Match font size of the logo
  font-weight: bold; // Match font weight of the logo
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0; // Change as needed
  }

  // Add more styles as needed
`;
