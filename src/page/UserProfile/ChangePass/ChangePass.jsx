import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { schemaChangePass } from '../../../utils/rules'
import { toast } from 'react-toastify'
import { omit } from 'lodash'
import { updatePass } from '../../../api/auth.api'
import { useMutation } from '@tanstack/react-query'
import { isAxiosUnprocessableEntityError } from '../../../utils/utils'

export default function ChangePass() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaChangePass) })

  const registerAccontMutation = useMutation({
    mutationFn: (body) => updatePass(body)
  })

  // console.log(watch())

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])

    console.log(body)
    registerAccontMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast(data.data?.message)
        window.location.reload()
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          const formError = error.response?.data
          console.log(formError)
          if (formError) {
            setError('password', {
              message: formError.message,
              type: 'Server'
            })
          }
        }
      }
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <div className='grid gap-y-28 mt-32 mx-10'>
        <div className='col-span-1'>古いパスワード :</div>
        <div className='col-start-2 col-span-2 py-1'>
          <input
            className='indent-10 w-full border rounded-xl border-black'
            type='password'
            name='password'
            autoComplete='on'
            {...register('password')}
          ></input>
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.password?.message}</div>
        </div>
        <div className='col-span-1 row-start-2'>新しいパスワード :</div>
        <div className='col-start-2 col-span-2 py-1'>
          <input
            className='indent-10 w-full border rounded-xl border-black'
            type='password'
            name='newPassword'
            autoComplete='on'
            {...register('newPassword')}
          ></input>
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.newPassword?.message}</div>
        </div>
        <div className='col-span-1 row-start-3'>パスワード確認 :</div>
        <div className='col-start-2 col-span-2 py-1'>
          <input
            className='indent-10 w-full border rounded-xl border-black'
            type='password'
            name='confirm_password'
            autoComplete='on'
            {...register('confirm_password')}
          ></input>
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.confirm_password?.message}</div>
        </div>
      </div>
      <div className='my-24 flex justify-center'>
        <button type='submit' className='bg-[#FED5D5] px-8 rounded-full py-1 border border-black'>
          Confirm
        </button>
      </div>
    </form>
  )
}
