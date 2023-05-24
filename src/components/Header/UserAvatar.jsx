import { Link } from 'react-router-dom'

import { FaUserAlt } from 'react-icons/fa'
import { BiHomeAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineCalendar, AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai'
import React from 'react'

function UserAvatar({ handleLogout, info }) {
  const [modal, setModal] = React.useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='group relative inline-block'>
      <button
        className='flex mr-3 items-center text-4xl font-bold text-gray-900 rounded-full '
        onClick={toggleModal}
        type='button'
      >
        {info.name}
        <div className='p-5'>
          <FaUserAlt />
        </div>
      </button>

      {/* <!-- Dropdown menu --> */}
      {modal && (
        <div className='modal'>
          <div className='overlay'></div>
          <div className='modal-content bg-white w-[420px]'>
            <div className='flex justify-between items-center mx-10'>
              <div className='flex text-4xl justify-center items-center'>
                <div className='mr-5 '>
                  <FaUserAlt />
                </div>
                Nguyen Van A
              </div>
              <div className=' text-6xl font-medium cursor-pointer' onClick={toggleModal}>
                X
              </div>
            </div>
            <hr className='my-6 mx-16 h-1 bg-gray-500' />
            <div className='mx-20 mb-6 cursor-pointer flex items-center'>
              <div className='text-5xl pr-8'>
                <BiHomeAlt />
              </div>
              <div className='text-4xl'>ホームページ</div>
            </div>
            <div className='mx-20 mb-6 cursor-pointer flex items-center'>
              <div className='text-5xl pr-8'>
                <FaUserAlt />
              </div>
              <div className='text-4xl'>自分情報</div>
            </div>
            <div className='mx-20 mb-6 cursor-pointer flex items-center'>
              <div className='text-5xl pr-8'>
                <AiOutlineCalendar />
              </div>
              <div className='text-4xl'>エントリー情報</div>
            </div>
            <div className='mx-20 mb-6 cursor-pointer flex items-center'>
              <div className='text-5xl pr-8'>
                <AiOutlineHeart />
              </div>
              <div className='text-4xl'>お気に入り</div>
            </div>
            <div className='mx-20 mb-6 cursor-pointer flex items-center'>
              <div className='text-5xl pr-8'>
                <AiOutlinePlus />
              </div>
              <div className='text-4xl'>新しい仕事の作成</div>
            </div>
            <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600' onClick={handleLogout}>
              <div className='text-5xl pr-8 '>
                <FiLogOut />
              </div>
              <div className='text-4xl'>ログアウト</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAvatar
