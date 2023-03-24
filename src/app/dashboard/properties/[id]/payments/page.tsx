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
      <Panel>
        <h3>Payments</h3>
      </Panel>
    </>
  )
}
