import React from 'react'
import { BsDot } from 'react-icons/bs'
import { GiPositionMarker } from 'react-icons/gi'
import { BsPersonFill } from 'react-icons/bs'
import { BsCardText } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getEmployee } from '../../api/employee.api'
import { getAges, displayNum, convertDate } from '../../utils/utils'
import UserPopupJobPost from '../../components/UserPopupJobPost/UserPopupJobPost'
import { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import { getAllPostSend } from '../../api/post.api'

export default function EmployeeInfo() {
  const { id } = useParams()
  // console.log(id)
  const { data } = useQuery({
    queryKey: ['employee', id],
    queryFn: () => {
      return getEmployee(id)
    }
  })
  const employee = data?.data
  // console.log(employee)

  const { data: postData } = useQuery({
    queryKey: ['postdata', id],
    queryFn: () => {
      return getAllPostSend(id)
    }
  })
  const postUsers = postData?.data.data
  console.log(postUsers)

  ///////////////////////////////////
  ///////////////////////////////////
  //User posts popup
  const [userPopupPostsList, setPopup] = useState(false)

  const handleButtonClick = (e) => {
    e.stopPropagation()
    setPopup(!userPopupPostsList)
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopup(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  ///////////////////////////////////
  ///////////////////////////////////
  ///////////////////////////////////
  ///////////////////////////////////

  return (
    <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
      {employee && (
        <div className='w-[90%] bg-[#FFF] mt-12 mb-24 rounded-3xl p-32'>
          <div className='text-4xl leading-relaxed'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-row items-center'>
                <div className='text-[12rem]'>
                  <img src={employee.data.userID.image} alt='imageuser' className='w-[20rem] h-[20rem]' />
                </div>
                <div className='ml-20 font-bold'>
                  <div className='flex flex-row items-center'>
                    <div>
                      <div>{employee.data.userID.name}</div>
                    </div>
                    <div className='flex flex-row items-center ml-12'>
                      <div className='text-[#41E309] text-7xl'>
                        <BsDot />
                      </div>
                      <div className='text-xl -ml-4'>オンライン</div>
                    </div>
                  </div>
                  <div className='text-3xl/relaxed'>
                    <div className='flex flex-row items-center'>
                      <div>
                        <GiPositionMarker size={20} />
                      </div>
                      <div className='ml-2'>{employee.data.userID.address}</div>
                    </div>
                    <div>
                      年齢: {getAges(employee.data.dateOB)}歳&emsp;経験: {employee.data.experience}
                      <br />
                      サービス価格: {displayNum(employee.data.salary)} 円&emsp;登録日: {''}
                      {convertDate(employee.data.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <button
                  onClick={handleButtonClick}
                  className='w-[14rem] h-[6rem] bg-[#7101FF] text-white rounded-[20px] hover:bg-[#0036B1] text-4xl'
                >
                  採用
                </button>
                {userPopupPostsList ? (
                  <div className='postshadow'>
                    <div ref={wrapperRef} className='postbox absolute mt-3 -ml-[38vw] w-[48vw] bg-black'>
                      <div className='postbox2 mx-[2px] mb-1 bg-white'>
                        <div className='mx-5 mt-1 h-[28vw] py-5'>
                          <div className='overflow-auto h-[19vw] mt-16'>
                            {postUsers &&
                              postUsers.map((postUser) => (
                                <div key={postUser._id}>
                                  <UserPopupJobPost postUser={postUser} />
                                </div>
                              ))}
                          </div>
                          <div className='mt-12 flex justify-center items-center'>
                            <button
                              onClick={handleButtonClick}
                              className='rounded-full bg-[#7101FF] text-white px-10 py-2 hover:bg-red-700'
                            >
                              キャンセル
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className='mt-12'>
              <div className='flex flex-row items-center'>
                <div>
                  <BsPersonFill />
                </div>
                <div className='ml-12'>自分の紹介</div>
              </div>
              <div className='flex flex-row leading-10 mt-6'>
                <div>
                  <BsCardText />
                </div>
                <div className='ml-12'>{employee.data.description}</div>
              </div>
            </div>
            <div className='mt-12 px-20 leading-[5rem]'>
              <div>総合案内</div>
              <ul className='list-disc marker:text-[#7101FF]'>
                <div className='columns-xl'>
                  <li>誕生日: {convertDate(employee.data.dateOB)}</li>
                  <li>性別: {employee.data.gender}</li>
                  <li>経験: {employee.data.experience}</li>
                  <li>言語: 日本語、英語</li>
                  <li>学歴: {employee.data.degree}</li>
                </div>
                <li className='leading-10 mt-5'>{employee.data.skill}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
