import Image from 'next/image'

const Cloud = () => {
  return (
    <div className='mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8'>
      <div className='bg-gray-900 text-center py-24 px-6 shadow-2xl relative isolate overflow-hidden sm:rounded-3xl sm:px-16'>
        <h2 className='font-bold mx-auto text-white tracking-tight max-w-2xl text-3xl sm:text-4xl'>
          Our users love us
        </h2>
        <p className='mx-auto max-w-xl mt-6 text-lg text-gray-300 leading-8'>
          We have over 250,000 users on the platform - and they love us. Here are just some of the
          companies utilising Hello Home.
        </p>
        <div className='mx-auto max-w-lg mt-20 grid gap-x-8 gap-y-12 grid-cols-4 items-center sm:max-w-xl sm:gap-x-10 sm:gap-y-14 sm:grid-cols-6 lg:max-w-4xl lg:grid-cols-5'>
          <Image
            className='object-contain w-full max-h-12 col-span-2 lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg'
            alt='Transistor'
            width={158}
            height={48}
          />
          <Image
            className='object-contain w-full max-h-12 col-span-2 lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/reform-logo-white.svg'
            alt='Reform'
            width={158}
            height={48}
          />
          <Image
            className='object-contain w-full max-h-12 col-span-2 lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg'
            alt='Tuple'
            width={158}
            height={48}
          />
          <Image
            className='object-contain w-full max-h-12 col-span-2 sm:col-start-2 lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
            alt='SavvyCal'
            width={158}
            height={48}
          />
          <Image
            className='object-contain w-full max-h-12 col-span-2 col-start-2 sm:col-start-auto lg:col-span-1'
            src='https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg'
            alt='Statamic'
            width={158}
            height={48}
          />
        </div>
        <svg
          viewBox='0 0 1404 767'
          className='transform-gpu -top-24 right-0 w-[87.75rem] -z-10 absolute blur-3xl'
          aria-hidden='true'
        >
          <path
            fill='url(#2cc9a831-91be-4f6b-a472-ee8b830c76f5)'
            fillOpacity='.25'
            d='m320.322 489.353-208.101-63.479L.829 766.92l319.493-277.567 374.785 114.326C630.42 488.216 572.913 273.941 860.374 340.544c359.326 83.254 407.216 309.974 508.406 95.017 80.95-171.966.55-341.344-49.77-404.537l-278.72 296.659L883.28.27 320.322 489.353Z'
          />
          <defs>
            <linearGradient
              id='2cc9a831-91be-4f6b-a472-ee8b830c76f5'
              x1='1530.54'
              x2='-123.297'
              y1='389.692'
              y2='484.042'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4F46E5' />
              <stop offset={1} stopColor='#80CAFF' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Cloud
