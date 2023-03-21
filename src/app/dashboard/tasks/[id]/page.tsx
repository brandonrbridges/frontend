// Next
import Image from 'next/image'

// Authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import { Panel, TaskTimeline, TaskUpdate, TaskUpdateForm, TenantCard } from '@/components/Dashboard'

// Icons
import { IconPhoto } from '@tabler/icons-react'

// Modules
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export async function getData(id: string, user_id: string) {
  const author = await fetcher.GET(`/users/${user_id}`)

  const data = await fetcher.GET(`/tasks/${id}`)
  const landlord = await fetcher.GET(`/users/${data.landlord_id}`)
  const messages = await fetcher.GET(`/tasks/${id}/messages`)
  const property = await fetcher.GET(`/properties/${data.property_id}`)
  const tenant = await fetcher.GET(`/users/${property.tenant_id}`)

  return { data, author, landlord, messages, property, tenant }
}

export default async function Page({ params: { id } }) {
  const { user } = await getServerSession(authOptions)
  const { data: task, author, landlord, messages, property, tenant } = await getData(id, user._id)

  return (
    <>
      <div className='gap-6 grid grid-cols-5 items-start'>
        <div className='col-span-3'>
          <Panel>
            <div className='flex items-center space-x-4'>
              {task.status !== 'open' && <Badge variant='info'>Open</Badge>}
              <Badge variant='primary'>{task.status}</Badge>
            </div>
            <p className='my-4'>
              {property.address.line_1}, {property.address.line_2 && property.address.line_2 + ','}{' '}
              {property.address.city}, {property.address.county} {property.address.postcode}
            </p>
            <div className='border my-4 p-4 rounded'>
              <h2 className='h4'>{task.title}</h2>
              <p className='my-2'>{task.message}</p>
              <ul
                role='list'
                className='divide-y divide-gray-200 rounded-md border border-gray-200 my-4'
              >
                <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                  <div className='flex w-0 flex-1 items-center'>
                    <IconPhoto className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                    <span className='ml-2 w-0 flex-1 truncate'>Boiler leaking (IMG_0231.PNG)</span>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                      Download
                    </a>
                  </div>
                </li>
              </ul>
              <p className='text-gray-400 text-right text-xs'>
                Submitted by {author.first_name} {author.last_name}{' '}
                {dayjs(task.created_at).fromNow()} ({dayjs(task.created_at).format('DD/MM/YYYY')})
              </p>
            </div>
            {messages?.length > 0 && (
              <>
                <p className='mb-2 text-gray-500 text-sm'>Replies to this Task</p>
                <div className='border-l-4 my-4 pl-4 space-y-4'>
                  {messages?.map((message, index) => {
                    return <TaskUpdate key={index} message={message} task={task} />
                  })}
                </div>
              </>
            )}
            <div>
              <TaskUpdateForm id={id} user={user} task={task} />
            </div>
          </Panel>
        </div>
        <div className='col-span-2 space-y-6'>
          <TenantCard user={tenant} />
          <TenantCard user={landlord} />
          <Panel>
            <TaskTimeline id={task._id} />
          </Panel>
        </div>
      </div>
    </>
  )
}
