import dayjs from 'dayjs'

export default function formatDate(date: Date): string {
  return dayjs(date).format('DD/MM/YYYY')
}
