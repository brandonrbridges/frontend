import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import { AccountingStats, Panel, Stats } from '@/components/Dashboard'

export default async function Page() {
  const { user } = await getServerSession(authOptions)

  return (
    <>
      <AccountingStats />
    </>
  )
}
