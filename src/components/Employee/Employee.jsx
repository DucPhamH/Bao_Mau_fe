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
        <div>
          <div className='mt-2 cursor-pointer'>Lê Thị A</div>
          <div className='flex -ml-1.5 mt-1'>
            <GiPositionMarker size={20} />
            <div className='-mt-1 font-bold text-3xl'>東京</div>
          </div>
          <div className='flex my-8'>
            <div className='pr-20'>年齢 : 20</div>
            <div className='pr-40'>実験 :2 年</div>
            <div>給料: 500</div>
          </div>
          <div className='mb-12 line-clamp-2'>
            私は家でベビーシッターの仕事を探しています.私は子供が大好きな人です.私が家にいたとき,私の叔母と叔父は私がみんなの世話をしていた赤ちゃđấんを持っていました.私は遊ぶ方法を知っていますdfdfsdgfnsdgbsghsifgnksfbnksflbnkf;gsrilgjrgho
          </div>
        </div>
      </div>
    </div>
  )
}
