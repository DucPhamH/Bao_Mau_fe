import { useQuery } from '@tanstack/react-query'
import Post2 from '../../components/Post2'
import { getRequestUser } from '../../api/request.api'

export default function UserRequestsList() {
  const { data } = useQuery({
    queryKey: ['userRequest'],
    queryFn: () => {
      return getRequestUser()
    }
  })
  const userRequest = data?.data.data
  console.log(userRequest)
  return (
    <div className='xl:w-[80%] rounded-2xl grid grid-cols-3 w-[95%] mx-64 gap-4 mt-24 font-itim'>
      <div className='col-span-3 flex justify-center'>
        <div className=' w-[80%] flex font-extrabold justify-center p-8 bg-white mx-64 text-6xl  rounded-2xl'>
          DANH SÁCH CÔNG VIỆC ĐƯỢC TUYỂN DỤNG
        </div>
      </div>
      {userRequest && (
        <div className='buttons-below col-span-3 mx-32 bg-white h-fit rounded-2xl mt-8 mb-16'>
          <div className='flex flex-col gap-20 p-8'>
            {userRequest.length === 0 ? (
              <div className='text-black text-[24px] text-center'>Không có công việc nào !</div>
            ) : (
              userRequest.map((request) => (
                <div key={request._id}>
                  <Post2 request={request} />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
