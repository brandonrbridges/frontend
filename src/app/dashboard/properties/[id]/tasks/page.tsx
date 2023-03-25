// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { Panel, TaskFilter, TaskList } from '@/components/Dashboard'

async function getData(id) {
  const { user } = await getServerSession(authOptions)

  const property = await fetcher.GET(`/properties/${id}`, {
    user_id: user._id,
  })

  const tasks = await fetcher.GET(`/tasks`, {
    property_id: id,
  })

  return { tasks }
}

export default async function Page({ params }) {
  const { tasks } = await getData(params.id)

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
