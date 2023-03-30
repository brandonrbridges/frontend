import Button from '@/components/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-indigo-100/20 pt-14 -z-10 relative isolate overflow-hidden'>
      <div
        className='bg-white shadow-xl -mr-96 origin-top-right inset-y-0 right-1/2 shadow-indigo-600/10 ring-1 ring-indigo-50 w-[200%] -z-10 skew-x-[-30deg] absolute sm:-mr-80 lg:-mr-96'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-7xl px-6 pt-24 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none lg:mx-0 lg:grid lg:gap-x-16 lg:gap-y-6 lg:grid-cols-2 xl:gap-x-8 xl:grid-cols-1 xl:grid-rows-1'>
          <h1 className='font-bold tracking-tight max-w-2xl text-4xl text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
            Manage your properties the right way with Hello Home.
          </h1>
          <div className='max-w-xl space-y-8 mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <p className='text-lg text-gray-600 leading-8'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna
              aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
            </p>
            <Button>Join the Waitlist</Button>
          </div>
          <Image
            src='https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80'
            alt=''
            className='max-w-lg object-cover rounded-2xl mt-10 w-full aspect-[6/5] sm:mt-16 lg:max-w-none lg:mt-0 xl:mt-36 xl:row-span-2 xl:row-end-2'
            height='1280'
            width='1280'
          />
        </div>
      </div>
      <div className='bg-gradient-to-t from-white h-24 inset-x-0 bottom-0 -z-10 absolute sm:h-32' />
    </div>
  )
}

export default Hero
