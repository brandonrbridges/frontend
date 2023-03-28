// Headless UI
import { Disclosure } from '@headlessui/react'

// Icons
import { IconMenu, IconX } from '@tabler/icons-react'

export const MobileMenuToggle = ({ open }: { open: boolean }) => {
  return (
    <Disclosure.Button className='rounded-md bg-gray-800 p-2 text-gray-400 inline-flex items-center justify-center hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800'>
      <span className='sr-only'>Open main menu</span>
      {open ? (
        <IconX className='h-6 w-6 block' aria-hidden='true' />
      ) : (
        <IconMenu className='h-6 w-6 block' aria-hidden='true' />
      )}
    </Disclosure.Button>
  )
}
