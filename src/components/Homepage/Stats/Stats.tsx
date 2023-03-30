const Stats = () => {
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='font-bold tracking-tight text-3xl text-gray-900 sm:text-4xl'>
          With our user-friendly dashboard, you can easily monitor progress and keep an eye on all
          your properties
        </h2>
        <p className='mt-6 text-base text-gray-600 leading-7'>
          Focus on the things that matter to you and your tenants. Let us take care of the rest.
        </p>
      </div>
      <div className='flex flex-col mx-auto mt-16 max-w-2xl gap-8 lg:flex-row lg:max-w-none lg:mx-0 lg:mt-20 lg:items-end'>
        <div className='flex flex-col-reverse bg-gray-50 rounded-2xl p-8 gap-x-16 gap-y-8 justify-between sm:flex-row-reverse sm:max-w-md sm:w-3/4 sm:items-end lg:flex-none lg:flex-col lg:max-w-none lg:w-72 lg:items-start'>
          <p className='flex-none font-bold tracking-tight text-3xl text-gray-900'>250,000+</p>
          <div className='sm:w-80 sm:shrink lg:flex-none lg:w-auto'>
            <p className='font-semibold text-lg tracking-tight text-gray-900'>
              Users on the platform
            </p>
            <p className='mt-2 text-base text-gray-600 leading-7'>
              Between Landlords and Tenants, we have over 250,000 users on the platform.
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse bg-gray-900 rounded-2xl p-8 gap-y-8 gap-x-16 justify-between sm:flex-row-reverse sm:items-end lg:flex-auto lg:flex-col lg:max-w-sm lg:w-full lg:gap-y-44 lg:items-start'>
          <p className='flex-none font-bold text-white tracking-tight text-3xl'>£1.2 million</p>
          <div className='sm:w-80 sm:shrink lg:flex-none lg:w-auto'>
            <p className='font-semibold text-lg text-white tracking-tight'>
              Collected in rent last year
            </p>
            <p className='mt-2 text-base text-gray-400 leading-7'>
              Landlords have secured over £1.2 million automatically collected in rent last year via
              Hello Home.
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse bg-indigo-600 rounded-2xl p-8 gap-y-8 gap-x-16 justify-between sm:flex-row-reverse sm:max-w-xl sm:w-11/12 sm:items-end lg:flex-auto lg:flex-col lg:max-w-none lg:w-full lg:gap-y-28 lg:items-start'>
          <p className='flex-none font-bold text-white tracking-tight text-3xl'>800,000+</p>
          <div className='sm:w-80 sm:shrink lg:flex-none lg:w-auto'>
            <p className='font-semibold text-lg text-white tracking-tight'>
              Tasks handled by our platform
            </p>
            <p className='mt-2 text-base text-indigo-200 leading-7'>
              Our Tenants and Landlords have completed over 800,000 tasks on the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
