import React from 'react'
import Timer from '../Timer/Timer'
// import MessengerChat from '../MessengerChat'

export default function Footer() {
  return (
    <div className='w-full h-[110px] flex items-center justify-between z-0 bg-[#CBDEE4] '>
      {/* <MessengerChat /> */}
      {/* <Timer /> */}

      <div className='mx-24 text-4xl font-medium z-[2]'>著作権はSUKUNAに帰属します</div>
      <div className='mx-24 text-4xl font-medium z-[2]'>連絡先情報 : 012345678 </div>
      <div className='absolute w-[100%] cursor-default select-none'>
        <i className='fixed right-0 bottom-8 z-50 backdrop-blur-[20px]'>
          Đừng đánh dân &copy;2023-2023. All rights reserved.
        </i>
      </div>
    </div>
  )
}
