'use client'

// Components
import Button from '@/components/Button'
import { TextInput } from '@/components/Form'

// AIAssistant Dependencies
import { PromptFormProps } from './AIAssistant.props'

// Modules
import { Controller } from 'react-hook-form'

export const PromptForm = ({ control, onSubmit }: PromptFormProps) => {
  return (
    <form onSubmit={onSubmit} className='flex items-end space-x-4'>
      <Controller
        name='prompt'
        control={control}
        render={({ field }) => <TextInput label='Ask our AI to help' {...field} />}
      />
      <Button type='submit'>Ask AI</Button>
    </form>
  )
}
