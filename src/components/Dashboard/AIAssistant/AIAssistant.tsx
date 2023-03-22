'use client'

// Types
import type { PromptProps } from './AIAssistant.props'

// React
import { useState } from 'react'

// Helpers
import { fetcher } from '@/helpers'

// Client Components
import { PromptForm } from './AIAssistant.client'

// Components
import { Label, TextInput } from '@/components/Form'
import Panel from '@/components/Dashboard/Panel'

// Modules
import { Controller, useForm } from 'react-hook-form'
import { TypeAnimation } from 'react-type-animation'

const AIAssistant = ({ user }) => {
  const [response, setResponse] = useState<string[]>([])

  const { control, handleSubmit } = useForm({
    defaultValues: {
      prompt: '',
    },
  })

  const submit = async (data: PromptProps) => {
    const { prompt } = data

    if (!user.roles.includes('admin'))
      return setResponse(['This feature is going to be enabled soon.'])

    const response: any = await fetcher.POST('/ai', {
      prompt,
      user_id: user._id,
    })

    setResponse(response)
  }

  return (
    <>
      <Panel>
        <PromptForm onSubmit={handleSubmit(submit)} control={control} />
      </Panel>

      {response.length > 0 && (
        <>
          <Panel>
            <Label htmlFor='response'>Our AI says:</Label>
            {response.map((item, index) => (
              <>
                <TypeAnimation key={index} sequence={[item]} cursor={true} speed={75} />
              </>
            ))}
          </Panel>
        </>
      )}
    </>
  )
}

export default AIAssistant
