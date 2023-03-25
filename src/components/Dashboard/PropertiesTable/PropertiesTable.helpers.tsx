// Types
import type { Property } from './PropertiesTable.props'

// Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

export async function getData() {
  const { user } = await getServerSession(authOptions)

  const properties = (await fetcher.GET(`/properties`, {
    user_id: user._id,
  })) as Property[]

  return { properties }
}
