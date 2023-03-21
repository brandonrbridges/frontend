// Helpers
import { getData } from './TaskTimeline.helpers'

// Server Components
import { TaskTimelineUpdate } from './TaskTimeline.server'

export default async function TaskTimeline({ id }: { id: string }) {
  const { timeline } = await getData(id)

  return (
    <div className='flow-root'>
      <ul role='list' className='-mb-8'>
        {timeline?.map((event, index) => (
          <TaskTimelineUpdate key={index} update={event} length={timeline.length} index={index} />
        ))}
      </ul>
    </div>
  )
}
