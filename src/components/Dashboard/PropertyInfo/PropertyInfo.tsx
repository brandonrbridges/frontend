// Icons
import { IconPaperclip } from '@tabler/icons-react'

export default async function PropertyInfo({ property }) {
  return (
    <>
      <div className='pb-5'>
        <h3 className='font-semibold text-base text-gray-900 leading-6'>Rent and Deposit</h3>
        <p className='mt-1 text-sm max-w-2xl text-gray-500'>
          The status of your rent payment and deposit scheme.
        </p>
      </div>
      <div className='border-t border-gray-200 pt-5'>
        <dl className='grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2'>
          <div className='sm:col-span-1'>
            <dt className='font-medium text-sm text-gray-500'>Rent</dt>
            <dd className='mt-1 text-sm text-gray-900'>{property.rent}</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='font-medium text-sm text-gray-500'>Deposit</dt>
            <dd className='mt-1 text-sm text-gray-900'>{property.deposit}</dd>
          </div>
        </dl>
      </div>
      <div className='mt-6 pb-5'>
        <h3 className='font-semibold text-base text-gray-900 leading-6'>Property Information</h3>
        <p className='mt-1 text-sm max-w-2xl text-gray-500'>Information about the property.</p>
      </div>
      <div className='border-t border-gray-200 pt-5'>
        <dl className='grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2'>
          <div className='sm:col-span-1'>
            <dt className='font-medium text-sm text-gray-500'>Property Address</dt>
            <dd className='mt-1 text-sm text-gray-900'>
              {property.address.line_1 + ', '}
              {property.address.line_2 && property.address.line_2 + ',' + <br />}
              {property.address.city},<br /> {property.address.county}, {property.address.postcode}
            </dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='font-medium text-sm text-gray-500'>Property Type</dt>
            <dd className='mt-1 text-sm text-gray-900 capitalize'>{property._type}</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='font-medium text-sm text-gray-500'>Bedrooms</dt>
            <dd className='mt-1 text-sm text-gray-900'>{property.bedrooms}</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='font-medium text-sm text-gray-500'>Bathrooms</dt>
            <dd className='mt-1 text-sm text-gray-900'>{property.bathrooms}</dd>
          </div>
        </dl>
      </div>
    </>
  )
}
