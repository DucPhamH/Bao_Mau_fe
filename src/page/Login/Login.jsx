// import { useForm } from 'react-hook-form'
// import { Link, useNavigate } from 'react-router-dom'
// import { schema } from '../../utils/rules'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useMutation } from '@tanstack/react-query'
// import { loginAccount } from '../../api/auth.api'
// import { isAxiosUnprocessableEntityError } from '../../utils/utils'
// import { useContext } from 'react'
// import { AppContext } from '../../contexts/app.context'

// const loginSchema = schema.omit(['confirm_password'])
export default function Login() {
  // const { setIsAuthenticated } = useContext(AppContext)
  // const navigate = useNavigate()
  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors }
  // } = useForm({
  //   resolver: yupResolver(loginSchema)
  // })

  // const loginAccontMutation = useMutation({
  //   mutationFn: (body) => loginAccount(body)
  // })

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data)
  //   loginAccontMutation.mutate(data, {
  //     onSuccess: (data) => {
  //       console.log(data)
  //       setIsAuthenticated(true)
  //       navigate('/')
  //     },
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
    //     <div className='w-auto h-7 sm:h-8 inline-flex text-6xl lg:text-red-700 font-bold'>Login</div>
    //   </h1>
    //   <div className='pb-3'>
    //     <input
    //       type='email'
    //       name='email'
    //       id='email'
    //       placeholder='Email'
    //       className='block w-full p-4  text-black text-2xl border border-gray-300 rounded-lg '
    //       {...register('email')}
    //     />
    //     <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.email?.message}</div>
    //   </div>
    //   <div className='pb-3'>
    //     <input
    //       className='block w-full p-4 text-black text-2xl border border-gray-300 rounded-sm'
    //       type='password'
    //       name='password'
    //       id='password'
    //       placeholder='Password'
    //       autoComplete='on'
    //       {...register('password')}
    //     />
    //     <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.password?.message}</div>
    //   </div>
    //   <div className='text-right text-gray-500 flex  '>
    //     <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
    //     <Link className='ml-1 text-red-400 hover:underline hover:text-red-700' to='/register'>
    //       Đăng ký
    //     </Link>
    //   </div>
    //   <div className='px-4 pb-2 rounded-full pt-4'>
    //     <button className='uppercase block w-full p-5 mt-6 text-2xl rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none'>
    //       sign in
    //     </button>
    //   </div>
    // </form>
    <div>Login</div>
  )
}
