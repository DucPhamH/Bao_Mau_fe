import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { convertDate, count, displayNum, isAxiosUnprocessableEntityError } from '../../utils/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { acceptRequest, deleteRequestUser } from '../../api/request.api'
import { queryClient } from '../..'
import { createPayment } from '../../api/payment.api'

const Post2 = ({ request }) => {
  const deleteRequestUsers = useMutation({
    mutationFn: (body) => deleteRequestUser(body)
  })

  const acceptRequests = useMutation({
    mutationFn: (body) => acceptRequest(body)
  })

  const createPayments = useMutation({
    mutationFn: (body) => createPayment(body)
  })

  // console.log(request._id)
  // console.log(request.postID)

  // console.log(count(request.postID))

  const objectCount = {
    count: count(request.postID),
    totalPrice: count(request.postID) * 4 * request.postID.salary,
    requestID: request._id
  }

  console.log(objectCount)

  const onClickDelete = () => {
    const body = {
      postID: request.postID
    }
    deleteRequestUsers.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast('リクエストを断っちゃった。(5)') //data.data?.message
        queryClient.invalidateQueries({ queryKey: ['userRequest'] })
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストが断れなかった。(6)') //formError.message
        }
      }
    })
  }

  const onClickAccept = () => {
    const body = {
      postID: request.postID,
      employeeID: request.employeeID
    }
    acceptRequests.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast('リクエストを受け入れちゃった。(7)') //data.data?.message
        queryClient.invalidateQueries({ queryKey: ['userRequest'] })
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストが受け入れられなかった。(8)') //formError.message
        }
      }
    })
    createPayments.mutate(objectCount, {
      onSuccess: (data) => {
        console.log(data)
        // toast(data.data?.message)
        // queryClient.invalidateQueries({ queryKey: ['employeeRequest'] })
      },
      onError: (error) => {
        console.log(error)
        // if (isAxiosUnprocessableEntityError(error)) {
        //   const formError = error.response?.data
        //   toast(formError.message)
        // }
      }
    })
  }

  return (
    <div
      className='flex flex-row items-center w-full border border-black rounded-2xl p-8 gap-8'
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
    >
      <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center mb-20 ml-3'>
        <img src={request.postID.userID.image} alt='imageuser' />
      </div>
      <div className='max-w-[60rem] ml-5'>
        <div className='text-[20px]'>{request.postID.title}</div>
        <div className='flex text-[20px] items-center'>
          <GiPositionMarker size={20} />
          <div className='ml-1'>{request.postID.address}</div>
        </div>
        <div className='flex gap-8 text-[16px] mt-4'>
          <div>年齢: {request.postID.age}</div>
          <div>実験: {request.postID.experience}</div>
          <div>給料: {displayNum(request.postID.salary)}</div>
        </div>

        <div className='text-[16px] mt-4'>勤務開始日: {convertDate(request.postID.dateStart)}</div>
        <div className='text-[16px] mt-4'>{request.postID.description}</div>
      </div>
      <div className='flex ml-30 flex-col gap-20 ml-auto'>
        <button
          onClick={onClickAccept}
          className='bg-[#41E309] mx-10 text-white text-[20px] p-1 rounded-[20px] w-[14rem] border-2 border-black shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_1px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'
        >
          アクセス
        </button>
        <button
          onClick={onClickDelete}
          className='bg-[#E72253] mx-10 text-white text-[20px] p-1 rounded-[20px] w-[14rem] border-2 border-black shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_1px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'
        >
          キャンセル
        </button>
      </div>
    </div>
  )
}

export default Post2
