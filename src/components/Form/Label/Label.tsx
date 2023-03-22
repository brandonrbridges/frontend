import { LabelProps } from './Label.props'

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className='block text-sm font-medium leading-6 text-gray-900'>
      {children}
    </label>
  )
}
export default Label
