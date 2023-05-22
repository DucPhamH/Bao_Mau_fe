// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { currentAccount } from '../../api/auth.api'

export default function Profile() {
  // const { data: userData, isLoading } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => {
  //     return currentAccount()
  //   }
  // })
  // const user = userData?.data
  // console.log(user)
  return (
    <div className='w-full flex bg-[#DCEAFF]'>
      <div className='flex mx-16 mt-32'>
        <div className=''>profile</div>
        <div>profile2</div>
      </div>
    </div>
  )
}
