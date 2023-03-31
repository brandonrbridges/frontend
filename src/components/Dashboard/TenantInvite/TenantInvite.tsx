'use client'

// Router
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'
import Panel from '@/components/Dashboard/Panel'

// Modules
import { toast } from 'react-toastify'

const TenantInvite = ({ user, property }: { user: any; property: any }) => {
  const router = useRouter()

  const handleResponse = async (response: string) => {
    let payload = {}

    if (response == 'accept') {
      payload = {
        status: 'occupied',
      }
    } else {
      payload = {
        status: 'available',
        tenant_id: null,
      }
    }

    toast
      .promise(fetcher.PATCH(`/properties/${property._id}`, payload), {
        pending: 'Updating...',
        success: 'Success!',
        error: 'Error!',
      })
      .finally(() => router.refresh())
  }

  return (
    <Panel>
      <div className='space-y-3'>
        <h3 className='font-semibold text-base text-gray-900 leading-6'>
          Hello {user.first_name} 👋🏻
        </h3>
        <p className='text-sm text-gray-900'>
          You have been invited to join {property.address.line_1}. Would you like to accept?
        </p>
        <div className='space-x-4'>
          <Button onClick={() => handleResponse('accept')}>Accept</Button>
          <Button onClick={() => handleResponse('decline')}>Decline</Button>
        </div>
      </div>
    </Panel>
  )
}

export default TenantInvite
