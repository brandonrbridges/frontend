'use client'

// React
import { useEffect, useState } from 'react'

// Next
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Hooks
import { useDebounce } from '@/hooks'

// Components
import Button from '@/components/Button'
import { TextInput } from '@/components/Form'

// Modules
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const TenantSearch = ({
  property_id,
  landlord_id,
}: {
  property_id: string
  landlord_id: string
}) => {
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [results, setResults] = useState<any>([])
  const debounced = useDebounce(search, 750)

  const [showConfirm, setShowConfirm] = useState(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const handleInvite = async (tenant_id: string) => {
    toast
      .promise(
        fetcher.POST(`/tenancies`, {
          property_id,
          tenant_id,
        }),
        {
          pending: 'Inviting...',
          success: 'Invited',
          error: 'Failed to invite',
        }
      )
      .finally(() => {
        router.refresh()
      })
  }

  const handleSearch = async (e: any) => {
    const { value } = e.target

    setSearch(value)
  }

  const submit = (data: any) => {
    toast.promise(
      new Promise<boolean>((resolve) =>
        setTimeout(() => {
          resolve(true)
        }, 1000)
      ),
      {
        pending: 'Searching...',
        success: 'Search complete',
        error: 'Search failed',
      }
    )
  }

  useEffect(() => {
    if (!debounced) return

    const search = async () => {
      const results = await fetcher.GET(`/users/search/${debounced}`)

      setResults(results)
    }

    search()
  }, [debounced])

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextInput name='search' label='Search' placeholder='Search' onChange={handleSearch} />

      {results.length > 0 && (
        <div className='space-y-4 mt-4'>
          {results.map((result: any) => (
            <div key={result._id} className='border rounded p-4'>
              <div className='flex items-center'>
                <div className='rounded-full bg-gray-200 h-12 mr-4 w-12 relative'>
                  {result.avatar_url && (
                    <Image
                      src={result.avatar_url}
                      alt={result.first_name}
                      fill
                      className='rounded-full'
                    />
                  )}
                </div>
                <div>
                  <p className='text-sm'>
                    {result.first_name} {result.last_name}
                  </p>
                  <p className='text-xs'>{result.email}</p>
                </div>
                <div className='ml-auto'>
                  {!showConfirm ? (
                    <Button onClick={() => setShowConfirm(true)}>Invite {result.first_name}</Button>
                  ) : (
                    <Button onClick={() => handleInvite(result._id)}>Confirm</Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  )
}

export default TenantSearch
