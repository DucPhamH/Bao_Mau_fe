import { useQuery } from '@tanstack/react-query'
import Post4 from '../../components/Post4'
import { getAcceptRequets } from '../../api/request.api'

export default function EmployeeAcceptedJobs() {
  const { data } = useQuery({
    queryKey: ['getRequestAccept'],
    queryFn: () => {
      return getAcceptRequets()
    }
  })
  const userRequest = data?.data.data
  console.log(userRequest)
  return (
    <div className='xl:w-[80%] rounded-2xl grid grid-cols-3 w-[95%] mx-64 gap-4 mt-24 font-itim'>
      <div className='col-span-3 flex justify-center'>
        <div className='w-[80%] flex font-extrabold justify-center p-8 bg-white mx-64 text-6xl rounded-2xl'>
          HỢP ĐỒNG
        </div>
      </div>
      {userRequest && (
        <div className='buttons-below col-span-3 mx-32  bg-white h-fit rounded-2xl mt-8 mb-16'>
          <div className='flex flex-col gap-20 p-8'>
            {userRequest.length === 0 ? (
              <div className='text-black text-[24px] text-center'>Không có hợp đồng nào !</div>
            ) : (
              userRequest.map((request) => (
                <div key={request._id}>
                  <Post4 request={request} />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
