import { StatProps } from './Stats.props'

export const StatWidget = ({ stat }: { stat: StatProps }) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='p-5'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <stat.icon className='h-6 w-6 text-gray-400' aria-hidden='true' />
          </div>
          <div className='ml-5 w-0 flex-1'>
            <dl>
              <dt className='truncate text-sm font-medium text-gray-500'>{stat.name}</dt>
              <dd>
                <div className='text-lg font-medium text-gray-900'>
                  {stat.prefix && <span>{stat.prefix}</span>}
                  {stat.value}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {stat.href && (
        <div className='bg-gray-50 px-5 py-3'>
          <div className='text-right text-sm'>
            <a href={stat.href} className='font-medium text-cyan-700 hover:text-cyan-900'>
              View all
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
