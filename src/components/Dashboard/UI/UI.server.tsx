// Next
import Image from 'next/image'
import Link from 'next/link'

// Helpers
import { classNames } from '@/helpers'
import { generateLinks, generateUserLinks } from './UI.helpers'

// Props
import { LinkProps, UserProps } from './UI.props'

export const Avatar = ({ user }: { user: UserProps }) => {
  return (
    <Image
      className='h-8 w-8 rounded-full'
      src={user?.avatar_url}
      alt={user?.first_name + ' ' + user?.last_name + ' Avatar'}
      height='32'
      width='32'
    />
  )
}

export const Logo = () => {
  return (
    <div className='flex-shrink-0'>
      <Image
        className='h-8 w-8'
        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
        alt='Your Company'
        height='32'
        width='32'
      />
    </div>
  )
}

export const Navigation = ({
  user,
  current,
  mobile = false,
}: {
  user: UserProps
  current: string
  mobile?: boolean
}) => {
  const links: LinkProps[] = generateLinks(user)

  if (mobile) {
    return (
      <div className='space-y-1 px-2 py-3 sm:px-3'>
        {links.map((item: LinkProps, index: number) => {
          const active: boolean = item.href == current

          return (
            <Link
              key={index}
              href={item.href}
              className={classNames(
                active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={active ? 'page' : undefined}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className='hidden md:block'>
      <div className='ml-10 flex items-baseline space-x-4'>
        {links.map((item: LinkProps, index: number) => {
          const active: boolean = item.href == current

          return (
            <Link
              key={index}
              href={item.href}
              className={classNames(
                active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={active ? 'page' : undefined}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
