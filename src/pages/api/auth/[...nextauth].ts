// Types
import type { NextAuthOptions, Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

// Next
import NextAuth from 'next-auth'

// Providers
import Credentials from 'next-auth/providers/credentials'

// Helpers
import { fetcher } from '@/helpers'

// Modules
import jwt from 'jsonwebtoken'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const url = process.env.NEXT_PUBLIC_API_URL + '/auth/login'

          const payload = {
            email: credentials?.email,
            password: credentials?.password,
          }

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })

          if (!response.ok) {
            return Promise.reject('Invalid email or password')
          }

          const data = await response.json()

          return data
        } catch (error) {
          console.error(error)

          throw new Error(error)
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token }) => {
      if (token) {
        const { refreshToken } = token

        const response = await fetcher.POST('/auth/refresh-token', {
          token: refreshToken,
        })

        return {
          ...token,
          ...response,
        }
      }

      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user

      return session
    },
  },
  jwt: {
    encode: async ({ secret, token, maxAge }) => {
      return jwt.sign(token, secret)
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token, secret)
    },
  },
  pages: {
    signIn: '/auth/login',
  },
}

export default NextAuth(authOptions)
