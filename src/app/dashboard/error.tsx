'use client'

import { Panel } from '@/components/Dashboard'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Panel>
      <h1>Something went wrong</h1>
      <code className='block'>{error.message}</code>
      <button onClick={reset}>Try again</button>
    </Panel>
  )
}
