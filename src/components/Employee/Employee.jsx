import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { getAges, displayNum } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
export default function Employee({ employee, pathName }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(pathName)}
      className='border-2 font-itim rounded-xl border-black mx-12 my-12 hover:shadow-2xl cursor-pointer hover:bg-[#ACFFFC]'
    >
      <div className='flex ml-3 mt-2 w-[70vw]'>
        <div>
          <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center bg-white'>
            <img src='' alt='imageuser' />
          </div>
        </div>

        <div className='mx-[1vw] flex-col gap-6'>
          <div className='mt-2'>{employee.userID.name}</div>
          <div className='flex -ml-1.5 mt-5'>
            <GiPositionMarker size={20} />
            <div className='-mt-1 font-bold text-3xl'>{employee.userID.address}</div>
          </div>
          <div className='mt-5 flex'>
            <div className='w-[9vw] text-ellipsis overflow-hidden whitespace-nowrap'>
              年齢 : {getAges(employee.dateOB)}
            </div>
            <div className='w-[12vw] mr-[2vw] text-ellipsis overflow-hidden whitespace-nowrap'>
              実験 : {employee.experience}
            </div>
            <div className='w-[15vw] text-ellipsis overflow-hidden whitespace-nowrap'>
              給料（円） : {displayNum(employee.salary)}
            </div>
          </div>

          <div className='w-[40vw] mt-5 mb-12 line-clamp-2'>{employee.description}</div>
        </div>
      </div>
    </div>
  )
}
