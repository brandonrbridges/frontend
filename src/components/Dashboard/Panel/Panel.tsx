import { CSSProperties } from 'react'

export default function Panel({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`overflow-hidden self-start rounded-lg bg-white shadow ${className}`}
      style={style}
    >
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  )
}
