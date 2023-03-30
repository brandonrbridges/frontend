import Image from 'next/image'

const ContentWithImages = () => {
  return (
    <div className='mt-32 overflow-hidden sm:mt-40'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto max-w-2xl grid gap-x-12 gap-y-16 grid-cols-1 lg:flex-none lg:min-w-full lg:max-w-none lg:mx-0 lg:gap-y-8'>
          <div className='lg:max-w-lg lg:w-full lg:pb-8 lg:col-end-1'>
            <h2 className='font-bold tracking-tight text-3xl text-gray-900 sm:text-4xl'>
              With our Home Management Platform, managing your properties is easy
            </h2>
            <ul className='space-y-1 mt-6 text-xl text-gray-600 leading-8'>
              <li>Automatic Rent Collection</li>
              <li>Real-time Task Management</li>
              <li>Fully-equipped Accounting</li>
              <li>Secure Document Storage</li>
              <li>Powerful Analytics</li>
              <li>AI Assistant</li>
            </ul>
            <p className='mt-6 text-base text-gray-600 leading-7'>
              We understand the challenges of managing properties, so our platform is designed to
              help you stay organized and on top of your tasks.
            </p>
          </div>
          <div className='flex flex-wrap gap-6 items-start justify-end sm:gap-8 lg:contents'>
            <div className='flex-auto w-0 lg:flex-none lg:ml-auto lg:w-auto lg:self-end'>
              <Image
                src='https://cdn.hello-home.app/assets%2Fscreenshots%2Fproperty_view.png'
                alt=''
                className='max-w-none object-cover bg-gray-50 rounded-2xl w-[37rem] aspect-[7/5]'
                height='500'
                width='500'
              />
            </div>
            <div className='contents lg:flex lg:ml-auto lg:w-[37rem] lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:items-start lg:justify-end'>
              <div className='flex flex-none order-first w-64 justify-end self-end lg:w-auto'>
                <Image
                  src='https://cdn.hello-home.app/assets%2Fscreenshots%2Fproperty_view.png'
                  alt=''
                  className='flex-none max-w-none object-cover bg-gray-50 rounded-2xl w-[24rem] aspect-[4/3]'
                  height='500'
                  width='500'
                />
              </div>
              <div className='flex flex-auto w-96 justify-end lg:flex-none lg:w-auto'>
                <Image
                  src='https://cdn.hello-home.app/assets%2Fscreenshots%2Fproperty_view.png'
                  alt=''
                  className='flex-none max-w-none object-cover bg-gray-50 rounded-2xl w-[37rem] aspect-[7/5]'
                  height='500'
                  width='500'
                />
              </div>
              <div className='hidden sm:flex-auto sm:w-0 sm:block lg:flex-none lg:w-auto'>
                <Image
                  src='https://cdn.hello-home.app/assets%2Fscreenshots%2Fproperty_view.png'
                  alt=''
                  className='max-w-none object-cover bg-gray-50 rounded-2xl w-[24rem] aspect-[4/3]'
                  height='500'
                  width='500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentWithImages
