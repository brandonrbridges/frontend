// Next
import Link from 'next/link'

// Props
import type { Property } from './PropertiesTable.props'

// Icons
import { IconChevronDown } from '@tabler/icons-react'
import Button from '@/components/Button'

export const AddButton = () => {
  return (
    <Link href='dashboard/properties/create'>
      <Button>Add Property</Button>
    </Link>
  )
}

export const Table = ({ properties }: { properties: Property[] }) => {
  return (
    <table className='divide-y min-w-full divide-gray-300'>
      <TableHead />
      <tbody className='divide-y bg-white divide-gray-200'>
        {properties?.map((property: Property) => (
          <TableRow property={property} key={property._id} />
        ))}
      </tbody>
    </table>
  )
}

export const TableDescription = () => {
  return (
    <div className='sm:flex-auto'>
      <h1 className='font-semibold text-base text-gray-900 leading-6'>Properties</h1>
      <p className='mt-2 text-sm text-gray-700'>A list of all the properties that you manage.</p>
    </div>
  )
}

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th
          scope='col'
          className='font-semibold text-left text-sm py-3.5 pr-3 pl-4 text-gray-900 sm:pl-0'
        >
          <a href='#' className='group inline-flex'>
            Name / Address
            <span className='rounded flex-none ml-2 text-gray-400 invisible group-hover:visible group-focus:visible'>
              <IconChevronDown className='h-5 w-5' aria-hidden='true' />
            </span>
          </a>
        </th>
        <th scope='col' className='font-semibold text-left text-sm py-3.5 px-3 text-gray-900'>
          <a href='#' className='group inline-flex'>
            Postcode
            <span className='rounded flex-none bg-gray-100 ml-2 text-gray-900 group-hover:bg-gray-200'>
              <IconChevronDown className='h-5 w-5' aria-hidden='true' />
            </span>
          </a>
        </th>
        <th scope='col' className='font-semibold text-left text-sm py-3.5 px-3 text-gray-900'>
          <a href='#' className='group inline-flex'>
            Status
            <span className='rounded flex-none ml-2 text-gray-400 invisible group-hover:visible group-focus:visible'>
              <IconChevronDown
                className='rounded flex-none h-5 ml-2 text-gray-400 w-5 invisible group-hover:visible group-focus:visible'
                aria-hidden='true'
              />
            </span>
          </a>
        </th>
        <th scope='col' className='font-semibold text-left text-sm py-3.5 px-3 text-gray-900'>
          <a href='#' className='group inline-flex'>
            Tenant
            <span className='rounded flex-none ml-2 text-gray-400 invisible group-hover:visible group-focus:visible'>
              <IconChevronDown
                className='rounded flex-none h-5 ml-2 text-gray-400 w-5 invisible group-hover:visible group-focus:visible'
                aria-hidden='true'
              />
            </span>
          </a>
        </th>
        <th scope='col' className='py-3.5 pr-0 pl-3 relative'>
          <span className='sr-only'>Edit</span>
        </th>
      </tr>
    </thead>
  )
}

const TableRow = ({ property }: { property: Property }) => {
  return (
    <tr>
      <td className='font-medium text-sm py-4 pr-3 pl-4 text-gray-900 whitespace-nowrap sm:pl-0'>
        {property.name || property.address.line_1}
      </td>
      <td className='text-sm py-4 px-3 text-gray-500 whitespace-nowrap'>
        {property.address.postcode}
      </td>
      <td className='text-sm py-4 px-3 text-gray-500 whitespace-nowrap'>{property.status}</td>
      <td className='text-sm py-4 px-3 text-gray-500 whitespace-nowrap'>
        {property.tenant_id && property.tenant && (
          <>{property.tenant.first_name + ' ' + property.tenant.last_name}</>
        )}
      </td>
      <td className='text-right text-sm py-4 pr-4 pl-3 relative whitespace-nowrap sm:pr-0'>
        <Link
          href={'dashboard/properties/' + property._id}
          as={'dashboard/properties/' + property._id}
          className='text-indigo-600 hover:text-indigo-900'
        >
          Edit
          <span className='sr-only'>, {property.name || property.address.line_1}</span>
        </Link>
      </td>
    </tr>
  )
}
