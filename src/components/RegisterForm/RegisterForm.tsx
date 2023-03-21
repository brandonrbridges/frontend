'use client'

import { signIn } from 'next-auth/react'

import { TextInput } from '../Form'

import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const router = useRouter()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      password_confirm: '',
      first_name: '',
      last_name: '',
    },
  })

  const submit = (data: any) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((response) => {
        return router.push('/dashboard')
      })
      .catch((error) => console.log(error))
  }

  return (
    <form className='space-y-3' onSubmit={handleSubmit(submit)}>
      <div className='gap-3 grid grid-cols-2'>
        <Controller
          name='first_name'
          control={control}
          render={({ field }) => <TextInput {...field} label='First Name' type='text' required />}
        />
        <Controller
          name='last_name'
          control={control}
          render={({ field }) => <TextInput {...field} label='Last Name' type='text' required />}
        />
      </div>

      <Controller
        name='email'
        control={control}
        render={({ field }) => <TextInput {...field} label='Email address' type='email' required />}
      />

      <Controller
        name='password'
        control={control}
        render={({ field }) => <TextInput {...field} label='Password' type='password' required />}
      />

      <Controller
        name='password_confirm'
        control={control}
        render={({ field }) => (
          <TextInput {...field} label='Confirm Password' type='password' required />
        )}
      />

      <div>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Create Account
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
