'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { IconMenu, IconX } from '@tabler/icons-react'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]
const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Laravel developer',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '$125,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    role: 'React Native developer',
    href: '#',
    description:
      'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
    salary: '$105,000 USD',
    location: 'San Francisco, CA',
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      {/* Header */}
      <header className='inset-x-0 top-0 z-50 absolute'>
        <nav
          className='flex mx-auto max-w-7xl p-6 items-center justify-between lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
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

      <main className='isolate'>
        {/* Hero section */}
        <div className='bg-gradient-to-b from-indigo-100/20 pt-14 -z-10 relative isolate overflow-hidden'>
          <div
            className='bg-white shadow-xl -mr-96 origin-top-right inset-y-0 right-1/2 shadow-indigo-600/10 ring-1 ring-indigo-50 w-[200%] -z-10 skew-x-[-30deg] absolute sm:-mr-80 lg:-mr-96'
            aria-hidden='true'
          />
          <div className='mx-auto max-w-7xl py-32 px-6 sm:py-40 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-none lg:mx-0 lg:grid lg:gap-x-16 lg:gap-y-6 lg:grid-cols-2 xl:gap-x-8 xl:grid-cols-1 xl:grid-rows-1'>
              <h1 className='font-bold tracking-tight max-w-2xl text-4xl text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
                We’re a passionate group of people working from around the world to build the future
                of ecommerce.
              </h1>
              <div className='max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1'>
                <p className='text-lg text-gray-600 leading-8'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna
                  aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <img
                src='https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80'
                alt=''
                className='max-w-lg object-cover rounded-2xl mt-10 w-full aspect-[6/5] sm:mt-16 lg:max-w-none lg:mt-0 xl:mt-36 xl:row-span-2 xl:row-end-2'
              />
            </div>
          </div>
          <div className='bg-gradient-to-t from-white h-24 inset-x-0 bottom-0 -z-10 absolute sm:h-32' />
        </div>

        {/* Timeline section */}
        <div className='mx-auto -mt-8 max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl grid gap-8 grid-cols-1 overflow-hidden lg:max-w-none lg:mx-0 lg:grid-cols-4'>
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className='flex font-semibold text-sm text-indigo-600 leading-6 items-center'
                >
                  <svg viewBox='0 0 4 4' className='flex-none h-1 mr-4 w-1' aria-hidden='true'>
                    <circle cx={2} cy={2} r={2} fill='currentColor' />
                  </svg>
                  {item.date}
                  <div
                    className='h-px bg-gray-900/10 -ml-2 w-screen -translate-x-full absolute sm:-ml-4 lg:flex-auto lg:-mr-6 lg:ml-8 lg:w-auto lg:translate-x-0 lg:static'
                    aria-hidden='true'
                  />
                </time>
                <p className='font-semibold mt-6 text-lg tracking-tight text-gray-900 leading-8'>
                  {item.name}
                </p>
                <p className='mt-1 text-base text-gray-600 leading-7'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo cloud */}
        <div className='mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8'>
          <div className='bg-gray-900 text-center py-24 px-6 shadow-2xl relative isolate overflow-hidden sm:rounded-3xl sm:px-16'>
            <h2 className='font-bold mx-auto text-white tracking-tight max-w-2xl text-3xl sm:text-4xl'>
              Our customers love us
            </h2>
            <p className='mx-auto max-w-xl mt-6 text-lg text-gray-300 leading-8'>
              Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore
              proident cillum in nisi adipisicing officia excepteur tempor deserunt.
            </p>
            <div className='mx-auto max-w-lg mt-20 grid gap-x-8 gap-y-12 grid-cols-4 items-center sm:max-w-xl sm:gap-x-10 sm:gap-y-14 sm:grid-cols-6 lg:max-w-4xl lg:grid-cols-5'>
              <img
                className='object-contain w-full max-h-12 col-span-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg'
                alt='Transistor'
                width={158}
                height={48}
              />
              <img
                className='object-contain w-full max-h-12 col-span-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/reform-logo-white.svg'
                alt='Reform'
                width={158}
                height={48}
              />
              <img
                className='object-contain w-full max-h-12 col-span-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg'
                alt='Tuple'
                width={158}
                height={48}
              />
              <img
                className='object-contain w-full max-h-12 col-span-2 sm:col-start-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
                alt='SavvyCal'
                width={158}
                height={48}
              />
              <img
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

        {/* Content section */}
        <div className='mt-32 overflow-hidden sm:mt-40'>
          <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
            <div className='mx-auto max-w-2xl grid gap-x-12 gap-y-16 grid-cols-1 lg:flex-none lg:min-w-full lg:max-w-none lg:mx-0 lg:gap-y-8'>
              <div className='lg:max-w-lg lg:w-full lg:pb-8 lg:col-end-1'>
                <h2 className='font-bold tracking-tight text-3xl text-gray-900 sm:text-4xl'>
                  Our people
                </h2>
                <p className='mt-6 text-xl text-gray-600 leading-8'>
                  Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.
                  Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita
                  molestias quas.
                </p>
                <p className='mt-6 text-base text-gray-600 leading-7'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit
                  neque reprehenderit.
                </p>
              </div>
              <div className='flex flex-wrap gap-6 items-start justify-end sm:gap-8 lg:contents'>
                <div className='flex-auto w-0 lg:flex-none lg:ml-auto lg:w-auto lg:self-end'>
                  <img
                    src='https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'
                    alt=''
                    className='max-w-none object-cover bg-gray-50 rounded-2xl w-[37rem] aspect-[7/5]'
                  />
                </div>
                <div className='contents lg:flex lg:ml-auto lg:w-[37rem] lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:items-start lg:justify-end'>
                  <div className='flex flex-none order-first w-64 justify-end self-end lg:w-auto'>
                    <img
                      src='https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                      alt=''
                      className='flex-none max-w-none object-cover bg-gray-50 rounded-2xl w-[24rem] aspect-[4/3]'
                    />
                  </div>
                  <div className='flex flex-auto w-96 justify-end lg:flex-none lg:w-auto'>
                    <img
                      src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80'
                      alt=''
                      className='flex-none max-w-none object-cover bg-gray-50 rounded-2xl w-[37rem] aspect-[7/5]'
                    />
                  </div>
                  <div className='hidden sm:flex-auto sm:w-0 sm:block lg:flex-none lg:w-auto'>
                    <img
                      src='https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                      alt=''
                      className='max-w-none object-cover bg-gray-50 rounded-2xl w-[24rem] aspect-[4/3]'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='font-bold tracking-tight text-3xl text-gray-900 sm:text-4xl'>
              We approach the workplace as something that adds to our lives and adds value to world.
            </h2>
            <p className='mt-6 text-base text-gray-600 leading-7'>
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
              placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.
            </p>
          </div>
          <div className='flex flex-col mx-auto mt-16 max-w-2xl gap-8 lg:flex-row lg:max-w-none lg:mx-0 lg:mt-20 lg:items-end'>
            <div className='flex flex-col-reverse bg-gray-50 rounded-2xl p-8 gap-x-16 gap-y-8 justify-between sm:flex-row-reverse sm:max-w-md sm:w-3/4 sm:items-end lg:flex-none lg:flex-col lg:max-w-none lg:w-72 lg:items-start'>
              <p className='flex-none font-bold tracking-tight text-3xl text-gray-900'>250k</p>
              <div className='sm:w-80 sm:shrink lg:flex-none lg:w-auto'>
                <p className='font-semibold text-lg tracking-tight text-gray-900'>
                  Users on the platform
                </p>
                <p className='mt-2 text-base text-gray-600 leading-7'>
                  Vel labore deleniti veniam consequuntur sunt nobis.
                </p>
              </div>
            </div>
            <div className='flex flex-col-reverse bg-gray-900 rounded-2xl p-8 gap-y-8 gap-x-16 justify-between sm:flex-row-reverse sm:items-end lg:flex-auto lg:flex-col lg:max-w-sm lg:w-full lg:gap-y-44 lg:items-start'>
              <p className='flex-none font-bold text-white tracking-tight text-3xl'>$8.9 billion</p>
              <div className='sm:w-80 sm:shrink lg:flex-none lg:w-auto'>
                <p className='font-semibold text-lg text-white tracking-tight'>
                  We’re proud that our customers have made over $8 billion in total revenue.
                </p>
                <p className='mt-2 text-base text-gray-400 leading-7'>
                  Eu duis porta aliquam ornare. Elementum eget magna egestas.
                </p>
              </div>
            </div>
            <div className='flex flex-col-reverse bg-indigo-600 rounded-2xl p-8 gap-y-8 gap-x-16 justify-between sm:flex-row-reverse sm:max-w-xl sm:w-11/12 sm:items-end lg:flex-auto lg:flex-col lg:max-w-none lg:w-full lg:gap-y-28 lg:items-start'>
              <p className='flex-none font-bold text-white tracking-tight text-3xl'>401,093</p>
              <div className='sm:w-80 sm:shrink lg:flex-none lg:w-auto'>
                <p className='font-semibold text-lg text-white tracking-tight'>
                  Transactions this year
                </p>
                <p className='mt-2 text-base text-indigo-200 leading-7'>
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam
                  ornare.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='flex flex-col mx-auto max-w-2xl gap-16 items-end justify-between lg:flex-row lg:max-w-none lg:mx-0'>
            <div className='w-full lg:flex-auto lg:max-w-lg'>
              <h2 className='font-bold tracking-tight text-3xl text-gray-900 sm:text-4xl'>
                We’re always looking for awesome people to join us
              </h2>
              <p className='mt-6 text-xl text-gray-600 leading-8'>
                Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
                placerat nam arcu. Cras purus nibh cursus sit eu in id.
              </p>
              <img
                src='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80'
                alt=''
                className='object-cover bg-gray-50 rounded-2xl mt-16 w-full aspect-[6/5] lg:h-[34.5rem] lg:aspect-auto'
              />
            </div>
            <div className='w-full lg:flex-auto lg:max-w-xl'>
              <h3 className='sr-only'>Job openings</h3>
              <ul className='divide-y divide-gray-100 -my-8'>
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className='py-8'>
                    <dl className='flex flex-wrap gap-x-3 relative'>
                      <dt className='sr-only'>Role</dt>
                      <dd className='flex-none font-semibold text-lg tracking-tight w-full text-gray-900'>
                        <a href={opening.href}>
                          {opening.role}
                          <span className='inset-0 absolute' aria-hidden='true' />
                        </a>
                      </dd>
                      <dt className='sr-only'>Description</dt>
                      <dd className='flex-none mt-2 text-base w-full text-gray-600 leading-7'>
                        {opening.description}
                      </dd>
                      <dt className='sr-only'>Salary</dt>
                      <dd className='font-semibold mt-4 text-base text-gray-900 leading-7'>
                        {opening.salary}
                      </dd>
                      <dt className='sr-only'>Location</dt>
                      <dd className='flex mt-4 text-base text-gray-500 leading-7 gap-x-3 items-center'>
                        <svg
                          viewBox='0 0 2 2'
                          className='flex-none h-0.5 fill-gray-300 w-0.5'
                          aria-hidden='true'
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className='border-t flex border-gray-100 mt-8 pt-8'>
                <a
                  href='#'
                  className='font-semibold text-sm text-indigo-600 leading-6 hover:text-indigo-500'
                >
                  View all openings <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='mt-32 sm:mt-40' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 lg:px-8'>
          <div className='border-t border-gray-900/10 pt-20 xl:grid xl:gap-8 xl:grid-cols-3'>
            <div className='grid gap-8 grid-cols-2 xl:col-span-2'>
              <div className='md:grid md:gap-8 md:grid-cols-2'>
                <div>
                  <h3 className='font-semibold text-sm text-gray-900 leading-6'>Solutions</h3>
                  <ul role='list' className='space-y-4 mt-6'>
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm text-gray-600 leading-6 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='font-semibold text-sm text-gray-900 leading-6'>Support</h3>
                  <ul role='list' className='space-y-4 mt-6'>
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm text-gray-600 leading-6 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:gap-8 md:grid-cols-2'>
                <div>
                  <h3 className='font-semibold text-sm text-gray-900 leading-6'>Company</h3>
                  <ul role='list' className='space-y-4 mt-6'>
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm text-gray-600 leading-6 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='font-semibold text-sm text-gray-900 leading-6'>Legal</h3>
                  <ul role='list' className='space-y-4 mt-6'>
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm text-gray-600 leading-6 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='mt-10 xl:mt-0'>
              <h3 className='font-semibold text-sm text-gray-900 leading-6'>
                Subscribe to our newsletter
              </h3>
              <p className='mt-2 text-sm text-gray-600 leading-6'>
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className='mt-6 sm:flex sm:max-w-md'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email-address'
                  id='email-address'
                  autoComplete='email'
                  required
                  className='bg-white rounded-md border-0 shadow-sm ring-inset text-base w-full min-w-0 py-1.5 px-3 ring-1 ring-gray-300 text-gray-900 appearance-none placeholder:text-gray-400 sm:text-sm sm:leading-6 sm:w-64 xl:w-full focus:ring-inset focus:ring-2 focus:ring-indigo-600'
                  placeholder='Enter your email'
                />
                <div className='mt-4 sm:flex-shrink-0 sm:mt-0 sm:ml-4'>
                  <button
                    type='submit'
                    className='rounded-md flex font-semibold bg-indigo-600 shadow-sm text-sm text-white w-full py-2 px-3 items-center justify-center hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='border-t border-gray-900/10 mt-16 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
            <div className='flex space-x-6 md:order-2'>
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
            <p className='mt-8 text-xs text-gray-500 leading-5 md:order-1 md:mt-0'>
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
