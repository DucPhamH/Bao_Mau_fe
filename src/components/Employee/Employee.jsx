import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { GiPositionMarker } from 'react-icons/gi'
export default function Employee() {
  return (
    <div className='border-2 font-itim rounded-xl border-black mx-12 my-12'>
      <div className='flex ml-3 mt-2'>
        <div className='mr-6'>
          <BiUserCircle className='cursor-pointer' size={150} />
        </div>
        <div className='mr-3 w-full grid gap-x-16 gap-y-3'>
          <div className='mt-2 col-span-1 cursor-pointer'>Lê Thị A</div>
          <div className='flex -ml-1.5 mt-1 row-start-2 col-span-1'>
            <GiPositionMarker size={20} />
            <div className='-mt-1 font-bold text-3xl'>東京</div>
          </div>

          <div className='row-start-3 col-span-1'>年齢 : 20</div>
          <div className='row-start-3 col-start-2 col-span-1'>実験 :2 年</div>
          <div className='row-start-3 col-start-3 col-span-1'>給料: 500</div>
          <div className='mb-12 line-clamp-2 row-start-4 col-span-4'>
            私は家でベビーシッターの仕事を探しています.私は子供が大好きな人です.私が家にいたとき,私の叔母と叔父は私がみんなの世話をしていた赤ちゃđấんを持っていました.私は遊ぶ方法を知っていますdfdfsdgfnsdgbsghsifgnksfbnksflbnkf;gsrilgjrgho
          </div>
        </div>
      </div>
    </div>
  )
}
