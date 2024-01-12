// components/LinkedInLoginButton.tsx
import { signIn } from 'next-auth/react';

const LinkedInLoginButton = () => {
    const handleLogin = () => {
        signIn('linkedin', { callbackUrl: '/' });
    };

    return (
        <button onClick={handleLogin} >
            Login with LinkedIn
        </button>
    );
};

export default LinkedInLoginButton;
