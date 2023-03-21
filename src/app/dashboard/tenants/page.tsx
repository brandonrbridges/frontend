// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { Panel, Stats, TenantGrid } from '@/components/Dashboard'

export default async function Page() {
  const { user } = await getServerSession(authOptions)

  const tenants = await fetcher.GET('/tenants')

  return (
    <>
      <TenantGrid tenants={tenants} />
    </>
  )
}
