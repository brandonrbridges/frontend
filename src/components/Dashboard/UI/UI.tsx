'use client'

// React
import { Fragment } from 'react'

// Next
import Link from 'next/link'

// Headless UI
import { Disclosure, Menu, Transition } from '@headlessui/react'

// Helpers
import { classNames } from '@/helpers'

// Props
import { UserProps } from './UI.props'

// Components
import { MobileMenuToggle } from './UI.client'
import { Avatar, Logo, Navigation } from './UI.server'

// Icons
import { IconBell } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

const userNavigation = [{ name: 'Settings', href: '/dashboard/settings' }]

export default function UI({ children, user }: { children: React.ReactNode; user: UserProps }) {
  const current = usePathname()
  const router = useRouter()

  if (!user) return <p>There is no user</p>

  return (
    <>
      <div className='min-h-full bg-gray-100'>
        <div className='bg-gray-800 pb-32'>
          <Disclosure as='nav' className='bg-gray-800'>
            {({ open }) => (
              <>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                  <div className='border-b border-gray-700'>
                    <div className='flex h-16 items-center justify-between px-4 sm:px-0'>
                      <div className='flex items-center'>
                        <Logo />
                        <Navigation user={user} current={current} />
                      </div>
                      <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                          <button
                            type='button'
                            className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                          >
                            <span className='sr-only'>View notifications</span>
                            <IconBell className='h-6 w-6' aria-hidden='true' />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as='div' className='relative ml-3'>
                            <div>
                              <Menu.Button className='flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                <span className='sr-only'>Open user menu</span>
                                <Avatar user={user} />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-100'
                              enterFrom='transform opacity-0 scale-95'
                              enterTo='transform opacity-100 scale-100'
                              leave='transition ease-in duration-75'
                              leaveFrom='transform opacity-100 scale-100'
                              leaveTo='transform opacity-0 scale-95'
                            >
                              <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                {user.roles.includes('admin') && (
                                  <Menu.Item
                                    className={classNames(
                                      'block hover:bg-gray-100 px-4 py-2 text-sm text-gray-700 text-left w-full'
                                    )}
                                  >
                                    <Link href='/admin'>Admin Panel</Link>
                                  </Menu.Item>
                                )}

                                {userNavigation.map((item, index) => (
                                  <Menu.Item key={index}>
                                    {({ active }) => (
                                      <Link
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                                <Menu.Item
                                  as='button'
                                  onClick={() => signOut().then(() => router.push('/auth/login'))}
                                  className={classNames(
                                    'block hover:bg-gray-100 px-4 py-2 text-sm text-gray-700 text-left w-full'
                                  )}
                                >
                                  Signout
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className='-mr-2 flex md:hidden'>
                        <MobileMenuToggle open={open} />
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className='border-b border-gray-700 md:hidden'>
                  <Navigation user={user} mobile />
                  <div className='border-t border-gray-700 pt-4 pb-3'>
                    <div className='flex items-center px-5'>
                      <div className='flex-shrink-0'>
                        <Avatar user={user} />
                      </div>
                      <div className='ml-3'>
                        <div className='text-base font-medium leading-none text-white'>
                          {user.first_name}
                        </div>
                        <div className='text-sm font-medium leading-none text-gray-400'>
                          {user.email}
                        </div>
                      </div>
                      <button
                        type='button'
                        className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                      >
                        <span className='sr-only'>View notifications</span>
                        <IconBell className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                    <div className='mt-3 space-y-1 px-2'>
                      {user.roles.includes('admin') && (
                        <Link
                          href={'/admin'}
                          className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                        >
                          Admin Panel
                        </Link>
                      )}
                      {userNavigation.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <header className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold tracking-tight text-white'>Hi {user.first_name}</h1>
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 space-y-8'>{children}</div>
        </main>
      </div>
    </>
  )
}
