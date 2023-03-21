// Next
import Image from 'next/image'

// Auth
import { DefaultSession } from 'next-auth'

// Icons
import { IconAt, IconPhone } from '@tabler/icons-react'
import Badge from '@/components/Badge'

export default function TenantCard({ user }: { user: DefaultSession['user'] }) {
  if (!user) return null

  return (
    <div key={user._id} className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'>
      <div className='flex w-full items-center justify-between space-x-6 p-6'>
        <div className='flex-1 relative truncate'>
          {user?.roles[0] && (
            <Badge variant='primary' className='absolute top-0 right-0'>
              {user?.roles[0]}
            </Badge>
          )}
          <div className='flex items-center space-x-3'>
            <h3 className='truncate text-sm font-medium text-gray-900'>
              {user.first_name} {user.last_name}
            </h3>
          </div>
          <p className='mt-1 truncate text-sm text-gray-500'>{user.email}</p>
        </div>
        <div className='h-10 w-10 flex-shrink-0 relative rounded-full bg-gray-300'>
          {user.avatar_url && (
            <Image
              className='h-10 w-10 rounded-full'
              src={user.avatar_url}
              alt={`${user.first_name} ${user.last_name} Avatar`}
              height='32'
              width='32'
            />
          )}
        </div>
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <a
              href={`mailto:${user.email}`}
              className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
            >
              <IconAt className='h-5 w-5 text-gray-400' aria-hidden='true' />
              Email
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <a
              href={`tel:${user?.phone || ''}`}
              className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
            >
              <IconPhone className='h-5 w-5 text-gray-400' aria-hidden='true' />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
