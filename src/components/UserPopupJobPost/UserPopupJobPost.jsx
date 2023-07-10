import { FaLocationArrow } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { createRequest } from '../../api/request.api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
export default function UserPopupJobPost({ postUser, pathName, employeeID }) {
  const navigate = useNavigate()
  const newRequest = useMutation({
    mutationFn: (body) => createRequest(body)
  })

  console.log(employeeID)

  const onClick = () => {
    const body = {
      postID: postUser._id,
      employeeID: employeeID
    }
    newRequest.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast('リクエストを追加しちゃった !') // 。(13)data.data?.message
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストを追加できなかった !') // 。(14)formError.message
        }
      }
    })
  }

  return (
    <div className='border-2 border-black flex rounded-2xl mb-14 font-itim hover:bg-orange-100'>
      <div onClick={() => navigate(pathName)} className='ml-8 cursor-pointer mt- w-[70%]'>
        <div className='line-clamp-1'>{postUser.title}</div>
        <div className='line-clamp-2 mt-2 text-[#A1A1A1]'>{postUser.description}</div>
      </div>
      <div onClick={onClick} className='flex ml-8 justify-center items-center scale-[200%]'>
        <FaLocationArrow className='text-[#2D2A9C] cursor-pointer hover:text-green-700' />
      </div>
    </div>
  )
}
