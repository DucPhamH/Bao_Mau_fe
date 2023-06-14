import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/app.context'
import { useMutation } from '@tanstack/react-query'
import { logoutAccount } from '../../api/auth.api'

import logo from '../../asset/img/babysister.png'
import logo2 from '../../asset/img/babysister2.png'
import UserAvatar from './UserAvatar'
import animate from '../../asset/animate/animate.gif'
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

  let timerandom, colorX
  const hash = '#',
    zeroString = '000000'
  const refimg = useRef(null),
    refimg2 = useRef(null)

  setInterval(() => {
    timerandom = Math.floor(Math.random() * 100)
    if (timerandom > 75 && refimg.current) {
      colorX = Math.round(0xffffff * Math.random()).toString(16)
      refimg.current.style.backgroundColor = hash + zeroString.substring(0, 6 - colorX.length) + colorX
    }
  }, 1500)
  setInterval(() => {
    timerandom = Math.floor(Math.random() * 100)
    if (timerandom > 70 && refimg2.current) {
      colorX = Math.round(0xffffff * Math.random()).toString(16)
      refimg2.current.style.backgroundColor = hash + zeroString.substring(0, 6 - colorX.length) + colorX
    }
  }, 1000)

  return (
    <header className='bg-white w-full h-full flex items-center justify-between border border-b-black  '>
      <Link to='/'>
        <div className='w-[70px] h-[90px] mx-20 flex justify-center items-center bg-[#42FCCF] border border-black'>
          <div className='relative w-[60%] h-[80%]'>
            <img ref={refimg} src={logo} alt='' />
            <img ref={refimg2} className='img2 absolute bg-red-700 top-0 left-0' src={logo} alt='' />
          </div>
        </div>
      </Link>
      <div className='h-[40%] w-[100%] overflow-x-hidden'>
        <img src={animate} className='h-[100%] animate-move2' alt='' />
      </div>

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
