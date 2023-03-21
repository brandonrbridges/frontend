import { TablerIconsProps } from '@tabler/icons-react'

export interface StatProps {
  name: string
  value: number
  prefix?: string
  suffix?: string
  href?: string
  icon?: any
}

export interface StatsProps {
  statistics: StatProps[]
}
