import styled from 'styled-components';

export const NavBar = styled.nav`
  background: rgba(0, 0, 0, 0.8); // Dark background
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  // Add styles for your logo text here
  span {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
