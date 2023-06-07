import React from 'react'
import CreatedJobsPost from '../../components/CreatedJobsPost'
export default function UserCreatedJobs() {
  return (
    <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
      <div className='w-4/5 bg-[#FFF] text-center mt-40 rounded-3xl p-8 text-6xl font-bold'>
        あなたが作成した仕事リスト
      </div>
      <div className='w-[90%] bg-[#FFF] mt-12 mb-24 rounded-3xl flex items-center justify-center'>
        <div className='w-[90%] mt-12 h-[70rem] overflow-y-auto overflow-hidden'>
          <CreatedJobsPost />
          <CreatedJobsPost />
        </div>
      </div>
    </div>
  )
}
