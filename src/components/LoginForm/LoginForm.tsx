'use client'

import { signIn } from 'next-auth/react'

import { TextInput } from '../Form'

import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginForm = () => {
  const router = useRouter()

  const { control, getValues, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [loading, setLoading] = useState<Boolean>(false)

  const [response, setResponse] = useState('')

  const submit = (data: any) => {
    setLoading(true)

    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((response) => {
        if (response) {
          if (response.ok) {
            return router.push('/dashboard')
          }

          setResponse(JSON.stringify(response))
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit(submit)}>
      {response && <div>{response}</div>}

      {loading && (
        <div className='flex justify-center'>
          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900'></div>
        </div>
      )}

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

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
          />
          <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
            Remember me
          </label>
        </div>

        <div className='text-sm'>
          <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Sign in
        </button>
      </div>
    </form>
  )
}

export default LoginForm
