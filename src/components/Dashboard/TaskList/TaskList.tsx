// Next
import Image from 'next/image'
import Link from 'next/link'

// Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher, formatDate } from '@/helpers'

// Server Components
// import Badge from '@/components/Badge'
import { TaskStatus } from './TaskList.server'

// Icons
import { IconChevronRight, IconHome } from '@tabler/icons-react'

async function getData() {
  const {
    user: { _id },
  } = await getServerSession(authOptions)

  const data = (await fetcher.GET(`/tasks`, {
    user_id: _id,
  })) as []

  return { data }
}

export default async function TaskList({ tasks }: { tasks: any }) {
  const { data } = await getData()

  return (
    <>
      <div className='mb-8 sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='font-semibold text-base text-gray-900 leading-6'>Tasks</h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the tasks for the properties that you manage.
          </p>
        </div>
        <div className='mt-4 sm:flex-none sm:mt-0 sm:ml-16'>{/* <AddPropertyButton /> */}</div>
      </div>
      <ul role='list' className='divide-y divide-gray-200'>
        {tasks.length === 0 && <li className='text-sm text-gray-500'>There are no open tasks</li>}

        {tasks.map((task) => (
          <li key={task._id}>
            <Link
              href={'dashboard/tasks/' + task._id}
              as={'dashboard/tasks/' + task._id}
              className='block hover:bg-gray-50'
            >
              <div className='flex py-4 px-2 items-center'>
                <div className='flex flex-1 min-w-0 items-center'>
                  <div className='flex-shrink-0'>
                    <Image
                      src={task.user.avatar_url}
                      alt={`${task.user.first_name} ${task.user.last_name} Avatar`}
                      height='32'
                      width='32'
                      className='object-cover rounded-full h-12 w-12'
                    />
                  </div>
                  <div className='flex-1 min-w-0 px-4 md:grid md:gap-4 md:grid-cols-2'>
                    <div>
                      <p className='font-medium text-sm text-indigo-600 truncate'>
                        {task.user.first_name} {task.user.last_name}
                      </p>
                      <p className='flex mt-2 text-sm text-gray-500 items-center'>
                        <IconHome
                          className='flex-shrink-0 h-5 mr-1.5 text-gray-400 w-5'
                          aria-hidden='true'
                        />
                        <span className='truncate'>
                          {task.property.address.line_1 + ' ' + task.property.address.postcode}
                        </span>
                      </p>
                    </div>
                    <div className='hidden md:block'>
                      <div className='space-y-2'>
                        <p className='text-xs text-gray-700'>
                          Created {formatDate(task.created_at)}
                        </p>
                        <TaskStatus status={task.status} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <IconChevronRight className='h-5 text-gray-400 w-5' aria-hidden='true' />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
