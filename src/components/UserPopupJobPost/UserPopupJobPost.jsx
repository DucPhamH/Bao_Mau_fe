import { FaLocationArrow } from 'react-icons/fa'
export default function UserPopupJobPost() {
  return (
    <div className='border-2 border-black flex rounded-lg mb-14 font-itim'>
      <div className='ml-8 mt- w-[32vw]'>
        <div className='line-clamp-1'>1歳の赤ちゃんのベビーシッターを探す</div>
        <div className='line-clamp-2 mt-2 text-[#A1A1A1]'>
          現在、私はベビーシッターを見つける必要があり、 非常に悪い生活を送っています....v.v hmu hmu
        </div>
      </div>
      <div className='flex ml-6 justify-center items-center scale-[200%]'>
        <FaLocationArrow className='text-[#2D2A9C] cursor-pointer hover:text-green-700' />
      </div>
    </div>
  )
}
