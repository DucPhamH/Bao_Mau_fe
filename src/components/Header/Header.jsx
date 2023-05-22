// import React, { useContext } from 'react'
// import UserAvatar from './UserAvatar'
import { Link, useNavigate } from 'react-router-dom'
// import { AppContext } from '../../contexts/app.context'
// import { useMutation } from '@tanstack/react-query'
// import { logoutAccount } from '../../api/auth.api'
import React from 'react'
import logo from '../../asset/img/babysister.png'
import UserAvatar from './UserAvatar'

export default function Header() {
  // const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)

  // const logoutMutation = useMutation({
  //   mutationFn: logoutAccount,
  //   onSuccess: () => {
  //     setIsAuthenticated(false)
  //   }
  // })

  // const handleLogout = () => {
  //   logoutMutation.mutate()
  // }
  const navigate = useNavigate()

  const toggleOpenLogin = () => {
    navigate('/login')
  }
  const toggleOpenRegister = () => {
    navigate('/register')
  }

  return (
    <header className='bg-white w-full h-full flex items-center justify-between border border-b-black  '>
      <div className='w-[70px] h-[90px] mx-20 flex justify-center items-center bg-[#42FCCF] border border-black'>
        <img className=' w-[60%] h-[80%]' src={logo} alt='' />
      </div>

      <div className='flex mx-14'>
        {/* <div>
          <button
            onClick={toggleOpenLogin}
            className='bg-[#D9D9D9] hover:bg-gray-500 mx-5 text-black font-itim py-8 px-16 hover:border hover:border-black rounded-full'
          >
            ログイン
          </button>
        </div>
        <div>
          <button
            onClick={toggleOpenRegister}
            className='bg-[#D9D9D9] hover:bg-gray-500 mx-5 text-black font-itim py-8 px-16 hover:border hover:border-black rounded-full'
          >
            サインアップ
          </button>
        </div> */}
        <UserAvatar />
      </div>
    </header>
  )
}
