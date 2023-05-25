import React from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import Employee from '../../components/Employee'
import Searchbar from '../../components/Searchbar/Searchbar'
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
      <div className='col-span-2 mx-16 mt-32'>
        <div className='grid grid-cols-8'>
          <button
            className={
              isActive
                ? 'bg-[#7101ff] text-white font-itim text-4xl col-span-4 py-5 rounded-full'
                : 'bg-[#ffffff] font-itim text-4xl py-5 col-span-4 rounded-full'
            }
            onClick={option1}
          >
            ベビーシッター (219)
          </button>
          <button
            className={
              isActive
                ? 'bg-[#ffffff] font-itim text-4xl col-start-6 col-span-3 py-5 rounded-full'
                : 'bg-[#7101ff] text-white font-itim text-4xl col-start-6 col-span-3 py-5 rounded-full'
            }
            onClick={option2}
          >
            料理人 (219)
          </button>
        </div>
        <div className='w-full mt-10 bg-[#ffffff] rounded-xl mb-96'>
          <div className='relative'>
            <FaSortAmountDownAlt className='absolute mt-16 ml-[5rem]' />
            <select
              defaultValue={'A-Z'}
              id='sort'
              className='bg-[#D9D9D9] border rounded-full mt-12 ml-16 p-2.5 pr-56 font-mono'
            >
              <option value='A-Z'>&#160;&#160;&#160;&#160;&#160;A-Z</option>
              <option value='Z-A'>&#160;&#160;&#160;&#160;&#160;Z-A</option>
            </select>
          </div>
          <div className='h-[70rem] overflow-auto'>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
          </div>
        </div>
      </div>
      <div className='col-span-1 mx-20'>
        {/* chỉnh sửa tiếp */}
        {/*  */}
        <Searchbar></Searchbar>
        {/*  */}
        {/*  */}
      </div>
    </div>
  )
}
