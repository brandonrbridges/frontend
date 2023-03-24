'use client'

// React
import { FormEvent, useRef, useState } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'

const HOST = process.env.NEXT_PUBLIC_API_URL

export const PhotoUpload = ({ user }) => {
  const router = useRouter()

  const photoRef = useRef<HTMLInputElement | null>(null)

  const [uploading, setUploading] = useState<Boolean>(false)

  const handlePhotoUpload = async (file: File) => {
    setUploading(true)

    try {
      const form = new FormData()
      form.append('file', file)

      const response = await fetch(HOST + '/users/' + user._id + '/upload-avatar', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
        body: form,
      })

      const data = await response.json()

      console.log({ file, data })
    } catch (error) {
      console.error(error)
    }

    router.refresh()
  }

  return (
    <div className='sm:border-t sm:border-gray-200 sm:grid sm:pt-5 sm:gap-4 sm:grid-cols-3 sm:items-center'>
      <label htmlFor='photo' className='font-medium text-sm text-gray-900 leading-6 block'>
        Photo
      </label>
      <div className='mt-2 sm:mt-0 sm:col-span-2'>
        <div className='flex space-x-4 items-center'>
          <div className='rounded-full bg-gray-300 h-10 w-10 relative'>{/* AVATAR HERE */}</div>
          <input
            type='file'
            className='bg-white rounded-md font-semibold shadow-sm ring-inset text-sm ml-5 py-1.5 px-2.5 ring-1 ring-gray-300 text-gray-900 hidden hover:bg-gray-50'
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
      </div>
    </div>
  )
}
