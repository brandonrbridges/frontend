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
      <div className='sm:flex sm:items-center mb-8'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>Tasks</h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the tasks for the properties that you manage.
          </p>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>{/* <AddPropertyButton /> */}</div>
      </div>
      <ul role='list' className='divide-y divide-gray-200'>
        {tasks.length === 0 && <li className='text-gray-500 text-sm'>There are no open tasks</li>}

        {tasks.map((task) => (
          <li key={task._id}>
            <Link href={'/dashboard/tasks/' + task._id} className='block hover:bg-gray-50'>
              <div className='flex items-center px-2 py-4'>
                <div className='flex min-w-0 flex-1 items-center'>
                  <div className='flex-shrink-0'>
                    <Image
                      className='h-12 w-12 rounded-full'
                      src={task.user.avatar_url}
                      alt={`${task.user.first_name} ${task.user.last_name} Avatar`}
                      height='32'
                      width='32'
                    />
                  </div>
                  <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                    <div>
                      <p className='truncate text-sm font-medium text-indigo-600'>
                        {task.user.first_name} {task.user.last_name}
                      </p>
                      <p className='mt-2 flex items-center text-sm text-gray-500'>
                        <IconHome
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
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
                  <IconChevronRight className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
