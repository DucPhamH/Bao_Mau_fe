import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { BiHomeAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineCalendar, AiOutlineHeart, AiOutlinePlus, AiOutlineCreditCard } from 'react-icons/ai'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { currentAccount } from '../../api/auth.api'
import { getRequestUser } from '../../api/request.api'

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
  const { data: userData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return currentAccount()
    }
  })
  const user = userData?.data
  const check = () => {
    return info.roles === 2 ? true : false
  }

  const { data } = useQuery({
    queryKey: ['userRequest'],
    queryFn: () => {
      return getRequestUser()
    },
    enabled: check()
  })

  const userRequest = data?.data.data
  console.log(userRequest)

  return (
    <div className='group relative inline-block'>
      <button
        className='flex mr-3 items-center text-5xl font-bold text-gray-900 rounded-full '
        onClick={toggleModal}
        type='button'
      >
        {user?.data?.name}
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
                {user?.data?.name}
              </div>
              <div className=' text-6xl font-medium cursor-pointer' onClick={toggleModal}>
                X
              </div>
            </div>
            <hr className='my-6 mx-16 h-1 bg-gray-500' />

            {info.roles === 2 ? (
              <Link to='/listofavailablejobs' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <BiHomeAlt />
                  </div>
                  <div className='text-4xl'>ホームページ</div>
                </div>
              </Link>
            ) : (
              <Link to='/employeelist' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <BiHomeAlt />
                  </div>
                  <div className='text-4xl'>ホームページ</div>
                </div>
              </Link>
            )}

            {info.roles === 2 ? (
              <Link to='/employeeprofile' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <FaUserAlt />
                  </div>

                  <div className='text-4xl'>自分情報</div>
                </div>
              </Link>
            ) : (
              <Link to='/userprofile' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <FaUserAlt />
                  </div>

                  <div className='text-4xl'>自分情報</div>
                </div>
              </Link>
            )}
            {info.roles === 2 ? (
              <Link to='/UserRequestsList' onClick={toggleModal}>
                <div className='mx-20 relative mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <AiOutlineCalendar />
                  </div>
                  <div className='text-4xl'>エントリー</div>
                  {userRequest.length === 0 ? (
                    ''
                  ) : (
                    <div className='absolute  right-0 h-10 w-10 font-semibold text-white bg-red-600 rounded-full flex justify-center items-center border-2 border-red-600'>
                      {userRequest.length}
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <Link to='/usercreatedjobs' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <AiOutlineCalendar />
                  </div>
                  <div className='text-4xl'>自分の作成した仕事</div>
                </div>
              </Link>
            )}

            {info.roles === 2 ? (
              <Link to='/EmployeeAcceptedJobs' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <AiOutlineHeart />
                  </div>
                  <div className='text-4xl'>契約</div>
                </div>
              </Link>
            ) : (
              <Link to='/requestslist' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <AiOutlineHeart />
                  </div>
                  <div className='text-4xl'>契約</div>
                </div>
              </Link>
            )}
            {info.roles === 1 && (
              <Link to='/createjob' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <AiOutlinePlus />
                  </div>
                  <div className='text-4xl'>新しい仕事の作成</div>
                </div>
              </Link>
            )}

            {info.roles === 1 && (
              <Link to='/contractedjobslist' onClick={toggleModal}>
                <div className='mx-20 mb-6 cursor-pointer flex items-center hover:text-red-600'>
                  <div className='text-5xl pr-8'>
                    <AiOutlineCreditCard />
                  </div>
                  <div className='text-4xl'>ペイメント</div>
                </div>
              </Link>
            )}

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
