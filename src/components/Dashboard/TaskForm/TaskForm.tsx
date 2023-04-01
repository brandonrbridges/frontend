'use client'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { DropdownInput, Header, Label, Row, TextInput } from '@/components/Form'

// Modules
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const PropertyForm = ({ user_id }: { user_id: string }) => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lookup: '',
      address: {
        line_1: '',
        line_2: '',
        city: '',
        county: '',
        postcode: '',
      },
      type: '',
      bedrooms: '',
      bathrooms: '',
      rent: undefined,
      deposit: undefined,
    },
  })

  const submit = async (data: any) => {
    toast
      .promise(fetcher.POST('/tasks', { ...data, user_id }), {
        pending: 'Adding task...',
        success: 'Task added successfully!',
        error: 'Something went wrong. Please try again.',
      })
      .then((task: any) => router.push(`/dashboard/tasks/${task._id}`))
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
        <div className='space-y-6 sm:space-y-5'>
          <Header
            title='Add a Task'
            description='Make sure all fields below are filled in correctly.'
          />

          <div className='space-y-6 sm:space-y-5'>
            <Row
              label={<Label htmlFor='name'>Name</Label>}
              input={
                <Controller
                  control={control}
                  name='name'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. My first home'
                      description='It is only visible to you. It will appear within your dashboard as this name instead of the first line of the address.'
                      error={errors.name?.message}
                    />
                  )}
                />
              }
            />
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end gap-x-3'>
          <button
            type='button'
            className='rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default PropertyForm
