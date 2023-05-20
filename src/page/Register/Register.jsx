// import { schema } from '../../utils/rules'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useMutation } from '@tanstack/react-query'
// import { registerAccount } from '../../api/auth.api'
// import { omit } from 'lodash'
// import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import logo from '../../asset/img/babysister.png'

export default function Register() {
  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors }
  // } = useForm({ resolver: yupResolver(schema) })

  // const registerAccontMutation = useMutation({
  //   mutationFn: (body) => registerAccount(body)
  // })

  // const onSubmit = handleSubmit((data) => {
  //   const body = omit(data, ['confirm_password'])
  //   console.log(body)
  //   registerAccontMutation.mutate(body, {
  //     onSuccess: (data) => console.log(data),
  //     onError: (error) => {
  //       console.log(error)
  //       if (isAxiosUnprocessableEntityError(error)) {
  //         const formError = error.response?.data
  //         console.log(formError)
  //         if (formError) {
  //           setError('email', {
  //             message: formError.message,
  //             type: 'Server'
  //           })
  //         }
  //       }
  //     }
  //   })
  // })
  return (
    // <form
    //   className='sm:w-2/3 w-full px-4 lg:px-5 lg:py-20 rounded-lg mx-auto lg:bg-white'
    //   onSubmit={onSubmit}
    //   noValidate
    // >
    //   <h1 className='my-6 pb-20'>
    //     <div className='w-auto h-7 sm:h-8 inline-flex text-6xl lg:text-red-700 font-bold'>Register</div>
    //   </h1>
    //   <div className='pb-3 '>
    //     <input
    //       type='email'
    //       id='email'
    //       placeholder='Email'
    //       className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg '
    //       {...register('email')}
    //     />
    //     <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.email?.message}</div>
    //   </div>
    //   <div className='pb-3'>
    //     <input
    //       className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg'
    //       type='password'
    //       placeholder='Password'
    //       autoComplete='on'
    //       {...register('password')}
    //     />
    //     <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.password?.message}</div>
    //   </div>
    //   <div className='pb-3'>
    //     <input
    //       className='block w-full p-4 text-2xl text-black border border-gray-300 rounded-lg'
    //       type='password'
    //       placeholder='Confirm Password'
    //       autoComplete='on'
    //       {...register('confirm_password')}
    //     />
    //     <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.confirm_password?.message}</div>
    //   </div>
    //   <div className='text-right text-gray-500 flex  '>
    //     <span className='text-gray-400'>Bạn đã có tài khoản?</span>
    //     <Link className='ml-1 text-red-400 hover:underline hover:text-red-700' to='/login'>
    //       Đăng nhập
    //     </Link>
    //   </div>
    //   <div className='px-4 pb-2 pt-4 rounded-full'>
    //     <button className='uppercase block w-full p-5 mt-6 text-2xl rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none'>
    //       sign up
    //     </button>
    //   </div>
    // </form>
    <div>
      <div className='flex w-full justify-between items-center pb-16 px-10'>
        <div className='w-[70px] h-[90px]  flex justify-center items-center bg-[#42FCCF] border border-black'>
          <img className=' w-[60%] h-[80%]' src={logo} alt='' />
        </div>
        <div className='text-6xl text-blue-700 mr-48 mt-28'>登録</div>
      </div>
      <form className='w-full px-10' action=''>
        <div className=' relative mb-10'>
          <input
            type='text'
            id='name'
            placeholder='名'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-1/2 p-4'
          />
        </div>
        <div className=' relative mb-10'>
          <input
            type='phone'
            id='phone'
            placeholder='電話番号'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
        </div>
        <div className=' relative mb-10'>
          <input
            type='password'
            id='password'
            placeholder='パスワード'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
        </div>
        <div className=' relative mb-10'>
          <input
            type='password'
            id='password'
            placeholder='再パスワード'
            className='bg-[#D9D9D9] border placeholder:text-black border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
        </div>
        <div>
          <label className='block mb-2 text-xl font-medium text-black'>オブジェクトを選択</label>
          <div className='flex w-full justify-between items-center my-5'>
            <div className='flex bg-[#D9D9D9] rounded-full p-2 items-center'>
              <label htmlFor='default-radio-1' className='mr-2 text-2xl text-black'>
                ユーザー
              </label>
              <input
                defaultChecked
                id='default-radio-1'
                type='radio'
                defaultValue
                name='default-radio'
                className='w-10  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
            </div>
            <div className='flex bg-[#D9D9D9] rounded-full p-2 items-center'>
              <label htmlFor='default-radio-1' className='mr-2 text-2xl text-black'>
                ベビーシッター・料理人
              </label>
              <input
                id='default-radio-1'
                type='radio'
                defaultValue
                name='default-radio'
                className='w-10  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center pt-14'>
          <button class='bg-[#D324D7] hover:bg-blue-500  mx-5 text-white py-4 px-8 hover:border hover:border-black rounded-full'>
            ログイン
          </button>
        </div>
      </form>
    </div>
  )
}
