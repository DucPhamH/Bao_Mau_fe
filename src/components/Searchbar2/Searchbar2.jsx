import React from 'react'
import { useForm } from 'react-hook-form'

import { createSearchParams, useNavigate } from 'react-router-dom'

export default function Searchbar({ queryConfig }) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({})

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: '/listofavailablejobs',
      search: createSearchParams({
        ...queryConfig,
        ...data
      }).toString()
    })
  })
  return (
    <div className='mt-[15.5rem] w-full bg-[#FFFFFF] rounded-xl'>
      <form className='mx-12 pt-12 font-itim ' onSubmit={onSubmit} noValidate>
        <label htmlFor='experience' className='text-3xl'>
          Kinh nghiệm (Năm)
        </label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='experience'
          name='querySearch'
          {...register('querySearch')}
        />

        <label htmlFor='degree' className='text-3xl'>
          Lương ()
        </label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='degree'
          name='salary'
          {...register('salary')}
        />

        <label htmlFor='age' className='text-3xl'>
          Tuổi ()
        </label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='age'
          name='queryDate'
          {...register('queryDate')}
        />

        <div className='w-inherit flex justify-center items-center text-3xl'>
          <button className='bg-[#C226F9] my-10 text-white px-32 hover:bg-blue-400 py-3 rounded-full'>Tìm kiếm</button>
        </div>
      </form>
    </div>
  )
}
