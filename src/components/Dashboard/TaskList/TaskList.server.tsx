// Next
import Link from 'next/link'

// Helpers
import { handleStatus } from './TaskList.helpers'

// Components
import Badge from '@/components/Badge'
import Button from '@/components/Button'

export const AddButton = () => {
  return (
    <Link href='dashboard/tasks/create'>
      <Button>Add Task</Button>
    </Link>
  )
}

export const TaskStatus = ({ status }: { status: string }) => {
  const { text, variant } = handleStatus(status)

  return <Badge variant={variant}>{text}</Badge>
}
