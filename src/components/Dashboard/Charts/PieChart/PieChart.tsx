'use client'

// React
import { PureComponent } from 'react'

// Chart Dependencies
import { Cell, Pie, PieChart as PieLayout } from 'recharts'

export default function PieChart({ data }) {
  if (!data) return null

  if (data.length === 0) return null

  const RADIAN = Math.PI / 180

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.1
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <PieLayout height={200} width={200}>
      <Pie
        data={data}
        dataKey='value'
        innerRadius={40}
        outerRadius={80}
        paddingAngle={12}
        label={renderCustomizedLabel}
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} />
        ))}
      </Pie>
    </PieLayout>
  )
}
