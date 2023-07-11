import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPayment } from '../../api/payment.api'
import PayPalButton from './PayPalButton'
import { BiCheckCircle } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi'
import { convertDate, displayNum } from '../../utils/utils'

export default function Payment() {
  const { id } = useParams()
  console.log(id)
  const { data } = useQuery({
    queryKey: ['payment', id],
    queryFn: () => {
      return getPayment(id)
    }
  })
  const payment = data?.data.data
  console.log(payment)

  const setDay = (day) => {
    return day === true ? 'rgb(34 197 94 / var(--tw-text-opacity))' : 'black'
  }

  return (
    <div>
      {payment && (
        <div>
          <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
            <div className='w-4/5 bg-[#FFF] text-center mt-36 rounded-3xl p-8 text-6xl font-bold'>契約の詳細</div>
            <div className='flex w-[95vw] h-[150vh] m-auto gap-16 mt-12'>
              <div className='flex flex-auto w-[20vw]'>
                <div className='flex-1 m-5 p-12 bg-[#FFF] rounded-[20px] border-[1px] border-black'>
                  <div className='flex flex-row'>
                    <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-[12rem] h-[12rem] flex justify-center items-center '>
                      <img src={payment.requestID.postID.userID.image} alt='imageuser' />
                    </div>
                    <div className='flex flex-col justify-center gap-6 ml-5'>
                      <div className='text-5xl'>{payment.requestID.postID.userID.name}</div>
                      <div className='text-[20px]'>{payment.requestID.postID.userID.email}</div>
                    </div>
                    <div className='ml-auto w-[15rem] text-[20px]'>{payment.requestID.postID.userID.address}</div>
                  </div>
                  <div className='flex items-center bg-gradient-to-b from-[#6937AAEB]/[.92] to-[#130722EB]/[.92] h-[20rem] rounded-[20px] text-white text-[20px] p-10 mt-10'>
                    <div className='flex flex-col gap-4'>
                      <div>契約のコード</div>
                      <div>{payment._id}</div>
                      <div>勤務開始日 : {convertDate(payment.requestID.postID.dateStart)}</div>
                    </div>
                    <div className='ml-auto flex flex-col gap-6 w-[16rem]'>
                      <div>受信機:</div>
                      <div>{payment.requestID.employeeID.userID.name}</div>
                      <div>{payment.requestID.employeeID.userID.address}</div>
                    </div>
                  </div>
                  <div className='flex flex-row items-center mt-32'>
                    <div className='text-6xl text-[#7101FF]'>
                      <FiClock />
                    </div>
                    <div className='ml-6'>作業時間</div>
                  </div>
                  <div className='px-20'>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>月曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          style={{ color: setDay(payment.requestID.postID.mo_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(payment.requestID.postID.mo_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>火曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          style={{ color: setDay(payment.requestID.postID.tu_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(payment.requestID.postID.tu_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>水曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(payment.requestID.postID.we_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(payment.requestID.postID.we_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>木曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          style={{ color: setDay(payment.requestID.postID.th_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          style={{ color: setDay(payment.requestID.postID.th_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>金曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(payment.requestID.postID.fr_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          key={2}
                          style={{ color: setDay(payment.requestID.postID.fr_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>土曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(payment.requestID.postID.sa_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          key={2}
                          style={{ color: setDay(payment.requestID.postID.sa_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between border-b-2 border-black p-6'>
                      <div>日曜日</div>
                      <div className='flex flex-row select-none'>
                        <div
                          key={1}
                          style={{ color: setDay(payment.requestID.postID.su_morning) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午前</div>
                        </div>
                        <div
                          key={2}
                          style={{ color: setDay(payment.requestID.postID.su_afternoon) }}
                          className='flex flex-row mr-36 cursor-pointer '
                        >
                          <div className='mr-12'>
                            <BiCheckCircle />
                          </div>
                          <div>午後</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-16 mx-6'>
                    <div className='flex flex-row p-2 border-y-[1px] border-black gap-20 text-center'>
                      <div className='ml-12 w-48'>ワークシフト数</div>
                      <div className='w-64'>価額/ワークシフト数</div>
                      <div className='ml-auto mr-20 w-52'>総費用</div>
                    </div>
                    <div className='flex flex-row p-2 gap-20 mt-2 text-center items-center'>
                      <div className='ml-12 w-48 flex items-center justify-center'>
                        <div className='w-20 bg-[#D9D9D9] rounded-[10px] p-3'>{payment.count}</div>
                      </div>
                      <div className='w-64 flex items-center justify-center'>
                        <div className='w-48 bg-[#D9D9D9] rounded-[10px] p-3'>
                          {displayNum(payment.requestID.postID.salary)} ¥
                        </div>
                      </div>
                      <div className='ml-auto mr-20 w-52 flex items-center justify-center'>
                        <div className='w-48 bg-[#D9D9D9] rounded-[10px] p-3'>{displayNum(payment.totalPrice)} ¥</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-16'>
                <div className='flex-1 m-5 bg-[#FFF] rounded-[20px] border-[1px] border-black p-10'>
                  <div className='text-center text-4xl'>他の情報</div>
                  <div className='flex flex-col gap-2 text-[18px] mt-12'>
                    <div className='flex flex-row'>
                      <div>仕事:</div>
                      <div className='ml-auto'>{payment.requestID.postID.title}</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>仕事を受ける人:</div>
                      <div className='ml-auto'>{payment.requestID.employeeID.userID.name}</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>アドレス:</div>
                      <div className='ml-auto'>{payment.requestID.employeeID.userID.address}</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>毎週の仕事のワークシフト数:</div>
                      <div className='ml-auto'>{payment.count} ワークシフト数</div>
                    </div>
                    <div className='flex flex-row'>
                      <div>価額:</div>
                      <div className='ml-auto'>{displayNum(payment.requestID.postID.salary)} ¥</div>
                    </div>
                    <div>仕事の詳細:</div>
                    <div>{payment.requestID.postID.description}</div>
                  </div>
                </div>
                <div className='flex-1 m-5 bg-[#FFF] rounded-[20px] border-[1px] border-black p-10'>
                  <div className='text-5xl m-6'>総費用 (¥)</div>
                  <div className='text-7xl m-6 mt-20'>{displayNum(payment.totalPrice)} ¥</div>
                  <div className='text-4xl m-6'>支払い</div>
                  {payment.status === 1 ? (
                    <div className='flex flex-col items-center gap-6 mt-20 mx-8 border-[1px] border-black rounded-[20px] p-10'>
                      <div className='text-[#37b349] text-9xl'>
                        <BiCheckCircle />
                      </div>
                      <div className=''>支払っちゃった。</div>
                    </div>
                  ) : (
                    <div className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-[17rem] rounded-[20px] text-black text-[20px] p-10 mt-10'>
                      <PayPalButton payment={payment} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
