import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/app.context'
import { useMutation } from '@tanstack/react-query'
import { logoutAccount } from '../../api/auth.api'

import logo from '../../asset/img/babysister.png'
import UserAvatar from './UserAvatar'

export default function Header() {
  const { isAuthenticated, setIsAuthenticated, info, setInfo } = useContext(AppContext)

  const logoutMutation = useMutation({
    mutationFn: logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false)
      setInfo(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  //console.log(info)
  const navigate = useNavigate()

  const toggleOpenLogin = () => {
    navigate('/login')
  }
  const toggleOpenRegister = () => {
    navigate('/register')
  }

  return (
    <header className='bg-white w-full h-full flex items-center justify-between border border-b-black  '>
      <Link to='/'>
        <div className='w-[70px] h-[90px] mx-20 flex justify-center items-center bg-[#42FCCF] border border-black'>
          <img className=' w-[60%] h-[80%]' src={logo} alt='' />
        </div>
      </Link>

      <div className='flex mx-14'>
        {!isAuthenticated ? (
          <>
            <div>
              <button
                onClick={toggleOpenLogin}
                className='bg-[#D9D9D9] border hover:bg-gray-500 mx-5 text-black font-itim text-4xl py-6 px-7 hover:border-black rounded-3xl'
              >
                ログイン
              </button>
            </div>
            <div>
              <button
                onClick={toggleOpenRegister}
                className='bg-[#D9D9D9] hover:bg-gray-500 mx-5 text-black font-itim text-4xl py-6 px-7 border hover:border-black rounded-3xl'
              >
                サインアップ
              </button>
            </div>
          </>
        ) : (
          <UserAvatar handleLogout={handleLogout} info={info} />
        )}
      </div>
    </header>
  )
}
