import Button from '@/components/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-indigo-100/20 pt-14 -z-10 relative isolate overflow-hidden'>
      <div
        className='bg-white shadow-xl -mr-96 origin-top-right inset-y-0 right-1/2 shadow-indigo-600/10 ring-1 ring-indigo-50 w-[200%] -z-10 skew-x-[-30deg] absolute sm:-mr-80 lg:-mr-96'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-8xl px-6 pt-24 lg:px-8 space-y-12'>
        <div className='mx-auto max-w-4xl space-y-12'>
          <h1 className='font-bold tracking-tight mx-auto text-4xl text-gray-900 sm:text-6xl text-center leading-loose'>
            Optimize Your Property Management with Hello Home
          </h1>
          <div className='max-w-3xl space-y-8 mx-auto text-center'>
            <p className='text-lg text-gray-600 leading-8'>
              Experience seamless property management through features such as Automated Rent
              Collection, Contractor Discovery, Task Coordination, and Comprehensive Accounting, all
              designed to simplify and enhance your property management experience.
            </p>
            <Button>Join the Waitlist</Button>
          </div>
          <div className='w-full'>
            <Image
              src='https://cdn.hello-home.app/assets%2Fscreenshots%2Fproperty_view.png'
              alt=''
              className='max-w-2xl object-cover rounded-2xl w-full lg:max-w-none'
              height='300'
              width='1280'
            />
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-t from-white h-24 inset-x-0 bottom-0 -z-10 absolute sm:h-32' />
    </div>
  )
}

export default Hero
