'use client'

// Next
import { useRouter } from 'next/navigation'

// Helpers
import { fetcher } from '@/helpers'

// Components
import Button from '@/components/Button'
import { Header, Label, Row, TextInput } from '@/components/Form'

// Client Components
import { PhotoUpload } from './SettingsForm.client'

// Modules
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SettingsForm = ({ user }: { user: any }) => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
    },
  })

  const submit = async (data: any) => {
    delete data.email

    toast
      .promise(
        fetcher.PATCH(`/users/${user._id}`, data, {
          newURL: '/api/dashboard/settings',
        }),
        {
          pending: 'Updating profile...',
          success: 'Profile updated successfully!',
          error: 'Something went wrong. Please try again.',
        }
      )
      .finally(() => router.refresh())
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='divide-y space-y-8 divide-gray-200'>
      <div className='divide-y space-y-8 divide-gray-200 sm:space-y-5'>
        <div className='space-y-6 sm:space-y-5'>
          <Header
            title='Update your Profile'
            description='Update your profile by filling in the fields below.'
          />

          <div className='space-y-6 sm:space-y-5'>
            <Row
              label={<Label htmlFor='email'>Email</Label>}
              input={
                <Controller
                  control={control}
                  name='email'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. email@example.com'
                      disabled
                      error={errors.email?.message}
                    />
                  )}
                />
              }
            />

            <Row
              label={<Label htmlFor='first_name'>First Name</Label>}
              input={
                <Controller
                  control={control}
                  name='first_name'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. John'
                      error={errors.first_name?.message}
                    />
                  )}
                />
              }
            />

            <Row
              label={<Label htmlFor='last_name'>Last Name</Label>}
              input={
                <Controller
                  control={control}
                  name='last_name'
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      placeholder='e.g. Doe'
                      error={errors.last_name?.message}
                    />
                  )}
                />
              }
            />

            <Row label={<Label htmlFor='photo'>Photo</Label>} input={<PhotoUpload user={user} />} />
          </div>
        </div>

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <Header
            title='Update your Password'
            description='Click the button below to receive a link via email to update your password.'
          />

          <div className='space-y-6 sm:space-y-5'>
            <Row
              label={<Label htmlFor='password'>Password</Label>}
              input={<Button>Change Password</Button>}
            />
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex gap-x-3 justify-end'>
          <Button type='submit'>Update Profile</Button>
        </div>
      </div>
    </form>
  )
}

export default SettingsForm
