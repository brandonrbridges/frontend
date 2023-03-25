'use client'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { DropdownInput, Header, Label, Row, TextInput } from '@/components/Form'

// Client Components
import { PropertyMap } from './PropertyForm.client'

// Modules
import { AddressAutofill } from '@mapbox/search-js-react'
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
      .promise(fetcher.POST('/properties', { ...data, user_id }), {
        pending: 'Adding property...',
        success: 'Property added successfully!',
        error: 'Something went wrong. Please try again.',
      })
      .then((property: any) => router.push(`/dashboard/properties/${property._id}`))
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
        <div className='space-y-6 sm:space-y-5'>
          <Header
            title='Add a Property'
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

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <Header
            title='Property Address'
            description='The permanent address of the property. This will only be visible to you, your chosen
              Letting Agency and your tenants.'
          />

          <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY?.toString()}>
            <div className='space-y-6 sm:space-y-5 mt-6'>
              <Row
                label={<Label htmlFor='address.line_1'>Line 1</Label>}
                input={
                  <Controller
                    control={control}
                    name='address.line_1'
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        autoComplete='address-line1'
                        placeholder='e.g. 123 Main Street'
                        error={errors.address?.line_1?.message}
                      />
                    )}
                  />
                }
              />

              <Row
                label={<Label htmlFor='address.line_2'>Line 2</Label>}
                input={
                  <Controller
                    control={control}
                    name='address.line_2'
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        autoComplete='address-line2'
                        placeholder='e.g. Optional'
                        error={errors.address?.line_2?.message}
                      />
                    )}
                  />
                }
              />

              <Row
                label={<Label htmlFor='address.city'>Town / City</Label>}
                input={
                  <Controller
                    control={control}
                    name='address.city'
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        autoComplete='address-level2'
                        placeholder='e.g. London'
                        error={errors.address?.city?.message}
                      />
                    )}
                  />
                }
              />

              <Row
                label={<Label htmlFor='address.county'>County</Label>}
                input={
                  <Controller
                    control={control}
                    name='address.county'
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        autoComplete='address-level1'
                        placeholder='e.g. Greater London'
                        error={errors.address?.county?.message}
                      />
                    )}
                  />
                }
              />

              <Row
                label={<Label htmlFor='address.postcode'>Postcode</Label>}
                input={
                  <Controller
                    control={control}
                    name='address.postcode'
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        autoComplete='postal-code'
                        placeholder='e.g. SW1A 1AA'
                        error={errors.address?.postcode?.message}
                      />
                    )}
                  />
                }
              />

              <PropertyMap />
            </div>
          </AddressAutofill>
        </div>

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <Header title='Property Information' description='Information about your property.' />

          <Row
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

          <Row
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

          <Row
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

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <Header
            title='Rent and Deposit'
            description='The rent and deposit for your property. This will only be visible to you, your chosen Letting Agency and your tenants.'
          />

          <Row
            label={<Label htmlFor='rent'>Rent</Label>}
            input={
              <Controller
                control={control}
                name='rent'
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type='number'
                    placeholder='e.g. £650 / month'
                    error={errors.rent?.message}
                  />
                )}
              />
            }
          />

          <Row
            label={<Label htmlFor='deposit'>Deposit</Label>}
            input={
              <Controller
                control={control}
                name='deposit'
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type='number'
                    placeholder='e.g. £1150'
                    error={errors.deposit?.message}
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

export default PropertyForm
