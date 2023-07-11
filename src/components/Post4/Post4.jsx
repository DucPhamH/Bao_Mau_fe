import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { convertDate, displayNum, isAxiosUnprocessableEntityError } from '../../utils/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { acceptCancelRequest } from '../../api/request.api'
import { queryClient } from '../..'
import { useNavigate } from 'react-router-dom'

const Post4 = ({ request }) => {
  const navigate = useNavigate()
  const acceptRequestCancels = useMutation({
    mutationFn: (body) => acceptCancelRequest(body)
  })

  const onClickAccept = () => {
    const body = {
      postID: request.postID,
      employeeID: request.employeeID
    }
    acceptRequestCancels.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast('リクエストを受け入れちゃった !') // 。(11)data.data?.message
        queryClient.invalidateQueries({ queryKey: ['getRequestAccept'] })
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストが受け入れられなかった !') // 。(12)formError.message
        }
      }
    })
  }

  return (
    <div
      className='flex flex-row items-center w-full border border-black rounded-2xl p-8 gap-8 hover:bg-[#ACFFFC]'
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
    >
      <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center mb-20 ml-3'>
        <img src={request.postID.userID.image} alt='imageuser' />
      </div>
      <div className='max-w-[60rem] ml-5 cursor-pointer'>
        <div
          className='text-[28px] font-semibold'
          onClick={() => {
            navigate(`/listofavailablejobs/${request.postID._id}`)
          }}
        >
          {request.postID.title}
        </div>
        <div className='flex text-[20px] items-center'>
          <GiPositionMarker size={24} />
          <div className='ml-1 mt-3'>{request.postID.address}</div>
        </div>
        <div className='flex gap-8 text-[16px] mt-4'>
          <div>Tuổi : {request.postID.age}</div>
          <div>Kinh nghiệm : {request.postID.experience} năm</div>
          <div>Lương : {displayNum(request.postID.salary)} yên</div>
        </div>

        <div className='text-[16px] mt-4'>Ngày bắt đầu công việc : {convertDate(request.postID.dateStart)}</div>
        <div className='text-[16px] mt-4'>{request.postID.description}</div>
      </div>
      <div className='flex ml-30 flex-col gap-20 ml-auto'>
        {request.status === 2 ? (
          ''
        ) : (
          <button
            onClick={onClickAccept}
            className='bg-[#7037d1] mx-10 text-white text-[20px] p-1 rounded-[20px] w-[14rem] border-2 border-black shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_1px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'
          >
            Xác nhận hủy
          </button>
        )}
      </div>
    </div>
  )
}

export default Post4
