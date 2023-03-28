// Next
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Props
import { UserProps } from './UI.props'

// Components
import Navigation from '../Navigation'
import ToastManager from '@/components/ToastManager'

const Toasts = dynamic(() => import('@/components/ToastManager'), { ssr: false })

export default function UI({ children, user }: { children: React.ReactNode; user: UserProps }) {
  return (
    <>
      <div className='min-h-full bg-gray-100'>
        <div className='bg-gray-800 pb-32'>
          <Navigation user={user} />

          <div className='py-6' />
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
      <ToastManager />
    </>
  )
}
