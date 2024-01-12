// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import LinkedInProvider from 'next-auth/providers/linkedin';

export default NextAuth({
    providers: [
        LinkedInProvider({
            clientId: process.env.NEXT_LINKEDIN_CLIENT_ID || '',
            clientSecret: process.env.NEXT_LINKEDIN_CLIENT_SECRET || '',
            authorization: {
                params: { scope: 'openid profile email' },
            },
            issuer: 'https://www.linkedin.com',
            jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
            profile(profile, tokens) {
                const defaultImage =
                    'https://cdn-icons-png.flaticon.com/512/174/174857.png';
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture ?? defaultImage,
                };
            },

        }),
        // ...add other providers if needed
    ],
    // ...additional NextAuth configurations
});
