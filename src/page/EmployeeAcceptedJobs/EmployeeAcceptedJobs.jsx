import { useQuery } from '@tanstack/react-query'

import Post3 from '../../components/Post3'
import { getAllPostUserAccept } from '../../api/post.api'
import Post4 from '../../components/Post4'

export default function EmployeeAcceptedJobs() {
  //   const { data } = useQuery({
  //     queryKey: ['requestAccept'],
  //     queryFn: () => {
  //       return getAllPostUserAccept()
  //     }
  //   })
  //   const userRequest = data?.data.data
  //   console.log(userRequest)
  return (
    <div className='xl:w-[80%] rounded-2xl grid grid-cols-3 w-[95%] mx-64 gap-4 mt-24'>
      <div className='col-span-3 flex justify-center'>
        <div className='w-[80%] flex font-extrabold justify-center p-8 bg-white mx-64 text-4xl  rounded-2xl'>契約</div>
      </div>
      <div className='buttons-below col-span-3 mx-32  bg-white h-fit rounded-2xl mt-8 mb-16'>
        <div className='flex flex-col gap-20 p-8'>
          {/* {userRequest &&
            userRequest.map((request) => (
              <div key={request._id}>
                <Post3 request={request} />
              </div>
            ))} */}
          <Post4 />
        </div>
      </div>
    </div>
  )
}
