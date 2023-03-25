export const handleVariant = (variant: string) => {
  switch (variant) {
    case 'primary':
      return {
        background: 'bg-blue-100',
        color: 'text-blue-800',
      }
    case 'secondary':
      return {
        background: 'bg-gray-100',
        color: 'text-gray-800',
      }
    case 'success':
      return {
        background: 'bg-green-100',
        color: 'text-green-800',
      }
    case 'warning':
      return {
        background: 'bg-yellow-100',
        color: 'text-yellow-800',
      }
    case 'danger':
      return {
        background: 'bg-red-100',
        color: 'text-red-800',
      }
    case 'info':
      return {
        background: 'bg-purple-100',
        color: 'text-purple-800',
      }
    case 'light':
      return {
        background: 'bg-gray-100',
        color: 'text-gray-800',
      }
    case 'dark':
      return {
        background: 'bg-gray-800',
        color: 'text-gray-100',
      }
    case 'occupied':
      return {
        background: 'bg-emerald-100',
        color: 'text-emerald-800',
      }
    case 'private':
      return {
        background: 'bg-gray-100',
        color: 'text-gray-800',
      }
    case 'setup':
      return {
        background: 'bg-indigo-100',
        color: 'text-indigo-800',
      }
    default:
      return {
        background: 'bg-gray-200',
        color: 'text-gray-600',
      }
  }
}
