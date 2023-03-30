'use client'

import { Dialog } from '@headlessui/react'
import { IconMenu, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='inset-x-0 top-0 z-50 absolute'>
      <nav
        className='flex mx-auto max-w-7xl p-6 items-center justify-between lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Hello Home</span>
            <Image
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Hello Home Logo'
              height='10'
              width='10'
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='rounded-md -m-2.5 p-2.5 text-gray-700 inline-flex items-center justify-center'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <IconMenu className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='font-semibold text-sm text-gray-900 leading-6'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link href='/auth/login' className='font-semibold text-sm text-gray-900 leading-6'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='inset-0 z-50 fixed' />
        <Dialog.Panel className='bg-white w-full py-6 px-6 inset-y-0 right-0 z-50 fixed overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
            <button
              type='button'
              className='rounded-md -m-2.5 p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <IconX className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='divide-y divide-gray-500/10 -my-6'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='rounded-lg font-semibold -mx-3 text-base py-2 px-3 text-gray-900 leading-7 block hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='rounded-lg font-semibold -mx-3 text-base py-2.5 px-3 text-gray-900 leading-7 block hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
