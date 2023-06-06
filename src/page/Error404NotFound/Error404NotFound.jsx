import React from 'react'

export default function Error404NotFound() {
  return (
    <div className=' bg-black w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='rounded-[50%] w-[30vw] h-[30vw] overflow-hidden flex justify-center items-center'>
        <div className='rounded-[50%] w-[30vw] h-[30vw] border-white border-2 overflow-hidden flex justify-center items-center animate-entrance404'>
          <div className='text-red-600 text-[25vw] font-blooddrip mt-[10vw]'>4</div>
        </div>
      </div>
      <div className='rounded-[50%] w-[30vw] h-[30vw] border-white border-2 overflow-hidden flex justify-center items-center'>
        <div className='text-red-600 text-[25vw] font-blooddrip mt-[10vw]'>0</div>
      </div>
      <div className='rounded-[50%] w-[30vw] h-[30vw] border-white border-2 overflow-hidden flex justify-center items-center'>
        <div className='text-red-600 text-[25vw] font-blooddrip mt-[10vw]'>4</div>
      </div>
    </div>
  )
}
