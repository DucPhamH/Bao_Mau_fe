import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { BsPersonFill } from 'react-icons/bs'
import { displayNum, getAges } from '../../utils/utils'

const Post = ({ request }) => {
  return (
    <div
      className='w-full border border-black rounded-2xl p-8 flex  gap-8 post'
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
    >
      <div>
        <BsPersonFill className='w-[10rem] h-[10rem]' />
      </div>
      <div>
        <div className='text-[20px]'>{request.employeeID.userID.name}</div>
        <div className='flex text-[20px] items-center'>
          <GiPositionMarker size={20} />
          <div className='ml-1'>{request.employeeID.userID.address}</div>
        </div>
        <div className='flex gap-8 text-[16px] mt-4'>
          <div>年齢: {getAges(request.employeeID.dateOB)}</div>
          <div>実験: {request.employeeID.experience}</div>
          <div>給料: {displayNum(request.employeeID.salary)}</div>
        </div>

        <div className='text-[16px] mt-4'>{request.employeeID.description}</div>
      </div>
      <div className='buttons flex'>
        <button className='bg-[#41E309] mx-10 text-white text-[20px] p-1 rounded-[20px] w-[14rem] border-2 border-black shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'>
          アクセス
        </button>
        <button className='bg-[#E72253] mx-10 text-white text-[20px] p-1 rounded-[20px] w-[14rem] border-2 border-black shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'>
          キャンセル
        </button>
      </div>
    </div>
  )
}

export default Post
