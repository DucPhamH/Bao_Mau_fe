import { schema } from '../../utils/rules'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from '../../api/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import logo from '../../asset/img/babysister.png'
import { toast } from 'react-toastify'

export default function Register() {
  const navigate = useNavigate()
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
    //const body = checkRole(data)
    console.log(body)
    registerAccontMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast.success('サインアップの成功。(21)')
        navigate('/login')
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          const formError = error.response?.data
          console.log(formError)
          if (formError) {
            setError('phone', {
              message: formError.message,
              type: 'Server'
            })
          }
        }
      }
    })
  })

  return (
    <div className='font-itim'>
      <div className='flex w-full justify-between items-center pb-16 px-10'>
        <div className='w-[70px] h-[90px]  flex justify-center items-center bg-[#42FCCF] border border-black'>
          <img className=' w-[60%] h-[80%]' src={logo} alt='' />
        </div>
        <div className='text-6xl text-[#D324D7] mr-48 mt-28'>登録</div>
      </div>
      <form className='w-full px-10' onSubmit={onSubmit} noValidate>
        <div className=' relative mb-10'>
          <input
            type='text'
            id='name'
            name='name'
            autoComplete='on'
            {...register('name')}
            placeholder='名'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-1/2 p-4'
          />
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.name?.message}</div>
        </div>
        <div className=' relative mb-10'>
          <input
            type='text'
            id='phone'
            name='phone'
            {...register('phone')}
            placeholder='電話番号'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.phone?.message}</div>
        </div>
        <div className=' relative mb-10'>
          <input
            type='password'
            id='password'
            name='password'
            autoComplete='on'
            {...register('password')}
            placeholder='パスワード'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.password?.message}</div>
        </div>
        <div className=' relative mb-10'>
          <input
            type='password'
            id='confirm_password'
            name='confirm_password'
            autoComplete='on'
            {...register('confirm_password')}
            placeholder='再パスワード'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.confirm_password?.message}</div>
        </div>
        <div>
          <label className='block mb-2 text-xl text-black'>オブジェクトを選択</label>
          <div className='flex w-full justify-between items-center my-5'>
            <div className='flex bg-[#D9D9D9] rounded-full p-2 items-center'>
              <label htmlFor='default-radio-1' className='mr-2 text-2xl text-black'>
                ユーザー
              </label>
              <input
                id='default-radio-1'
                type='radio'
                value={1}
                // name='roles'
                {...register('roles')}
                className='w-10  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
            </div>
            <div className='flex bg-[#D9D9D9] rounded-full p-2 items-center'>
              <label htmlFor='default-radio-2' className='mr-2 text-2xl text-black'>
                ベビーシッター・料理人
              </label>
              <input
                id='default-radio-2'
                type='radio'
                value={2}
                // name='roles'
                {...register('roles')}
                className='w-10  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center pt-14'>
          <button className='bg-[#D324D7] hover:bg-blue-500  mx-5 text-white py-4 px-8 border rounded-full'>
            登録
          </button>
        </div>
      </form>
    </div>
  )
}
