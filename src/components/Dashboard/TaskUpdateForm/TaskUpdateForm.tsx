'use client'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'
import { TextInput, DropdownInput } from '@/components/Form'

// Modules
import { Controller, useForm } from 'react-hook-form'

const TaskUpdateForm = ({ id, user }: { id: string; user: any }) => {
  const router = useRouter()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      message: '',
      status: '',
    },
  })

  const submit = async (data: any) => {
    await fetcher.POST(`/tasks/${id}/new-message`, {
      content: data.message,
      user_id: user._id,
      status: data.status ?? null,
    })

    router.refresh()
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='bg-gray-50 gap-4 grid grid-cols-3 items-end p-4'
    >
      <div className='col-span-2'>
        <Controller
          name='message'
          control={control}
          render={({ field }) => <TextInput label='Message' {...field} />}
        />
      </div>

      <Controller
        name='status'
        control={control}
        render={({ field }) => (
          <DropdownInput
            {...field}
            label='Status Update'
            options={[
              { label: 'Open', value: 'open' },
              { label: 'Work Booked', value: 'work_booked' },
              { label: 'In Progress', value: 'in_progress' },
              { label: 'Tenant Review', value: 'tenant_review' },
              { label: 'Complete', value: 'complete' },
            ]}
          />
        )}
      />
      <div className='col-span-full flex'>
        <Button type='submit' className='ml-auto'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default TaskUpdateForm
