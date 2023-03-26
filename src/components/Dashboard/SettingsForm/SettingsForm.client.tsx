'use client'

// React
import { FormEvent, useRef, useState } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'
import Image from 'next/image'
import { toast } from 'react-toastify'

const HOST = process.env.NEXT_PUBLIC_API_URL

export const PhotoUpload = ({ user }) => {
  const router = useRouter()

  const photoRef = useRef<HTMLInputElement | null>(null)

  const [uploading, setUploading] = useState<Boolean>(false)

  const handlePhotoUpload = async (file: File) => {
    setUploading(true)

    const form = new FormData()
    form.append('file', file)

    toast
      .promise(fetcher.UPLOAD(`/users/${user._id}/upload-avatar`, form), {
        pending: 'Uploading photo...',
        success: 'Photo uploaded successfully!',
        error: 'Something went wrong. Please try again.',
      })
      .finally(() => {
        setUploading(false)

        router.refresh()
      })
  }

  return (
    <div className='flex space-x-4 items-center'>
      <div className='rounded-full bg-gray-300 h-20 w-20 relative'>
        {user.avatar_url && (
          <Image
            src={user.avatar_url}
            alt={`${user.first_name} ${user.last_name} Avatar`}
            fill
            className='rounded-full object-cover'
          />
        )}
      </div>
      <input
        type='file'
        className='hidden'
        ref={photoRef}
        onChange={({ target: { files } }) => files?.length && handlePhotoUpload(files[0])}
      />

      {!uploading ? (
        <Button onClick={() => photoRef && photoRef.current.click()}>Upload a Photo</Button>
      ) : (
        <div className='flex space-x-2 items-center'>
          <div className='rounded-full border-b-2 border-gray-900 h-5 animate-spin w-5'></div>
          <p>Uploading...</p>
        </div>
      )}
    </div>
  )
}
