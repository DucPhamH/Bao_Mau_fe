import React from 'react'
import { useForm } from 'react-hook-form'

import { createSearchParams, useNavigate } from 'react-router-dom'

export default function Searchbar({ queryConfig }) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({})

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: '/employeelist',
      search: createSearchParams({
        ...queryConfig,
        ...data
      }).toString()
    })
  })
  return (
    <div className='mt-[15.5rem] w-full bg-[#FFFFFF] rounded-xl'>
      <form className='mx-12 pt-12' onSubmit={onSubmit} noValidate>
        <label htmlFor='experience'>経験</label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='experience'
          name='querySearch'
          {...register('querySearch')}
        />

        <label htmlFor='degree'>給料(まで)</label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='degree'
          name='salary'
          {...register('salary')}
        />

        <label htmlFor='age'>年齢(まで)</label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='age'
          name='age'
          {...register('age')}
        />

        <div className='w-inherit flex justify-center items-center'>
          <button className='bg-[#C226F9] my-10 text-white px-32 hover:bg-blue-400 py-3 rounded-full'>検索</button>
        </div>
      </form>
    </div>
  )
}
