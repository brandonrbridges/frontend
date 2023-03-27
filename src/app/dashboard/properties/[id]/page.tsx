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
  TenantSearch,
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

  const tenancy = await fetcher.GET(`/tenancies/property/${id}`)

  return { user, property, tasks, tenancy }
}

export default async function Page({ params }) {
  const { user, property, tasks, tenancy } = await getData(params.id)

  return (
    <>
      <div className='grid gap-6 grid-cols-5 items-start'>
        <div className='space-y-6 col-span-3'>
          <Panel className='col-span-3'>
            <PropertyInfo property={property} />
          </Panel>
        </div>
        <div className='space-y-6 col-span-2'>
          {tenancy && (
            <Panel>
              <p>Active Tenancy</p>
              <p>Status: {tenancy.status}</p>
              <p>Status: {tenancy.tenant.first_name}</p>
            </Panel>
          )}
          {user._id !== property.user._id && <TenantCard user={property.user} />}
          {property.tenant ? (
            <>
              <TenantCard user={property.tenant} />
              <Button className='w-full'>Evict {property.tenant.first_name}</Button>
            </>
          ) : (
            <>
              <Panel>
                <TenantSearch property_id={property._id} landlord_id={property.user_id} />
              </Panel>
            </>
          )}
        </div>
      </div>
    </>
  )
}
