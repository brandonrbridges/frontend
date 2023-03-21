// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { Panel, PropertiesTable, Stats } from '@/components/Dashboard'

export default async function Page() {
  return (
    <>
      <Panel>
        <PropertiesTable />
      </Panel>
    </>
  )
}
