export const handleStatus = (status: string) => {
  switch (status) {
    case 'pending':
      return {
        text: 'Pending',
        variant: 'light',
      }
    case 'work_booked':
      return {
        text: 'Work Booked',
        variant: 'dark',
      }
    case 'in_progress':
      return {
        text: 'In Progress',
        variant: 'warning',
      }
    case 'on_hold':
      return {
        text: 'On Hold',
        variant: 'danger',
      }
    case 'completed':
      return {
        text: 'Completed',
        variant: 'success',
      }
    default:
      return {
        text: 'No status',
        variant: 'light',
      }
  }
}
