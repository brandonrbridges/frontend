// Helpers
import { onSort } from './Table.helpers'

// Icons
import { IconChevronDown } from '@tabler/icons-react'

export const Head = ({ labels }: { labels: string[] }) => {
  return (
    <thead>
      <tr>
        {labels.map((label, index) => (
          <th
            key={index}
            scope='col'
            className={`font-semibold text-left text-sm py-3.5 px-3 text-gray-900 ${
              index === 0 ? 'pl-4 sm:pl-0' : ''
            }`}
          >
            <a href='#' className='group inline-flex'>
              {label}
              <span className='rounded flex-none ml-2 text-gray-400 invisible group-hover:visible group-focus:visible'>
                <IconChevronDown className='h-5 w-5' aria-hidden='true' />
              </span>
            </a>
          </th>
        ))}
        <th scope='col' className='py-3.5 pr-0 pl-3 relative'>
          <span className='sr-only'>Edit</span>
        </th>
      </tr>
    </thead>
  )
}

export const Columns = ({ fields }: { fields: any[] }) => {
  return (
    <tbody>
      {fields.map((_row, index) => (
        <tr
          key={index}
          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}
        >
          {fields.map((text, index) => (
            <td
              key={index}
              className={`py-3.5 px-3 text-sm text-gray-900 ${index === 0 ? 'pl-4 sm:pl-0' : ''}`}
            >
              {text}
            </td>
          ))}
          <td className='pr-0 pl-3'>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Edit</span>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
