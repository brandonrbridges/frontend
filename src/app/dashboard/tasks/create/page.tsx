// Components
import { Panel, TaskForm } from '@/components/Dashboard'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function Page() {
  const { user } = await getServerSession(authOptions)

  return (
    <>
      <Panel>
        <TaskForm user_id={user._id} />
      </Panel>
    </>
  )
}
