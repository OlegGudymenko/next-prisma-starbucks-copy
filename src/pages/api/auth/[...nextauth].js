import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import { prisma } from '../../../db/prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials

        if(!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })

        if(!user) {
          throw new Error( JSON.stringify({ message: 'Account with this email not found. Please try again.', status: false }))
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch) {
          throw new Error( JSON.stringify({ message: 'Password is invalid. Please try again.', status: false }))
        }

        return user
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
      return {
        ...session,
        user: {
          ...session.user,
          username: token.email
        }
      }
    }
  },
}

export default NextAuth(authOptions);