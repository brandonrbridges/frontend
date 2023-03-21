// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Alert from '@/components/Alert'
import { Panel, PropertiesTable, Stats } from '@/components/Dashboard'
import { IconBuilding, IconChecklist, IconUsers } from '@tabler/icons-react'

import { ResponsivePieCanvas } from '@nivo/pie'
import { PieChart } from '@/components/Dashboard/Charts'

async function getData() {
  const { user } = await getServerSession(authOptions)

  const properties = (await fetcher.GET('/properties', {
    user_id: user._id,
  })) as []

  const tenants = (await fetcher.GET('/tenants', {
    user_id: user._id,
  })) as []

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
              value: properties.length,
              icon: IconBuilding,
              href: '/dashboard/properties',
            },
            {
              name: 'Tenants',
              value: tenants.length,
              icon: IconUsers,
              href: '/dashboard/tenants',
            },
            {
              name: 'Tasks',
              value: tasks.length,
              icon: IconChecklist,
              href: '/dashboard/tasks',
            },
          ]}
        />
        <div className='gap-8 grid grid-cols-3'>
          <Panel className='col-span-2'>
            <PropertiesTable />
          </Panel>
        </div>
      </>
    )
  }

  if (user.roles.includes('tenant')) {
    return (
      <>
        <Stats
          statistics={[
            {
              name: 'Properties',
              value: properties.length,
              icon: IconBuilding,
              href: '/dashboard/properties',
            },
            {
              name: 'Tenants',
              value: tenants.length,
              icon: IconUsers,
              href: '/dashboard/tenants',
            },
            {
              name: 'Tasks',
              value: tasks.length,
              icon: IconChecklist,
              href: '/dashboard/tasks',
            },
          ]}
        />
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
