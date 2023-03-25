import { IconFileUpload } from '@tabler/icons-react'

const DocumentItem = () => {
  return (
    <button
      type='button'
      className='flex flex-col relative items-center justify-center w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    >
      <IconFileUpload />
      <span className='mt-2 block text-sm text-gray-900'>Upload a Document</span>
    </button>
  )
}

export default DocumentItem
