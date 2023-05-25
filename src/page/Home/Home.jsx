import React, { useContext } from 'react'
import bg from '../../asset/img/bg.png'
import { AppContext } from '../../contexts/app.context'

export default function Home() {
  return (
    <div className='relative'>
      <img src={bg} alt='not found' className='w-full object-cover' />
      <div className='absolute w-full h-full top-0 left-0'>
        <div className='w-full flex justify-center items-center my-28'>
          <div className='bg-[#9EFFA8] text-[#FA1313] text-8xl font-alex flex justify-center items-center h-36 w-[500px]  rounded-full'>
            COOKCARE
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <button className='bg-[#87FDE8] mx-5 font-dotgothic text-4xl py-12 px-[550px] rounded-full'>
            お前はもう死んでいる
          </button>
        </div>
      </div>
    </div>
  )
}
