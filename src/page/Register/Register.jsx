import { schema } from '../../utils/rules'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from '../../api/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const registerAccontMutation = useMutation({
    mutationFn: (body) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    console.log(body)
    registerAccontMutation.mutate(body, {
      onSuccess: (data) => console.log(data),
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          const formError = error.response?.data
          console.log(formError)
          if (formError) {
            setError('email', {
              message: formError.message,
              type: 'Server'
            })
          }
        }
      }
    })
  })
  return (
    <form
      className='sm:w-2/3 w-full px-4 lg:px-5 lg:py-20 rounded-lg mx-auto lg:bg-white'
      onSubmit={onSubmit}
      noValidate
    >
      <h1 className='my-6 pb-20'>
        <div className='w-auto h-7 sm:h-8 inline-flex text-6xl lg:text-red-700 font-bold'>Register</div>
      </h1>
      <div className='pb-3 '>
        <input
          type='email'
          id='email'
          placeholder='Email'
          className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg '
          {...register('email')}
        />
        <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.email?.message}</div>
      </div>
      <div className='pb-3'>
        <input
          className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg'
          type='password'
          placeholder='Password'
          autoComplete='on'
          {...register('password')}
        />
        <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.password?.message}</div>
      </div>
      <div className='pb-3'>
        <input
          className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg'
          type='password'
          placeholder='Confirm Password'
          autoComplete='on'
          {...register('confirm_password')}
        />
        <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.confirm_password?.message}</div>
      </div>
      <div className='text-right text-gray-500 flex  '>
        <span className='text-gray-400'>Bạn đã có tài khoản?</span>
        <Link className='ml-1 text-red-400 hover:underline hover:text-red-700' to='/login'>
          Đăng nhập
        </Link>
      </div>
      <div className='px-4 pb-2 pt-4 rounded-full'>
        <button className='uppercase block w-full p-5 mt-6 text-2xl rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none'>
          sign up
        </button>
      </div>
    </form>
  )
}
