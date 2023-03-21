// Helpers
import { handleVariant } from './Badge.helpers'

export default function Badge({
  children,
  className,
  variant,
}: {
  children: React.ReactNode
  className?: string
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}) {
  const { background, color } = handleVariant(variant)
  children = children && children.replaceAll('_', ' ').toUpperCase()

  return (
    <span
      className={`badge inline-flex items-center rounded-full ${background} px-2.5 pb-0.5 pt-1 text-xs font-medium ${color} ${className}`}
    >
      {children || 'No status'}
    </span>
  )
}
