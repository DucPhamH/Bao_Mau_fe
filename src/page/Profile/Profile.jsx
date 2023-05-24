import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { currentAccount } from '../../api/auth.api'

export default function Profile() {
  const { data: userData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return currentAccount()
    }
  })
  const user = userData?.data
  console.log(user)
  return (
    <div className='w-full bg-[#DCEAFF]'>
      <div className='mx-16'>
        <button className='bg-[#FED5D5] font-itim px-8 rounded-full py-1 border border-black float-right'>
          Update
        </button>
        <div>abcd</div>
      </div>
    </div>
  )
}
