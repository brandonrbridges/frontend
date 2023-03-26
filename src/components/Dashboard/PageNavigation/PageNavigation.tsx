// Helpers
import { classNames } from '@/helpers'
import Link from 'next/link'

const HOST = process.env.NEXT_PUBLIC_HOST

const PageNavigation = ({ params }) => {
  const { id } = params

  const prefix = `dashboard/properties/${id}`

  const tabs = [
    { name: 'Overview', href: prefix },
    { name: 'Tasks', href: prefix + '/tasks' },
    { name: 'Payments', href: prefix + '/payments' },
    { name: 'Tenancy', href: prefix + '/tenancy' },
    { name: 'Documents', href: prefix + '/documents' },
    { name: 'Settings', href: prefix + '/settings' },
  ]

  return (
    <nav className='flex space-x-4' aria-label='Tabs'>
      {tabs.map((tab) => {
        let current = false

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={classNames(
              current
                ? 'bg-gray-900  border-gray-900 hover:border-gray-800 text-gray-200 hover:text-gray-100'
                : 'bg-transparent border-gray-600 text-gray-400 hover:text-gray-200',
              'border rounded-md px-3 py-1 text-sm font-medium transition-colors'
            )}
            aria-current={current ? 'page' : undefined}
          >
            {tab.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default PageNavigation
