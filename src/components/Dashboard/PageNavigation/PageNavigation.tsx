// Helpers
import { classNames } from '@/helpers'

const tabs = [
  { name: 'Overview', href: null },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Payments', href: '/payments' },
  { name: 'Documents', href: '/documents' },
  { name: 'Settings', href: '/settings' },
]

const HOST = process.env.NEXT_PUBLIC_HOST

const PageNavigation = ({ params }) => {
  const { id } = params

  return (
    <nav className='flex space-x-4' aria-label='Tabs'>
      {tabs.map((tab) => {
        const url = `${HOST}/dashboard/properties/${id}/${tab.href || ''}`
        let current = false

        if (url.endsWith(tab.href)) {
          current = true
        }

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
            aria-current={current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        )
      })}
    </nav>
  )
}

export default PageNavigation
