import React from 'react'

const Post = ({ postProps, buttons }) => {
  return (
    <div
      className='w-full border border-black rounded-2xl p-8 flex items-center justify-center gap-8 post'
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
    >
      <div className='basis-[14.2857143%]'>
        <div className=' min-w-[50%] max-w-[80%] mx-auto'>
          {postProps.img && <img alt='' src={postProps.img} height={28} width={28} />}
        </div>
      </div>
      <div className='basis-[57.1428571%]'>
        <div className='text-[24px]'>{postProps.title || postProps.name}</div>
        <div className='text-[24px]'>{postProps.address}</div>
        <div className='flex gap-8 text-[16px]'>
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
        {postProps.dateStart && <div>勤務開始日: {postProps.dateStart}</div>}
        <div className='text-[16px]'>{postProps.description}</div>
      </div>
      <div className='buttons flex-grow-[28.5714286%] flex flex-col justify-center items-center gap-4'>
        {buttons.map((buttonProp, ind) => (
          <button
            key={ind}
            className={`${buttonProp.backgroundColor} text-white font-bold py-4 px-8 border rounded-2xl`}
          >
            {buttonProp.content}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Post
