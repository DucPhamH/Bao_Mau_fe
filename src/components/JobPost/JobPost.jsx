import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { getAges, displayNum } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
export default function JobPost() {
  // { employee, pathName }
  const navigate = useNavigate()
  return (
    <div
      onClick={() => alert('1')}
      className='border-2 font-itim rounded-xl border-black mx-12 my-12 hover:shadow-2xl cursor-pointer hover:bg-[#ACFFFC]'
    >
      <div className='flex ml-3 mt-2'>
        <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center bg-white'>
          <img
            src=''
            // {employee.userID.image}
            alt='imageuser'
          />
        </div>
        <div className='ml-[1vw]'>
          <div className='flex-col gap-6'>
            <div className='mt-2'>1歳の赤ちゃんの世話を探しています{/* {employee.userID.name} */}</div>
            <div className='flex -ml-1.5 mt-5'>
              <GiPositionMarker size={20} />
              <div className='-mt-1 font-bold text-3xl'>東京{/* {employee.userID.address} */}</div>
            </div>
            <div className='mt-5 flex'>
              <div className='w-[7vw] text-ellipsis overflow-hidden whitespace-nowrap'>
                年齢 :20{/* {getAges(employee.dateOB)} */}
              </div>
              <div className='w-[12vw] mr-[2vw] text-ellipsis overflow-hidden whitespace-nowrap'>
                実験 :2 năm kinh nghiệm{/* {employee.experience} */}
              </div>
              <div className='w-[12vw] text-ellipsis overflow-hidden whitespace-nowrap'>
                給料（円） :10000{/* {displayNum(employee.salary)} */}
              </div>
            </div>
            <div className='mt-5'>勤務開始日 :</div>

            <div className='w-[30vw] mt-5 mb-12 line-clamp-2'>
              私の赤ちゃんは男の子で、少し多動で、従順です。歩けるし、話せるし、食べて寝れる。彼女の熱心で愛情深い赤ちゃんが必要です。お昼はお母さんと子どもたちとランチ。
              {/* {employee.description} */}
            </div>
          </div>
        </div>
        <div className='flex mb-12 ml-[2vw]'>
          <button
            onClick={(e) => {
              e.stopPropagation()
              alert('2')
            }}
            className='bg-[#C226F9] text-white rounded-3xl self-end px-[2vw] py-2 hover:bg-green-600'
          >
            詳細情報
          </button>
        </div>
      </div>
    </div>
  )
}
