import React from 'react'

interface DropdownInputProps {
  label?: string
  name: string
  required?: boolean
  options: Array<{ label: string; value: string }>
  error?: string
}

const DropdownInput = React.forwardRef((props: DropdownInputProps, ref: any) => (
  <div ref={ref} className='w-full'>
    {props?.label && (
      <label htmlFor={props.name} className='block text-sm font-medium leading-6 text-gray-900'>
        {props?.label}
      </label>
    )}
    <div className='mt-2 w-full'>
      <select
        {...props}
        id={`form-${props.name}`}
        className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full'
      >
        <option value='' disabled>
          Select an option
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
))

DropdownInput.displayName = 'DropdownInput'

export default DropdownInput
