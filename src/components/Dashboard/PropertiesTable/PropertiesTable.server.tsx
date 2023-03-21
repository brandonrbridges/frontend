// Next
import Link from 'next/link'

// Props
import type { Property } from './PropertiesTable.props'

// Icons
import { IconChevronDown } from '@tabler/icons-react'

export const Table = ({ properties }: { properties: Property[] }) => {
  return (
    <table className='min-w-full divide-y divide-gray-300'>
      <TableHead />
      <tbody className='divide-y divide-gray-200 bg-white'>
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
      <h1 className='text-base font-semibold leading-6 text-gray-900'>Properties</h1>
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
          className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
        >
          <a href='#' className='group inline-flex'>
            Name / Address
            <span className='invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible'>
              <IconChevronDown className='h-5 w-5' aria-hidden='true' />
            </span>
          </a>
        </th>
        <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
          <a href='#' className='group inline-flex'>
            Postcode
            <span className='ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200'>
              <IconChevronDown className='h-5 w-5' aria-hidden='true' />
            </span>
          </a>
        </th>
        <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
          <a href='#' className='group inline-flex'>
            Status
            <span className='invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible'>
              <IconChevronDown
                className='invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible'
                aria-hidden='true'
              />
            </span>
          </a>
        </th>
        <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
          <a href='#' className='group inline-flex'>
            Tenant
            <span className='invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible'>
              <IconChevronDown
                className='invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible'
                aria-hidden='true'
              />
            </span>
          </a>
        </th>
        <th scope='col' className='relative py-3.5 pl-3 pr-0'>
          <span className='sr-only'>Edit</span>
        </th>
      </tr>
    </thead>
  )
}

const TableRow = ({ property }: { property: Property }) => {
  return (
    <tr>
      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
        {property.name || property.address.line_1}
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        {property.address.postcode}
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{property.status}</td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        {property.tenant_id && property.tenant && (
          <>{property.tenant.first_name + ' ' + property.tenant.last_name}</>
        )}
      </td>
      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0'>
        <Link
          href={'/dashboard/properties/' + property._id}
          className='text-indigo-600 hover:text-indigo-900'
        >
          Edit
          <span className='sr-only'>, {property.name || property.address.line_1}</span>
        </Link>
      </td>
    </tr>
  )
}
