// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import LinkedInProvider from 'next-auth/providers/linkedin';

export default NextAuth({
    providers: [
        LinkedInProvider({
            clientId: process.env.NEXT_LINKEDIN_CLIENT_ID || '',
            clientSecret: process.env.NEXT_LINKEDIN_CLIENT_SECRET || '',
            
        }),
        // ...add other providers if needed
    ],
    // ...additional NextAuth configurations
});
