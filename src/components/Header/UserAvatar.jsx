import { Link } from 'react-router-dom'
import { useState } from 'react'

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
      <button
        className='flex mr-3 items-center text-xl font-bold text-gray-900 rounded-full hover:text-yellow-500 md:mx-7 md:text-xl lg:text-2xl'
        type='button'
      >
        <svg
          className='h-9 lg:h-10 p-2 text-gray-500'
          aria-hidden='true'
          focusable='false'
          data-prefix='far'
          data-icon='user'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'
          />
        </svg>
        <div className='hidden md:block'>Phạm Đức</div>
        <svg
          className='w-5 h-5 hidden md:block mx-1.5'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
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
