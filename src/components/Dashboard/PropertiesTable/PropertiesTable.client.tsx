'use client'

// React
import { useState } from 'react'

// Components
import Modal from '@/components/Modal'

export const AddPropertyButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <button
        type='button'
        className='block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={() => setOpen(true)}
      >
        Add Property
      </button>

      <Modal open={open} toggle={(value) => setOpen(value)} />
    </div>
  )
}
