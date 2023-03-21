import React from 'react'

interface TextInputProps {
  label?: string
  name: string
  required?: boolean
  type?: string
}

const TextInput = React.forwardRef((props: TextInputProps, ref: any) => (
  <div ref={ref}>
    {props?.label && (
      <label htmlFor={props.name} className='block text-sm font-medium leading-6 text-gray-900'>
        {props?.label}
      </label>
    )}
    <div className='mt-2'>
      <input
        {...props}
        id={`form-${props.name}`}
        type={props.type || 'text'}
        autoComplete='email'
        required={props.required || false}
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
    </div>
  </div>
))

TextInput.displayName = 'TextInput'

export default TextInput
