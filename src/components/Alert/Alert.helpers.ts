// Props
import { AlertProps } from './Alert.props'

export const handleType = (type: AlertProps['type']) => {
  switch (type) {
    case 'success':
      return {
        background: 'bg-green-100',
        color: 'text-green-800',
      }
    case 'danger':
      return {
        background: 'bg-red-100',
        color: 'text-red-800',
      }
    case 'warning':
      return {
        background: 'bg-yellow-100',
        color: 'text-yellow-800',
      }
    default:
      return {
        background: 'bg-blue-100',
        color: 'text-blue-800',
      }
  }
}
