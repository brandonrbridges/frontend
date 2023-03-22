// Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Components
import { AIAssistant, Panel, PropertyForm } from '@/components/Dashboard'

export default async function Page() {
  const { user } = await getServerSession(authOptions)

  return <AIAssistant user={user} />
}
