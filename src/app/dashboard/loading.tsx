import { Panel } from '@/components/Dashboard'
import Skeleton from '@/components/Dashboard/Skeleton'

export default function Loading() {
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <Skeleton />
      <Skeleton className='col-span-2' />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  )
}
