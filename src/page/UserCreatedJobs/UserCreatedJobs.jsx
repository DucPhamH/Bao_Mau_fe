import React from 'react'
import CreatedJobsPost from '../../components/CreatedJobsPost'
import { useQuery } from '@tanstack/react-query'
import { getAllPostUser } from '../../api/post.api'

export default function UserCreatedJobs() {
  const { data } = useQuery({
    queryKey: ['postUsers'],
    queryFn: () => {
      return getAllPostUser()
    }
  })
  const postUsers = data?.data.data
  console.log(postUsers)
  return (
    <div className=' bg-black flex justify-center items-center flex-col'>
      <div className='w-[50%] bg-[#FFF] text-center mt-40 rounded-3xl p-8 text-5xl font-bold'>
        あなたが作成した仕事リスト
      </div>
      <div className='w-[60%] bg-[#FFF] mt-12 mb-24 rounded-3xl flex items-center justify-center'>
        <div className='w-[100%] h-[70rem] overflow-y-auto overflow-hidden'>
          {postUsers &&
            postUsers.map((postUser) => (
              <div key={postUser._id}>
                <CreatedJobsPost postUser={postUser} pathName={`${postUser._id}`} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
