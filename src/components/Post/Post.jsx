import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { BsPersonFill } from 'react-icons/bs'

const Post = ({ postProps, buttons }) => {
  return (
    <div
      className='w-full border border-black rounded-2xl p-8 flex items-center justify-center gap-8 post'
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
    >
      <div>
        <BsPersonFill className='w-[10rem] h-[10rem]' />
      </div>
      <div>
        <div className='text-[20px]'>{postProps.title || postProps.name}</div>
        <div className='flex text-[20px] items-center'>
          <GiPositionMarker size={20} />
          <div className='ml-1'>{postProps.address}</div>
        </div>
        <div className='flex gap-8 text-[16px] mt-4'>
          <div>
            年齢: {postProps.ageRange ? `${postProps.ageRange[0]} - ${postProps.ageRange[1]}` : `${postProps.age}`}
          </div>
          <div>
            実験:
            {postProps.experienceRange
              ? `${postProps.experienceRange[0]} - ${postProps.experienceRange[1]} years`
              : `${postProps.experience} years`}
          </div>
          <div>給料: {postProps.salary}</div>
        </div>
        <div className='mt-2'>勤務開始日: 17/4/2023</div>
        <div className='text-[16px] mt-4'>{postProps.description}</div>
      </div>
      <div className='buttons flex flex-col justify-center items-center gap-14 mr-10'>
        {buttons.map((buttonProp, ind) => (
          <button
            key={ind}
            className={`${buttonProp.backgroundColor} text-white text-[20px] p-1 rounded-[20px] w-[14rem] border-2 border-black shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all`}
          >
            {buttonProp.content}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Post
