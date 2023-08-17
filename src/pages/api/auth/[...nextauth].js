import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from '@/db/prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        console.log(credentials,'credentials')
        const { email, password } = credentials
        console.log(email,'email in auth')
        console.log(password,'password in auth')
        if(!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })

        if(!user) {
          return {
            message: 'invalid user'
          };
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username
        }
      }
    })
  ],
  pages: {
    signIn: '/account/signin',
    signUp: '/account/signup'
  },
  callbacks: {
    async jwt({ token, user }) {
      return await token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken
      if (user !== null) {
        session.user = user;
      }
      return session
    }
  },
}

export default NextAuth(authOptions);