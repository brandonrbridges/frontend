// Props
import { AlertProps } from './Alert.props'

// Icons
import { IconExclamationCircle } from '@tabler/icons-react'
import { handleType } from './Alert.helpers'

export default function Alert(props: AlertProps) {
  const { background, color } = handleType(props.type)

  return (
    <div className={`${background} rounded-md p-4`}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <IconExclamationCircle className={`${color} h-5 w-5`} aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <h3 className={`${color} text-sm font-medium`}>{props.title}</h3>
          {props.description && (
            <div className={`${color} mt-2 text-sm`}>
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
