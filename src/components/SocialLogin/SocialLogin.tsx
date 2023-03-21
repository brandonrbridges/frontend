import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
  IconQuestionCircle,
} from '@tabler/icons-react'

interface SocialLoginProps {
  provider: 'twitter' | 'facebook' | 'github'
}

const SocialLogin = (props: SocialLoginProps): React.ReactElement => {
  let name, icon

  switch (props.provider) {
    case 'twitter':
      name = 'Twitter'
      icon = <IconBrandTwitter />
      break
    case 'facebook':
      name = 'Facebook'
      icon = <IconBrandFacebook />
      break
    case 'github':
      name = 'Github'
      icon = <IconBrandGithub />
      break
    default:
      name = 'Unknown Provider'
      icon = <IconQuestionCircle />
  }

  return (
    <div>
      <a
        href='#'
        className='inline-flex w-full justify-center rounded-md bg-white py-2 px-4 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
      >
        <span className='sr-only'>Sign in with {name}</span>
        {icon}
      </a>
    </div>
  )
}

export default SocialLogin
