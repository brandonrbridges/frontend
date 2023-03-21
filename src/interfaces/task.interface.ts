export interface TaskUpdate {
  _id?: string
  content: string
  user_id: string
  created_at: Date
}

export interface TaskUpdateHistory {
  _id?: string
  message: string
  status?: string | null
  user_id?: string
  created_at?: Date
}
