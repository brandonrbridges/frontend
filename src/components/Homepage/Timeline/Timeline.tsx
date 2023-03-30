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

const Timeline = () => {
  return (
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
  )
}

export default Timeline
