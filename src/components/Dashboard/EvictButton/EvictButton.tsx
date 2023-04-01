'use client'

// React
import { useMemo } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'

// Modules
import { toast } from 'react-toastify'

const EvictButton = ({ property }) => {
  const router = useRouter()

  const handleEvict = () => {
    toast
      .promise(
        fetcher.PATCH(`/properties/${property._id}`, {
          status: 'available',
          tenant_id: null,
        }),
        {
          pending: 'Evicting...',
          success: 'Evicted',
          error: 'Failed to evict',
        }
      )
      .finally(() => router.refresh())
  }

  return <Button onClick={handleEvict}>Evict {property.tenant.first_name}</Button>
}

export default EvictButton
