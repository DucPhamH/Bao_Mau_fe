import { FaLocationArrow } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function UserPopupJobPost({ postUser, pathName }) {
  const navigate = useNavigate()
  return (
    <div className='border-2 border-black flex rounded-lg mb-14 font-itim'>
      <div onClick={() => navigate(pathName)} className='ml-8 cursor-pointer mt- w-[70%]'>
        <div className='line-clamp-1'>{postUser.title}</div>
        <div className='line-clamp-2 mt-2 text-[#A1A1A1]'>{postUser.description}</div>
      </div>
      <div className='flex ml-8 justify-center items-center scale-[200%]'>
        <FaLocationArrow className='text-[#2D2A9C] cursor-pointer hover:text-green-700' />
      </div>
    </div>
  )
}
