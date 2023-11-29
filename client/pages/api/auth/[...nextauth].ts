import NextAuth, { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Implement logic to determine if the user should be allowed to sign in
      // console.log("signIn", user, account, profile);
      return true; // or you could return a relative/absolute path '/dashboard'
    },
    async redirect({ url, baseUrl }) {
      // console.log("redirect", url, baseUrl);
      // Always redirect to '/user' after signing in
      return `${baseUrl}/user`;
    },
    // async signOut({ token, url, baseUrl }) {
    //   // Implement logic to redirect the user after signing out
    //   return baseUrl; // or your custom url
    // },
    // You can add other callbacks here as needed
  },
  // Add any other NextAuth options here
};

export default NextAuth(authOptions);
