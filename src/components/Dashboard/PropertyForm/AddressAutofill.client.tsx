// Components
import { Label, Row, TextInput } from '@/components/Form'

// Client Components
import { PropertyMap } from './PropertyForm.client'

// Modules
import { AddressAutofill as AddressFill } from '@mapbox/search-js-react'
import { Controller } from 'react-hook-form'

const AddressAutofill = ({ control, errors }) => {
  return (
    <AddressFill accessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY?.toString()}>
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
    </AddressFill>
  )
}

export default AddressAutofill
