import { FaLocationArrow } from 'react-icons/fa'
export default function UserPopupJobPost({ postUser }) {
  return (
    <div className='border-2 border-black flex rounded-lg mb-14 font-itim'>
      <div className='ml-8 mt- w-[70%]'>
        <div className='line-clamp-1'>{postUser.title}</div>
        <div className='line-clamp-2 mt-2 text-[#A1A1A1]'>{postUser.description}</div>
      </div>
      <div className='flex ml-8 justify-center items-center scale-[200%]'>
        <FaLocationArrow className='text-[#2D2A9C] cursor-pointer hover:text-green-700' />
      </div>
    </div>
  )
}
