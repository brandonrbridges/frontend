'use client'

// React
import { useEffect, useState } from 'react'

// Hooks
import { useDebounce } from '@/hooks'

// Components
import { TextInput } from '@/components/Form'

// Modules
import { Controller, useForm } from 'react-hook-form'
import { fetcher } from '@/helpers'
import Image from 'next/image'
import Button from '@/components/Button'

const TenantSearch = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<any>([])
  const debounced = useDebounce(search, 750)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const submit = (data: any) => {}

  const handleSearch = async (e: any) => {
    const { value } = e.target

    setSearch(value)
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
                  <Button>Invite {result.first_name}</Button>
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
