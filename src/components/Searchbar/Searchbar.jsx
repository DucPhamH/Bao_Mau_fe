import React from 'react'

export default function Searchbar() {
  return (
    <div className='mt-[15.5rem] w-full bg-[#FFFFFF] rounded-xl'>
      <div className='p-5'></div>
      <form>
        <div className='ml-12'>
          <label htmlFor='experience'>経験</label>
          <br />
          <input className='my-12 pr-64 bg-[#D9D9D9] rounded-xl px-5 py-2' type='text' id='experience' name='experience' />
          <br />
          <label htmlFor='degree'>給料 ( まで)</label>
          <br />
          <input className='my-12 pr-64 bg-[#D9D9D9] rounded-xl px-5 py-2' type='text' id='degree' name='degree' />
          <br />
          <label htmlFor='age'>年齢 ( まで)</label>
          <br />
          <input className='my-12 pr-64 bg-[#D9D9D9] rounded-xl px-5 py-2' type='text' id='age' name='age' />
        </div>

        <br />
        <div className='w-inherit flex justify-center items-center'>
          <button className='bg-[#C226F9] my-10 text-white px-32 py-3 rounded-full'>検索</button>
        </div>
      </form>
    </div>
  )
}
