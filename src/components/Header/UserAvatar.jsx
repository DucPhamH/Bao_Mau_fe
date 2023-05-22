import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'

function UserAvatar({ handleLogout }) {
  const [open, setOpen] = useState(false)
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <div className='group relative inline-block' onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      <button className='flex mr-3 items-center text-4xl font-bold text-gray-900 rounded-full ' type='button'>
        <div className='hidden md:block'>Nguyen Van A</div>
        <div className='p-5'>
          <FaUserAlt />
        </div>
      </button>

      {/* <!-- Dropdown menu --> */}
      {open && (
        <div
          className='z-10 fix_hover top-14 right-10 transform scale-0 group-hover:scale-100 absolute
          transition duration-300 ease-in-out md:top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-56'
        >
          <ul className='py-2 text-sm text-gray-700'>
            <li>
              <Link to='/profile' className='block px-4 py-2 text-2xl hover:bg-gray-100'>
                Tài khoản của tôi
              </Link>
            </li>
            <li>
              <Link to='#' className='block px-4 py-2 text-2xl hover:bg-gray-100'>
                Đơn mua
              </Link>
            </li>
          </ul>
          <div className='py-2'>
            <div onClick={handleLogout} className='block text-red-500 px-4 py-2 text-2xl  hover:bg-gray-100'>
              Đăng xuất
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAvatar
