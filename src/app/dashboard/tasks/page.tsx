// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { Panel, TaskFilter, TaskList, Stats } from '@/components/Dashboard'

export default async function Page() {
  const { user } = await getServerSession(authOptions)

  const tasks = await fetcher.GET('/tasks', {
    user_id: user._id,
  })

  return (
    <>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-3 items-start'>
        <Panel className='col-span-1'>
          <TaskFilter />
        </Panel>
        <Panel className='col-span-2'>
          <TaskList tasks={tasks} />
        </Panel>
      </div>
    </>
  )
}
