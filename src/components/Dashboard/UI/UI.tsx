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

  if (!user) return router.push('/auth/login')

  const handleSignout = async () => {
    await signOut({ redirect: false, callbackUrl: '/' })

    router.push('/auth/login')
  }

  return (
    <>
      <div className='min-h-full bg-gray-100'>
        <div className='bg-gray-800 pb-32'>
          <Disclosure as='nav' className='bg-gray-800'>
            {({ open }) => (
              <>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                  <div className='border-b border-gray-700'>
                    <div className='flex h-16 px-4 items-center justify-between sm:px-0'>
                      <div className='flex items-center'>
                        <Logo />
                        <Navigation user={user} current={current} />
                      </div>
                      <div className='hidden md:block'>
                        <div className='flex ml-4 items-center md:ml-6'>
                          <button
                            type='button'
                            className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800'
                          >
                            <span className='sr-only'>View notifications</span>
                            <IconBell className='h-6 w-6' aria-hidden='true' />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as='div' className='ml-3 relative'>
                            <div>
                              <Menu.Button className='rounded-full flex max-w-xs bg-gray-800 text-sm items-center focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800'>
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
                              <Menu.Items className='bg-white rounded-md shadow-lg ring-black mt-2 py-1 origin-top-right right-0 ring-1 ring-opacity-5 w-48 z-10 absolute focus:outline-none'>
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
                                  onClick={handleSignout}
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
                      <div className='flex -mr-2 md:hidden'>
                        <MobileMenuToggle open={open} />
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className='border-b border-gray-700 md:hidden'>
                  <Navigation user={user} mobile />
                  <div className='border-t border-gray-700 pt-4 pb-3'>
                    <div className='flex px-5 items-center'>
                      <div className='flex-shrink-0'>
                        <Avatar user={user} />
                      </div>
                      <div className='ml-3'>
                        <div className='font-medium text-base text-white leading-none'>
                          {user.first_name}
                        </div>
                        <div className='font-medium text-sm leading-none text-gray-400'>
                          {user.email}
                        </div>
                      </div>
                      <button
                        type='button'
                        className='rounded-full ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800'
                      >
                        <span className='sr-only'>View notifications</span>
                        <IconBell className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                    <div className='space-y-1 mt-3 px-2'>
                      {user.roles.includes('admin') && (
                        <Link
                          href={'/admin'}
                          className='rounded-md font-medium text-base py-2 px-3 text-gray-400 block hover:bg-gray-700 hover:text-white'
                        >
                          Admin Panel
                        </Link>
                      )}
                      {userNavigation.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className='rounded-md font-medium text-base py-2 px-3 text-gray-400 block hover:bg-gray-700 hover:text-white'
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
              <h1 className='font-bold text-white tracking-tight text-3xl'>Hi {user.first_name}</h1>
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='mx-auto space-y-8 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
            {children}
            <div className=''>
              <p className='font-medium text-xs text-gray-400'>
                &copy; 2023 Hello Home, Inc. All rights reserved.
              </p>
              <ul className='flex space-x-6 mt-6 text-xs items-center'>
                <li>
                  <Link href='/' className='text-gray-500 hover:text-gray-800'>
                    Homepage
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
