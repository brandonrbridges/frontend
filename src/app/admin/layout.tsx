import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import { UI } from '@/components/Dashboard'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: 'Hello Home',
  description: 'The next-generation property management platform',
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <UI user={session?.user}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </UI>
  )
}
