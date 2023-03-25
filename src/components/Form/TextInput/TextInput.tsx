import { classNames } from '@/helpers'
import React from 'react'

import { TextInputProps } from './TextInput.props'

const TextInput = React.forwardRef((props: TextInputProps, ref: any) => (
  <div ref={ref} className='w-full'>
    {props?.label && (
      <label
        htmlFor={props.name}
        className='block text-sm font-medium leading-6 mb-1 text-gray-900'
      >
        {props?.label}
      </label>
    )}
    <div>
      <input
        {...props}
        id={`form-${props.name}`}
        type={props.type || 'text'}
        autoComplete={props.autoComplete || 'off'}
        required={props.required || false}
        disabled={props.disabled || false}
        className={classNames(
          'block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6',
          (props.error && 'ring-red-500 focus:ring-red-500') || 'focus:ring-indigo-600',
          (props.disabled && 'bg-gray-100 cursor-not-allowed text-gray-800') || 'bg-white'
        )}
      />
    </div>
    {props.description && <p className='mt-2 text-xs text-gray-500'>{props.description}</p>}
  </div>
))

TextInput.displayName = 'TextInput'

export default TextInput
