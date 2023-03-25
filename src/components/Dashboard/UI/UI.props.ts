export interface UserProps {
  email: string
  first_name: string
  last_name: string
  avatar_url: string
  roles: string[]
}

export interface LinkProps {
  name: string
  href: string | null
  current?: boolean
}
