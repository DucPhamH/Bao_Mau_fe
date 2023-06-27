import React from 'react'
import { GiPositionMarker } from 'react-icons/gi'
import { count, displayNum, getAges, isAxiosUnprocessableEntityError } from '../../utils/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { queryClient } from '../..'
import { acceptRequest, deleteRequestEmployee } from '../../api/request.api'
import { createPayment } from '../../api/payment.api'

const Post = ({ request }) => {
  const deleteRequestEmployees = useMutation({
    mutationFn: (body) => deleteRequestEmployee(body)
  })

  const acceptRequests = useMutation({
    mutationFn: (body) => acceptRequest(body)
  })

  const createPayments = useMutation({
    mutationFn: (body) => createPayment(body)
  })

  console.log(request)
  const objectCount = {
    count: count(request.postID),
    totalPrice: count(request.postID) * 4 * request.postID.salary,
    requestID: request._id
  }

  console.log(objectCount)

  const onClickDelete = () => {
    const body = {
      postID: request.postID,
      employeeID: request.employeeID
    }
    deleteRequestEmployees.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast('リクエストを断っちゃった。(1)') //data.data?.message
        queryClient.invalidateQueries({ queryKey: ['employeeRequest'] })
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストが断れなかった。(2)') //formError.message
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
        toast('リクエストを受け入れちゃった。(3)') //data.data?.message
        queryClient.invalidateQueries({ queryKey: ['employeeRequest'] })
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストが受け入れられなかった。(4)') //formError.message
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
      className='w-full border border-black rounded-2xl p-8 flex  gap-8 post'
      style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
    >
      <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center '>
        <img src={request.employeeID.userID.image} alt='imageuser' />
      </div>
      <div>
        <div className='text-[20px]'>{request.employeeID.userID.name}</div>
        <div className='flex text-[20px] items-center'>
          <GiPositionMarker size={20} />
          <div className='ml-1'>{request.employeeID.userID.address}</div>
        </div>
        <div className='flex gap-8 text-[16px] mt-4'>
          <div>年齢: {getAges(request.employeeID.dateOB)}</div>
          <div>実験: {request.employeeID.experience}</div>
          <div>給料: {displayNum(request.employeeID.salary)}</div>
        </div>

        <div className='text-[16px] mt-4'>{request.employeeID.description}</div>
      </div>
      <div className='buttons flex !ml-60'>
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

export default Post
