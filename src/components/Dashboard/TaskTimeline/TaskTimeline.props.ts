export interface TimelineEvent {
  message: string
  created_at: string
  icon?: any
  iconBackground?: string
}

export interface TaskTimelineUpdateProps {
  _id?: string
  message: string
  status?: string | null
  user_id?: string
  created_at?: Date
}
