'use client'

// React
import { FormEvent, useRef, useState } from 'react'

// Components
import Button from '@/components/Button'
import { fetcher } from '@/helpers'

const HOST = process.env.NEXT_PUBLIC_API_URL

export const PhotoUpload = ({ user }) => {
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

    setTimeout(() => {
      setUploading(false)
    }, 1000)
  }

  return (
    <div className='sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
      <label htmlFor='photo' className='block text-sm font-medium leading-6 text-gray-900'>
        Photo
      </label>
      <div className='mt-2 sm:col-span-2 sm:mt-0'>
        <div className='flex items-center space-x-4'>
          <div className='bg-gray-300 h-10 relative rounded-full w-10'>{/* AVATAR HERE */}</div>
          <input
            type='file'
            className='hidden ml-5 rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            ref={photoRef}
            onChange={({ target: { files } }) => files?.length && handlePhotoUpload(files[0])}
          />

          {!uploading ? (
            <Button onClick={() => photoRef && photoRef.current.click()}>Upload a Photo</Button>
          ) : (
            <div className='flex items-center space-x-2'>
              <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900'></div>
              <p>Uploading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
