export interface ChartData {
  label?: string
  value?: number
  backgroundColor?: string
  borderColor?: string
  weight?: number
}

export interface PieChartProps {
  data: ChartData[]
}
