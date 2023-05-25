import React, { useContext } from 'react'
import bg from '../../asset/img/bg.png'
import { AppContext } from '../../contexts/app.context'

export default function Home() {
  return (
    <div className='relative'>
      <img src={bg} alt='not found' className='w-full object-cover' />
      <div className='absolute w-full h-full top-0 left-0'>
        <div className='w-full flex justify-center items-center my-28'>
          <div className='bg-[#9EFFA8] text-[#FA1313] text-8xl font-alex flex justify-center items-center h-44 w-[500px] rounded-full'>
            COOKCARE
          </div>
        </div>

        {/* <button className='bg-[#87FDE8] mx-5 font-ankokuzonji text-5xl py-12 w-full rounded-full'>
            お前はもう死んでいる
          </button> */}
        <div className='bg-[#87FDE8] mx-5 font-ankokuzonji text-5xl py-12 rounded-full'>
          <div className='animate-move whitespace-nowrap overflow-hidden'>
            <p className=''>お前はもう死んでいる</p>
          </div>
        </div>
      </div>
    </div>
  )
}
