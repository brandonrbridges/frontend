// Next
import Image from 'next/image'

// Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Client Components
import { TaskUpdateActions } from './TaskUpdate.client'

// Modules
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const TaskUpdate = async ({ message, task }) => {
  const { user } = await getServerSession(authOptions)

  return (
    <div className='border group p-4 relative rounded'>
      {user.roles.includes('admin') && <TaskUpdateActions message={message} task={task} />}

      <p>{message.content}</p>
      <div className='flex items-center justify-between mt-2 text-gray-500 text-sm'>
        <div className='flex items-center space-x-2'>
          <div className='bg-gray-500 h-6 relative rounded-full w-6'>
            {message.user.avatar_url && (
              <Image
                src={message.user.avatar_url}
                alt={message.user.first_name + ' ' + message.user.last_name + ' Avatar'}
                height={32}
                width={32}
                className='h-6 object-cover rounded-full w-6'
              />
            )}
          </div>
          {message.user && (
            <p className=''>{message.user.first_name + ' ' + message.user.last_name}</p>
          )}
        </div>
        <p className='text-right text-xs'>{dayjs(message.created_at).fromNow()}</p>
      </div>
    </div>
  )
}

export default TaskUpdate
