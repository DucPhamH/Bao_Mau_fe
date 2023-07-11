import React from 'react'
import { FiClock } from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getPost } from '../../api/post.api'
import { convertDate, displayNum, isAxiosUnprocessableEntityError } from '../../utils/utils'
import { createRequest2 } from '../../api/request.api'
import { toast } from 'react-toastify'
import { GiPositionMarker } from 'react-icons/gi'
export default function JobDetail() {
  const { id } = useParams()
  // console.log(id)
  const { data } = useQuery({
    queryKey: ['post', id],
    queryFn: () => {
      return getPost(id)
    }
  })
  const post = data?.data
  // console.log(post)

  const setDay = (day) => {
    return day === true ? 'rgb(34 197 94 / var(--tw-text-opacity))' : 'black'
  }

  const newRequest = useMutation({
    mutationFn: (body) => createRequest2(body)
  })

  const onClick = () => {
    const body = {
      postID: id
    }
    newRequest.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        toast('リクエストを追加しちゃった !') // 。(18)data.data?.message
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError(error)) {
          // const formError = error.response?.data
          toast('リクエストを追加できなかった !') // 。(19)formError.message
        }
      }
    })
  }

  return (
    <>
      {post && (
        <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col font-itim'>
          <div className='w-4/5 bg-[#FFF] text-center mt-40 rounded-3xl p-8 text-6xl font-bold'>CHI TIẾT CÔNG VIỆC</div>
          <div className='w-[90%] bg-[#FFF] mt-12 mb-24 rounded-3xl p-32'>
            <div className='text-6xl font-bold text-center'>...</div>
            <div className='text-6xl mt-12 mb-8 text-center'>{post.data.title}</div>
            <div className='text-4xl'>
              <div className='flex justify-between mt-12 leading-relaxed'>
                <div>
                  <div className='flex flex-row items-center'>
                    <GiPositionMarker size={24} cl /> {post.data.address}
                  </div>
                  <br />
                  Tuổi : {post.data.age}&emsp;Kinh nghiệm: {post.data.experience}&emsp;Lương :{' '}
                  {displayNum(post.data.salary)}
                  <br />
                  Ngày tạo : {convertDate(post.data.createdAt)}&emsp;Ngày bắt đầu công việc :{' '}
                  {convertDate(post.data.dateStart)}
                  <br />
                  Ngôn ngữ : {post.data.language}
                </div>
                <div>
                  <button
                    onClick={onClick}
                    className='w-[24rem] h-[6rem] bg-[#7101FF] text-white rounded-[20px] hover:bg-[#2200ff]'
                  >
                    Ứng tuyển ngay
                  </button>
                </div>
              </div>
              <div className='mt-12'>Nôi dung công việc:</div>
              <div className='flex items-center flex-col'>
                <div className='border-2 border-black rounded-[20px] w-[95%] h-[20rem] mt-12 resize-none outline-none p-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                  {post.data.description}
                </div>
              </div>
              <div className='flex flex-row items-center mt-32'>
                <div className='text-6xl text-[#7101FF]'>
                  <FiClock />
                </div>
                <div className='ml-6'>Thời gian làm việc</div>
              </div>
              <div className='px-20'>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Thứ 2</div>
                  <div className='flex flex-row select-none'>
                    <div
                      style={{ color: setDay(post.data.mo_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      style={{ color: setDay(post.data.mo_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Thứ 3</div>
                  <div className='flex flex-row select-none'>
                    <div
                      style={{ color: setDay(post.data.tu_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      style={{ color: setDay(post.data.tu_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Thứ 4</div>
                  <div className='flex flex-row select-none'>
                    <div
                      key={1}
                      style={{ color: setDay(post.data.we_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      style={{ color: setDay(post.data.we_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Thứ 5</div>
                  <div className='flex flex-row select-none'>
                    <div
                      style={{ color: setDay(post.data.th_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      style={{ color: setDay(post.data.th_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Thứ 6</div>
                  <div className='flex flex-row select-none'>
                    <div
                      key={1}
                      style={{ color: setDay(post.data.fr_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      key={2}
                      style={{ color: setDay(post.data.fr_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Thứ 7</div>
                  <div className='flex flex-row select-none'>
                    <div
                      key={1}
                      style={{ color: setDay(post.data.sa_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      key={2}
                      style={{ color: setDay(post.data.sa_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                  <div>Chủ nhật</div>
                  <div className='flex flex-row select-none'>
                    <div
                      key={1}
                      style={{ color: setDay(post.data.su_morning) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Sáng</div>
                    </div>
                    <div
                      key={2}
                      style={{ color: setDay(post.data.su_afternoon) }}
                      className='flex flex-row mr-36 cursor-pointer '
                    >
                      <div className='mr-12'>
                        <BiCheckCircle />
                      </div>
                      <div>Chiều</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
