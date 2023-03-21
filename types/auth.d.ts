import 'next-auth'

// Types
import type { DefaultSession } from 'next-auth'
import type { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  export interface Session {
    user: User
  }
}

interface User {
  _id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  avatar_url: string
  roles: string[]
}
