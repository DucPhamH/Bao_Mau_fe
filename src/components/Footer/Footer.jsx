import React from 'react'
import Timer from '../Timer/Timer'

export default function Footer() {
  return (
    <div className='w-full h-[110px] flex items-center justify-between z-0 bg-[#CBDEE4] '>
      <Timer />
      <div className='mx-24 text-4xl font-medium cursor-text z-[2]'>著作権はSUKUNAに帰属します</div>
      <div className='mx-24 text-4xl font-medium'>連絡先情報 : 012345678 </div>
    </div>
  )
}
