// Helpers
import { getData } from './TaskTimeline.helpers'

// Server Components
import { TaskTimelineUpdate } from './TaskTimeline.server'

export default async function TaskTimeline({ data: timeline }: { data: object[] }) {
  return (
    <div className='flow-root'>
      <ul role='list' className=''>
        {timeline.length > 0 ? (
          timeline?.map((event, index) => (
            <TaskTimelineUpdate key={index} update={event} length={timeline.length} index={index} />
          ))
        ) : (
          <TaskTimelineUpdate
            update={{
              message: 'No updates yet',
            }}
            length={0}
            index={0}
          />
        )}
      </ul>
    </div>
  )
}
