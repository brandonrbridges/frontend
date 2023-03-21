import { IconCircleCheck } from '@tabler/icons-react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      type={props.type || 'button'}
      className={`inline-flex items-center justify-center gap-x-1.5 rounded-md bg-indigo-600 py-2 px-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${props?.className}`}
    >
      {/* <IconCircleCheck className='-ml-0.5 h-5 w-5' aria-hidden='true' /> */}
      {props.children}
    </button>
  )
}

export default Button
