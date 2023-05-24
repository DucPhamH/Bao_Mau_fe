import React from 'react'
import { useState } from 'react'
import { FiClock } from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi'
export default function JobDetail() {
  const [buttonColors, setButtonColors] = useState(Array(14).fill('black'))

  const handleClick = (index) => {
    const newButtonColors = [...buttonColors]
    newButtonColors[index] = buttonColors[index] === 'black' ? 'rgb(34 197 94 / var(--tw-text-opacity))' : 'black'
    setButtonColors(newButtonColors)
  }

  return (
    <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
      <div className='w-4/5 bg-[#FFF] text-center mt-40 rounded-3xl p-8 text-6xl font-bold'>仕事の詳細</div>
      <div className='w-[90%] bg-[#FFF] mt-12 mb-24 rounded-3xl p-32'>
        <div className='text-6xl font-bold text-center'>...</div>
        <div className='text-6xl mt-12 text-center'>ベビーシッター</div>
        <div className='text-4xl'>
          <div className='flex justify-between mt-12 leading-relaxed'>
            <div>
              東京
              <br />
              年齢: 25-55&emsp;経験: 1-4年&emsp;給料: 500
              <br />
              作成日: 11.04.2023&emsp;勤務開始日: 18.04.2023
              <br />
              言語: 日本語、英語
            </div>
            <div>
              <button className='w-[24rem] h-[6rem] bg-[#7101FF] text-white rounded-[20px]'>応募する</button>
            </div>
          </div>
          <div className='mt-12'>仕事の詳細情報:</div>
          <div className='flex items-center flex-col'>
            <textarea className='border-2 border-black rounded-[20px] w-[95%] h-[20rem] mt-12 resize-none outline-none p-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></textarea>
          </div>
          <div className='flex flex-row items-center mt-32'>
            <div className='text-6xl text-[#7101FF]'>
              <FiClock />
            </div>
            <div className='ml-6'>作業時間</div>
          </div>
          <div className='px-20'>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>月曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  style={{ color: buttonColors[1] }}
                  onClick={() => handleClick(1)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  style={{ color: buttonColors[2] }}
                  onClick={() => handleClick(2)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>火曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  style={{ color: buttonColors[3] }}
                  onClick={() => handleClick(3)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  style={{ color: buttonColors[4] }}
                  onClick={() => handleClick(4)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>水曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  key={1}
                  style={{ color: buttonColors[5] }}
                  onClick={() => handleClick(5)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  style={{ color: buttonColors[6] }}
                  onClick={() => handleClick(6)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>木曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  style={{ color: buttonColors[7] }}
                  onClick={() => handleClick(7)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  style={{ color: buttonColors[8] }}
                  onClick={() => handleClick(8)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>土曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  key={1}
                  style={{ color: buttonColors[9] }}
                  onClick={() => handleClick(9)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  key={2}
                  style={{ color: buttonColors[10] }}
                  onClick={() => handleClick(10)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>日曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  key={1}
                  style={{ color: buttonColors[11] }}
                  onClick={() => handleClick(11)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  key={2}
                  style={{ color: buttonColors[12] }}
                  onClick={() => handleClick(12)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between border-b-2 border-black p-6'>
              <div>月曜日</div>
              <div className='flex flex-row select-none'>
                <div
                  key={1}
                  style={{ color: buttonColors[13] }}
                  onClick={() => handleClick(13)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午前</div>
                </div>
                <div
                  key={2}
                  style={{ color: buttonColors[14] }}
                  onClick={() => handleClick(14)}
                  className='flex flex-row mr-36 cursor-pointer hover:text-green-500'
                >
                  <div className='mr-12'>
                    <BiCheckCircle />
                  </div>
                  <div>午後</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
