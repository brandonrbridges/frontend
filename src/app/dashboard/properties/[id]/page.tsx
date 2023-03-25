// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import {
  PageNavigation,
  Panel,
  PropertiesTable,
  PropertyInfo,
  Stats,
  TaskList,
  TenantCard,
} from '@/components/Dashboard'
import Button from '@/components/Button'

async function getData(id) {
  const { user } = await getServerSession(authOptions)

  const property = await fetcher.GET(`/properties/${id}`, {
    user_id: user._id,
  })

  const tasks = await fetcher.GET(`/tasks`, {
    property_id: id,
  })

  return { user, property, tasks }
}

export default async function Page({ params }) {
  const { user, property, tasks } = await getData(params.id)

  return (
    <>
      <div className='grid gap-6 grid-cols-5 items-start'>
        <div className='space-y-6 col-span-3'>
          <Panel className='col-span-3'>
            <PropertyInfo property={property} />
          </Panel>
        </div>
        <div className='space-y-6 col-span-2'>
          <TenantCard user={property.user} />
          {property.tenant && <TenantCard user={property.tenant} />}
          <Panel>
            <TaskList tasks={tasks} />
          </Panel>
          {property.tenant && (
            <Button className='w-full'>Evict {property.tenant.first_name}</Button>
          )}
        </div>
      </div>
    </>
  )
}
