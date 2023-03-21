// Helpers
import { handleStatus } from './TaskList.helpers'

// Components
import Badge from '@/components/Badge'

export const TaskStatus = ({ status }: { status: string }) => {
  const { text, variant } = handleStatus(status)

  return <Badge variant={variant}>{text}</Badge>
}
