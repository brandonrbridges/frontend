'use client'

// React
import { useRef } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'
import { DropdownInput, Label, TextInput } from '@/components/Form'

// Modules
import { Controller, useForm } from 'react-hook-form'

const PropertyForm = ({ user_id }: { user_id: string }) => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
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
    },
  })

  const submit = async (data: any) => {
    const property = await fetcher.POST('/properties', {
      ...data,
      status: 'setup',
      user_id,
    })

    router.push(`/dashboard/properties/${property._id}`)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
        <div className='space-y-6 sm:space-y-5'>
          <FormHeader
            title='Add a Property'
            description='Make sure all fields below are filled in correctly.'
          />

          <div className='space-y-6 sm:space-y-5'>
            <FormRow
              label={<Label htmlFor='name'>Name</Label>}
              input={
                <Controller
                  control={control}
                  name='name'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. My first home'
                      error={errors.name?.message}
                    />
                  )}
                />
              }
            />
          </div>
        </div>

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <FormHeader
            title='Property Address'
            description='The permanent address of the property. This will only be visible to you, your chosen
              Letting Agency and your tenants.'
          />

          <div className='space-y-6 sm:space-y-5'>
            <FormRow
              label={<Label htmlFor='address.line_1'>Line 1</Label>}
              input={
                <Controller
                  control={control}
                  name='address.line_1'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. 123 Main Street'
                      error={errors.address?.line_1?.message}
                    />
                  )}
                />
              }
            />

            <FormRow
              label={<Label htmlFor='address.line_2'>Line 2</Label>}
              input={
                <Controller
                  control={control}
                  name='address.line_2'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. Optional'
                      error={errors.address?.line_2?.message}
                    />
                  )}
                />
              }
            />

            <FormRow
              label={<Label htmlFor='address.city'>Town / City</Label>}
              input={
                <Controller
                  control={control}
                  name='address.city'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. London'
                      error={errors.address?.city?.message}
                    />
                  )}
                />
              }
            />

            <FormRow
              label={<Label htmlFor='address.county'>County</Label>}
              input={
                <Controller
                  control={control}
                  name='address.county'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. Greater London'
                      error={errors.address?.county?.message}
                    />
                  )}
                />
              }
            />

            <FormRow
              label={<Label htmlFor='address.postcode'>Postcode</Label>}
              input={
                <Controller
                  control={control}
                  name='address.postcode'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. SW1A 1AA'
                      error={errors.address?.postcode?.message}
                    />
                  )}
                />
              }
            />
          </div>
        </div>

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <FormHeader title='Property Information' description='Information about your property.' />

          <FormRow
            label={<Label htmlFor='type'>Type</Label>}
            input={
              <Controller
                control={control}
                name='type'
                render={({ field }) => (
                  <DropdownInput
                    {...field}
                    options={[
                      { value: 'house', label: 'House' },
                      { value: 'flat', label: 'Flat' },
                      { value: 'bungalow', label: 'Bungalow' },
                      { value: 'other', label: 'Other' },
                    ]}
                    error={errors.type?.message}
                  />
                )}
              />
            }
          />

          <FormRow
            label={<Label htmlFor='bedrooms'>Bedrooms</Label>}
            input={
              <Controller
                control={control}
                name='bedrooms'
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type='number'
                    placeholder='e.g. 3'
                    error={errors.bedrooms?.message}
                  />
                )}
              />
            }
          />

          <FormRow
            label={<Label htmlFor='bathrooms'>Bathrooms</Label>}
            input={
              <Controller
                control={control}
                name='bathrooms'
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type='number'
                    placeholder='e.g. 2'
                    error={errors.bathrooms?.message}
                  />
                )}
              />
            }
          />
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

const FormHeader = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h3 className='text-base font-semibold leading-6 text-gray-900'>{title}</h3>
    <p className='mt-1 text-sm text-gray-500'>{description}</p>
  </div>
)

const FormRow = ({ label, input }: { label: React.ReactNode; input: React.ReactNode }) => (
  <div className='space-y-6 sm:space-y-5'>
    <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
      {label}
      <div className='mt-2 sm:col-span-2 sm:mt-0'>
        <div className='flex max-w-lg'>{input}</div>
      </div>
    </div>
  </div>
)

export default PropertyForm
