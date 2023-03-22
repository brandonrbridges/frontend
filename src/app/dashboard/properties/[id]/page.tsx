// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import {
  Panel,
  PropertiesTable,
  PropertyInfo,
  Stats,
  TaskList,
  TenantCard,
} from '@/components/Dashboard'

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
      <div>
        <h2 className='font-bold text-4xl text-white'>{property.address.line_1}</h2>
        <p className='text-opacity-75 text-white'>{property.address.postcode}</p>
      </div>
      <div className='gap-6 grid grid-cols-5 items-start'>
        <Panel className='col-span-3'>
          <PropertyInfo property={property} />
        </Panel>
        <div className='col-span-2 space-y-6'>
          <TenantCard user={property.user} />
          <TenantCard user={property.tenant} />
          <Panel>
            <TaskList tasks={tasks} />
          </Panel>
        </div>
      </div>
    </>
  )
}
