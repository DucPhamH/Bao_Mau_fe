import React from 'react'

export default function Searchbar() {
  return (
    <div className='mt-[15.5rem] w-full bg-[#FFFFFF] rounded-xl'>
      <form className='mx-12 pt-12'>
        <label htmlFor='experience'>経験</label>

        <input
          className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2'
          type='text'
          id='experience'
          name='experience'
        />

        <label htmlFor='degree'>給料(まで)</label>

        <input className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl py-2' type='text' id='degree' name='degree' />

        <label htmlFor='age'>年齢(まで)</label>

        <input className='my-12 indent-10 w-full bg-[#D9D9D9] rounded-xl px-5 py-2' type='text' id='age' name='age' />

        <div className='w-inherit flex justify-center items-center'>
          <button className='bg-[#C226F9] my-10 text-white px-32 py-3 rounded-full'>検索</button>
        </div>
      </form>
    </div>
  )
}
