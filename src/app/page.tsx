import { IconBarrierBlock } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen flex flex-col items-center justify-center space-y-4 w-full'>
      <IconBarrierBlock size={48} />
      <div className='text-center'>
        <h1 className='font-bold tracking-tight'>Hello Home</h1>
        <p className='font-medium'>We are currently under development</p>
      </div>
      <Link href='/auth/login' className='hover:text-yellow-500 transition-colors'>
        Try the login page?
      </Link>
    </main>
  )
}
