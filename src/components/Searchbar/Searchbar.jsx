import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { searchSchema } from '../../utils/rules'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { isEmpty, omitBy } from 'lodash'

export default function Searchbar({ queryConfig }) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(searchSchema)
  })

  const onSubmit = handleSubmit((data) => {
    //console.log(data)
    // const dataConfig = omitBy(
    //   {
    //     ...data
    //   },
    //   isEmpty
    // )
    // console.log(dataConfig)
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
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl px-5 py-2'
          type='text'
          id='age'
          name='age'
          {...register('age')}
        />

        <div className='w-inherit flex justify-center items-center'>
          <button className='bg-[#C226F9] my-10 text-white px-32 py-3 rounded-full'>検索</button>
        </div>
      </form>
    </div>
  )
}
