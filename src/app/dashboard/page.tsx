// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Alert from '@/components/Alert'
import {
  Panel,
  PropertiesTable,
  PropertyInfo,
  Stats,
  TenantCard,
  TenantInvite,
} from '@/components/Dashboard'
import Table from '@/components/Table'

// Icons
import { IconBuilding, IconChecklist, IconUsers } from '@tabler/icons-react'

async function getData() {
  const { user } = await getServerSession(authOptions)

  let properties, tenants

  if (user.roles.includes('landlord')) {
    properties = (await fetcher.GET('/properties', {
      user_id: user._id,
    })) as []

    tenants = (await fetcher.GET('/tenants', {
      user_id: user._id,
    })) as []
  } else {
    properties = (await fetcher.GET('/properties', {
      tenant_id: user._id,
    })) as []
  }

  const tasks = (await fetcher.GET('/tasks', {
    user_id: user._id,
  })) as []

  return {
    user,
    properties,
    tenants,
    tasks,
  }
}

export default async function Page() {
  const { user, properties, tenants, tasks } = await getData()

  if (user.roles.includes('landlord')) {
    return (
      <>
        <Stats
          statistics={[
            {
              name: 'Properties',
              value: properties?.length || 0,
              icon: IconBuilding,
              href: '/dashboard/properties',
            },
            {
              name: 'Tenants',
              value: tenants?.length || 0,
              icon: IconUsers,
              href: '/dashboard/tenants',
            },
            {
              name: 'Tasks',
              value: tasks?.length || 0,
              icon: IconChecklist,
              href: '/dashboard/tasks',
            },
          ]}
        />
        <div className='grid gap-8 grid-cols-3'>
          <Panel className='col-span-full'>
            <p className='text-sm mb-4 text-gray-500 italic'>
              This is a test reusable table. Please ignore this.
            </p>
            <Table />
          </Panel>
          <Panel className='col-span-2'>
            <PropertiesTable />
          </Panel>
        </div>
      </>
    )
  }

  if (user.roles.includes('tenant')) {
    const property = properties[0]

    if (!property) {
      return (
        <>
          <Alert
            type='danger'
            title='No Property Assigned'
            description='You do not have a property assigned.'
          />
        </>
      )
    }

    return (
      <>
        {property.status == 'waiting' && <TenantInvite user={user} property={property} />}
        <div className='grid gap-8 grid-cols-3'>
          <div className='col-span-2'>
            <Panel>
              <PropertyInfo property={property} />
            </Panel>
          </div>
          <div className='space-y-8'>
            <TenantCard user={property.tenant} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Alert
        type='danger'
        title='No Role Assigned'
        description='You do not have a role assigned.'
      />
    </>
  )
}
