import { IconFile } from '@tabler/icons-react'

const DocumentItem = () => {
  return (
    <button
      type='button'
      className='border rounded-lg flex flex-col border-gray-300 text-center w-full p-12 relative items-center justify-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    >
      <IconFile />
      <span className='mt-2 text-sm text-gray-900 block'>Document Name</span>
    </button>
  )
}

export default DocumentItem
