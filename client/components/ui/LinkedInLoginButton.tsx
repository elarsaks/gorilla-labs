import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';

// Define styled components
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid white;
  border-radius: 10px;
  padding: 8px 12px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 8px;
    span {
      display: none;
    }
  }
`;

const LinkedInLoginButton = () => {
    const { data: session } = useSession();

    const handleAuthClick = () => {
        if (session) {
            signOut({ callbackUrl: '/' });
        } else {
            signIn('linkedin', { callbackUrl: '/' });
        }
    };

    return (
        <Button onClick={handleAuthClick}>
            {session ? 'Log Out' : 'Log In'}
        </Button>
    );
};

export default LinkedInLoginButton;
