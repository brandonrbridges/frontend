'use client'

// Next
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

// Helpers
import { classNames } from '@/helpers'

export const ListItem = ({ children, item }) => {
  const params = useSearchParams()

  const status = params?.get('status')

  return (
    <Link
      href={'dashboard/tasks' + (item.status ? '?status=' + item.status : '')}
      className={classNames(
        item.status === status
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
      )}
      aria-current={item.status ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
