import LoginForm from '@/components/LoginForm'
import SocialLogin from '@/components/SocialLogin'
import Image from 'next/image'

export default async function Page() {
  return (
    <>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 space-y-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900'>
            Login to Hello Home
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <LoginForm />

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='bg-white px-2 text-gray-500'>Or continue with</span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-3 gap-3'>
                <SocialLogin provider='facebook' />
                <SocialLogin provider='twitter' />
                <SocialLogin provider='github' />
              </div>
            </div>
          </div>
        </div>

        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{' '}
          <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
            sign up to the waitlist
          </a>
        </p>
      </div>
    </>
  )
}
