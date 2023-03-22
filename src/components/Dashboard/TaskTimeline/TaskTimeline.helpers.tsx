// Types
import type { TimelineEvent } from './TaskTimeline.props'

// Helpers
import { fetcher } from '@/helpers'

export async function getData(id: string) {
  const timeline = await fetcher.GET(`/tasks/${id}/update-history`)

  if (!timeline) return { timeline: [] }

  return { timeline }
}
