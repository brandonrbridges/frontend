'use client'

// Types
import type { DocumentUploaderProps } from './DocumentUploader.props'

// React
import { useRef, useState } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Modules
import { toast } from 'react-toastify'

// Icons
import { IconFileUpload } from '@tabler/icons-react'

const DocumentUploader = ({ id, user_id }: DocumentUploaderProps) => {
  const router = useRouter()

  const documentRef = useRef<HTMLInputElement | null>(null)

  const [uploading, setUploading] = useState<Boolean>(false)

  const handleUpload = async (file: File) => {
    setUploading(true)

    const form = new FormData()
    form.append('file', file)
    form.append('property_id', id)
    form.append('user_id', user_id)

    toast
      .promise(fetcher.UPLOAD(`/documents/upload`, form), {
        pending: 'Uploading document...',
        success: 'Document uploaded successfully!',
        error: 'Something went wrong. Please try again.',
      })
      .finally(() => {
        setUploading(false)

        router.refresh()
      })
  }

  return (
    <button
      type='button'
      className='border-dashed rounded-lg flex flex-col border-2 border-gray-300 text-center w-full p-12 relative items-center justify-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      onClick={() => documentRef.current.click()}
    >
      <input
        type='file'
        className='hidden'
        ref={documentRef}
        onChange={({ target: { files } }) => files?.length && handleUpload(files[0])}
      />

      {!uploading ? (
        <IconFileUpload />
      ) : (
        <div className='rounded-full border-b-2 border-gray-900 h-5 animate-spin w-5'></div>
      )}

      <span className='mt-2 text-sm text-gray-900 block'>Upload a Document</span>
    </button>
  )
}

export default DocumentUploader
