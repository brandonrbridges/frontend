import type { NextAuthOptions, Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

import NextAuth from 'next-auth'

import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  debug: true,
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
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token = user
      }

      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user

      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
}

export default NextAuth(authOptions)
