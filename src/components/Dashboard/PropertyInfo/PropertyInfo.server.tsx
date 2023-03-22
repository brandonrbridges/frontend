import { IconPaperclip } from '@tabler/icons-react'

export const Attachments = () => {
  return (
    <div className='sm:col-span-2'>
      <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
      <dd className='mt-1 text-sm text-gray-900'>
        <ul role='list' className='divide-y divide-gray-200 rounded-md border border-gray-200'>
          <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
            <div className='flex w-0 flex-1 items-center'>
              <IconPaperclip className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
              <span className='ml-2 w-0 flex-1 truncate'>resume_back_end_developer.pdf</span>
            </div>
            <div className='ml-4 flex-shrink-0'>
              <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                Download
              </a>
            </div>
          </li>
          <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
            <div className='flex w-0 flex-1 items-center'>
              <IconPaperclip className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
              <span className='ml-2 w-0 flex-1 truncate'>coverletter_back_end_developer.pdf</span>
            </div>
            <div className='ml-4 flex-shrink-0'>
              <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                Download
              </a>
            </div>
          </li>
        </ul>
      </dd>
    </div>
  )
}
