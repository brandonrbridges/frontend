// Props
import type { StatsProps } from './Stats.props'

// Components
import { StatWidget } from './Stats.server'

export default function Stats({ statistics }: StatsProps) {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {statistics.map((stat, index) => (
        <StatWidget key={index} stat={stat} />
      ))}
    </div>
  )
}
