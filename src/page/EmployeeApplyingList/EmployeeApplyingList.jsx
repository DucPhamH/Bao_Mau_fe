import { useParams } from 'react-router-dom'
import Post from '../../components/Post'
import { useQuery } from '@tanstack/react-query'
import { getRequestEmployee } from '../../api/request.api'

export default function EmployeeApplyingList() {
  const { id } = useParams()
  console.log(id)

  const { data } = useQuery({
    queryKey: ['employeeRequest', id],
    queryFn: () => {
      return getRequestEmployee(id)
    }
  })
  const employeeRequest = data?.data.data
  console.log(employeeRequest)
  return (
    <div className='xl:w-[80%] rounded-2xl grid grid-cols-3 w-[95%] mx-64 gap-4 mt-24'>
      <div className='col-span-3 flex justify-center'>
        <div className='w-[80%] flex font-extrabold justify-center p-8 bg-white mx-64 text-4xl  rounded-2xl'>
          ベビーシッターアプリケーションのリスト
        </div>
      </div>
      <div className='buttons-below col-span-3 mx-32  bg-white h-fit rounded-2xl mt-8 mb-16'>
        <div className='flex flex-col gap-20 p-8'>
          {employeeRequest &&
            employeeRequest.map((request) => (
              <div key={request._id}>
                <Post request={request} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
