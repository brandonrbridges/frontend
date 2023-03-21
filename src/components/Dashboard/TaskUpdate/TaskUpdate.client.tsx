'use client'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Icons
import { IconTrash } from '@tabler/icons-react'

export const TaskUpdateActions = ({ message, task }) => {
  const router = useRouter()

  const handleDelete = async () => {
    await fetcher.PATCH(`/tasks/${task._id}/delete-message`, {
      message_id: message._id,
    })

    console.log('refreshing')

    router.refresh()
  }

  return (
    <span className='absolute hidden isolate group-hover:inline-flex right-4 rounded-md top-4 shadow-sm'>
      <button
        type='button'
        className='relative inline-flex items-center rounded bg-white p-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10'
        onClick={() => handleDelete()}
      >
        <span className='sr-only'>Previous</span>
        <IconTrash className='h-4 w-4' aria-hidden='true' />
      </button>
    </span>
  )
}
