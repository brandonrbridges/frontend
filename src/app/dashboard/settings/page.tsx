import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import { Panel, SettingsForm, Stats } from '@/components/Dashboard'

export default async function Page() {
  const { user } = await getServerSession(authOptions)

  return (
    <>
      <Panel>
        <SettingsForm user={user} />
      </Panel>
    </>
  )
}
