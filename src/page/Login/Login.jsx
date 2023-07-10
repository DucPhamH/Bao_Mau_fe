import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { schemaLogin } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from '../../api/auth.api'
import { toast } from 'react-toastify'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useState } from 'react'
import logo from '../../asset/img/babysister.png'
import { FiPhoneCall } from 'react-icons/fi'
import { getInfoFromLS } from '../../utils/auth'

export default function Login() {
  const { setIsAuthenticated, setInfo } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin)
  })

  const loginAccontMutation = useMutation({
    mutationFn: (body) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    //  console.log(data)
    loginAccontMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        toast.success('ログイン成功 !') //。(20)
        setInfo(getInfoFromLS())
        setIsAuthenticated(true)
        if (data.data?.data.user.roles === 1) {
          navigate('/employeelist')
        } else {
          navigate('/listofavailablejobs')
        }
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
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='font-itim'>
      <div className='flex w-full justify-between items-center pb-10 px-10'>
        <div className='w-[70px] h-[90px]  flex justify-center items-center bg-[#42FCCF] border border-black'>
          <img className=' w-[60%] h-[80%]' src={logo} alt='' />
        </div>
        <div className='text-4xl text-[#D324D7] underline'>
          <Link to='/register'>登録</Link>
        </div>
      </div>
      <form className='w-full px-10' onSubmit={onSubmit} noValidate>
        <div className=' relative mb-10'>
          <label className='block mb-2 text-xl text-black'>電話番号を入力する</label>
          <div className='absolute right-0 flex items-center pr-5 justify-center bottom-12 cursor-default scale-150 top-[40%]'>
            <FiPhoneCall />
          </div>
          <input
            type='text'
            id='phone'
            name='phone'
            {...register('phone')}
            className='bg-[#D9D9D9] border border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.phone?.message}</div>
        </div>

        <div className=' relative mb-10'>
          <label className='block mb-2 text-xl text-black'>パスワードを入力する</label>
          <div
            className='absolute right-0 flex items-center pr-5 justify-center bottom-12 top-[40%] cursor-pointer scale-150'
            onClick={toggleShowPassword}
          >
            {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
          </div>
          <input
            type={showPassword ? `text` : `password`}
            id='password'
            name='password'
            autoComplete='on'
            {...register('password')}
            className='bg-[#D9D9D9] border border-gray-300 text-gray-900 text-2xl rounded-full  block w-full p-4'
          />
          <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.password?.message}</div>
        </div>

        <div className='w-full flex justify-center items-center pt-14'>
          <button className='bg-[#D324D7] hover:bg-blue-500  mx-5 text-white py-4 px-8 border rounded-full'>
            ログイン
          </button>
        </div>
      </form>
    </div>
  )
}
