import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
  IconQuestionMark,
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
      icon = <IconQuestionMark />
  }

  return (
    <div>
      <a
        href='#'
        className='bg-white rounded-md shadow-sm ring-inset w-full py-2 px-4 ring-1 ring-gray-300 text-gray-500 inline-flex justify-center hover:bg-gray-50 focus:outline-offset-0'
      >
        <span className='sr-only'>Sign in with {name}</span>
        {icon}
      </a>
    </div>
  )
}

export default SocialLogin
