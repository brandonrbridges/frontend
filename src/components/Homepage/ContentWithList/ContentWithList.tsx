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

const ContentWithList = () => {
  return (
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
  )
}

export default ContentWithList
