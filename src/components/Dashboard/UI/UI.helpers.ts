import { LinkProps, UserProps } from './UI.props'

export const generateLinks = (user: UserProps): LinkProps[] => {
  let links: Array<LinkProps> = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      current: true,
    },
  ]

  if (user.roles.includes('landlord')) {
    links.push(
      {
        name: 'Properties',
        href: '/dashboard/properties',
      },
      {
        name: 'Tenants',
        href: '/dashboard/tenants',
      },
      {
        name: 'Accounting',
        href: '/dashboard/accounting',
      }
    )
  }

  if (user.roles.includes('tenant')) {
    // links.push(
    //   {
    //     name: '',
    //     href: '/dashboard/',
    //   },
    // )
  }

  links.push(
    {
      name: 'Tasks',
      href: '/dashboard/tasks',
    },
    {
      name: 'AI Assistant',
      href: '/dashboard/ai-assistant',
    }
  )

  return links
}

export const generateUserLinks = (): LinkProps[] => {
  const links: LinkProps[] = [
    {
      name: 'Settings',
      href: '/dashboard/settings',
    },
    {
      name: 'Logout',
      href: '/api/auth/signout',
    },
  ]

  return links
}
