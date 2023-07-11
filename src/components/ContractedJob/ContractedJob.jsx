import { GiPositionMarker } from 'react-icons/gi'
import { convertDate, displayNum } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
export default function ContractedJob({ postPayment, pathName }) {
  const navigate = useNavigate()
  return (
    <div className='pt-5 pb-16 mt-10 grid grid-cols-5 rounded-xl border border-black shadow-[0_2px_1px_-1px_black]'>
      <div className='col-span-1 flex justify-center items-center'>
        <div className='rounded-[50%] border-2 overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center bg-white'>
          <img src={postPayment.userID.image} alt='imageuser' />
        </div>
      </div>
      <div className='col-start-2 ml-4 col-span-3 flex-col'>
        <div className='text-5xl font-semibold'>{postPayment.title}</div>
        <div className='flex mt-2'>
          <GiPositionMarker className='-ml-2' size={20} />
          <div className='-mt-1 text-3xl'>{postPayment.address}</div>
        </div>
        <div className='flex text-[20px] mt-4'>
          <div className='line-clamp-1 w-[11vw]'>年齢 : {postPayment.age}</div>
          <div className='line-clamp-1 w-[19vw]'>実験 : {postPayment.experience} 年</div>
          <div className='line-clamp-1'>給料 : {displayNum(postPayment.salary)}</div>
        </div>
        <div className='text-[20px] mt-4'>勤務開始日 : {convertDate(postPayment.dateStart)}</div>
        <div className='text-[20px] mt-4 line-clamp-3'>{postPayment.description}</div>
      </div>

      <div className='col-start-5 col-span-1 flex'>
        <button
          onClick={() => {
            navigate(pathName)
          }}
          className='text-4xl pt-4 pb-4  ml-20 mr-10 self-end py-3 rounded-full w-[100%] text-white bg-[#C226F9] hover:bg-green-500'
        >
          詳細
        </button>
      </div>
    </div>
  )
}
