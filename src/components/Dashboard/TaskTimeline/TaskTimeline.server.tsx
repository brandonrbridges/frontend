// Helpers
import { classNames } from '@/helpers'

// Icons
import { IconCalendar } from '@tabler/icons-react'

export const TaskTimelineUpdate = ({ update, length, index }) => {
  return (
    <li key={index}>
      <div className='relative pb-8'>
        {index !== length - 1 ? (
          <span
            className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
            aria-hidden='true'
          />
        ) : null}
        <div className='relative flex space-x-3'>
          <div>
            <span
              className={classNames(
                // update.iconBackground,
                'bg-gray-300',
                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
              )}
            >
              <IconCalendar className='h-5 w-5 text-white' aria-hidden='true' />
            </span>
          </div>
          <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
            <div>
              <p className='text-sm text-gray-500'>{update.message}</p>
            </div>
            {update.created_at && (
              <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                {update.created_at}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
