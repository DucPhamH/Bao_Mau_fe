import React from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'
export default function EmployeeList() {
  const [isActive, setIsActive] = useState(false)
  const option1 = (event) => {
    setIsActive(true)
  }
  const option2 = (event) => {
    setIsActive(false)
  }
  return (
    <div className='w-full grid grid-cols-3 bg-[#DCEAFF]'>
      <div className='flex-col col-span-2 mx-16 mt-96'>
        <div className='flex justify-between'>
          <button
            className={
              isActive
                ? 'bg-[#7101ff] text-white font-itim text-4xl py-5 px-44 rounded-full'
                : 'bg-[#ffffff] font-itim text-4xl py-5 px-44 rounded-full'
            }
            onClick={option1}
          >
            ベビーシッター (219)
          </button>
          <button
            className={
              isActive
                ? 'bg-[#ffffff] font-itim text-4xl py-5 px-44 rounded-full'
                : 'bg-[#7101ff] text-white font-itim text-4xl py-5 px-44 rounded-full'
            }
            onClick={option2}
          >
            料理人 (219)
          </button>
        </div>
        <div className='w-full mt-10 bg-[#ffffff] rounded-full mb-96'>
          <div className='relative'>
            <FaSortAmountDownAlt className='absolute mt-16 ml-[5rem]' />
            <select id='sort' className='bg-[#D9D9D9] border rounded-full mt-12 ml-16 p-2.5 pr-56 font-mono'>
              <option selected value='A-Z'>
                &#160;&#160;&#160;&#160;&#160;A-Z
              </option>
              <option value='Z-A'>&#160;&#160;&#160;&#160;&#160;Z-A</option>
            </select>
          </div>
          <div></div>
        </div>
      </div>
      <div className='col-span-1 mx-20'>
        {/* chỉnh sửa tiếp */}
        {/*  */}
        <Sidebar></Sidebar>
        {/*  */}
        {/*  */}
      </div>
    </div>
  )
}
