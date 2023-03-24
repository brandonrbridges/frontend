import { classNames } from '@/helpers'

const tabs = [
  { name: 'Overview', href: '', current: true },
  { name: 'Tasks', href: 'tasks', current: false },
  { name: 'Payments', href: 'payments', current: false },
  { name: 'Documents', href: 'documents', current: false },
]

const PageNavigation = ({ id }) => {
  return (
    <nav className='flex space-x-4' aria-label='Tabs'>
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={`/dashboard/properties/${id}/${tab.href}`}
          className={classNames(
            tab.current
              ? 'bg-gray-900 text-gray-200'
              : 'bg-white text-gray-500 hover:text-gray-700',
            'rounded-md px-3 py-1 text-sm font-medium'
          )}
          aria-current={tab.current ? 'page' : undefined}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  )
}

export default PageNavigation
