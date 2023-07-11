import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { convertDate, displayNum } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
export default function JobPost({ post, pathName }) {
  const navigate = useNavigate()
  return (
    <div className='border-2 font-itim rounded-xl border-black mx-12 my-12 hover:shadow-2xl cursor-pointer hover:bg-[#ACFFFC]'>
      <div className='flex ml-3 mt-2'>
        <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center '>
          <img src={post.userID.image} alt='imageuser' />
        </div>
        <div className='ml-[1vw]'>
          <div className='flex-col gap-6'>
            <div className='mt-2 text-4xl'>{post.title}</div>
            <div className='flex -ml-1.5 mt-5'>
              <GiPositionMarker size={24} />
              <div className='-mt-1 font-bold text-3xl'> {post.address} </div>
            </div>
            <div className='mt-5 flex'>
              <div className='w-[7vw] text-ellipsis overflow-hidden whitespace-nowrap'>Tuổi : {post.age}</div>
              <div className='w-[12vw] mr-[2vw] text-ellipsis overflow-hidden whitespace-nowrap'>
                Kinh nghiệm : {post.experience} năm
              </div>
              <div className='w-[12vw] text-ellipsis overflow-hidden whitespace-nowrap'>
                Lương（Yên）: {displayNum(post.salary)}
              </div>
            </div>
            <div className='mt-5'>Ngày bắt đầu công việc: {convertDate(post.dateStart)}</div>

            <div className='w-[30vw] mt-5 mb-12 line-clamp-2'>{post.description}</div>
          </div>
        </div>
        <div className='flex mb-12 ml-[2vw]'>
          <button
            onClick={() => navigate(pathName)}
            className='bg-[#C226F9] text-white rounded-3xl self-end px-[2vw] py-2 hover:bg-green-600'
          >
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  )
}
