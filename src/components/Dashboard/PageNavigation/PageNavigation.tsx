'use client'

// Helpers
import { classNames } from '@/helpers'

const tabs = [
  { name: 'Overview', href: '/' },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Payments', href: '/payments' },
  { name: 'Documents', href: '/documents' },
]

const PageNavigation = ({ id }) => {
  return (
    <nav className='flex space-x-4' aria-label='Tabs'>
      {tabs.map((tab) => {
        console.log(window.location.pathname)

        const current = window.location.pathname.includes(tab.href)

        return (
          <a
            key={tab.name}
            href={`/dashboard/properties/${id}/${tab.href}`}
            className={classNames(
              current
                ? 'bg-gray-900  border-gray-900 hover:border-gray-800 text-gray-200 hover:text-gray-100'
                : 'bg-transparent border-gray-600 text-gray-400 hover:text-gray-200',
              'border rounded-md px-3 py-1 text-sm font-medium transition-colors'
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        )
      })}
    </nav>
  )
}

export default PageNavigation
