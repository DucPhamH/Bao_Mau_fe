import React from 'react'

export default function EmployeeList() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-full top-0 left-0'>
        <div className='w-full flex justify-center items-center my-28'>
          <div className='bg-[#9EFFA8]  mx-5 text-[#FA1313] text-8xl font-alex flex justify-center items-center  h-36 w-[500px]  rounded-full'>
            COOKCARE
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <button className='bg-[#87FDE8] mx-5  font-semibold text-4xl py-12 px-[550px]  rounded-full'>
            ウェブサイトのスローガン
          </button>
        </div>
      </div>
    </div>
  )
}
