// Components
import { ListItem } from './TaskFilter.client'
import { ListItemDetails } from './TaskFilter.server'

const navigation = [
  { name: 'Pending', status: 'pending', count: '5' },
  { name: 'In Progress', status: 'in_progress', count: '54' },
  { name: 'Work Booked', status: 'work_booked', count: '24' },
  { name: 'Completed', status: 'completed', count: '3' },
]

export default function TaskFilter() {
  return (
    <nav className='space-y-1' aria-label='Task Filter'>
      <ListItem item={{ name: 'All Tasks', status: '' }}>
        <ListItemDetails item={{ name: 'All Tasks' }} />
      </ListItem>

      <div className='relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-500'>Filter Options</span>
        </div>
      </div>

      {navigation.map((item, index) => (
        <ListItem item={item} key={index}>
          <ListItemDetails item={item} />
        </ListItem>
      ))}
    </nav>
  )
}
