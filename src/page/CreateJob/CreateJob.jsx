import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiClock } from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi'
import { useMutation } from '@tanstack/react-query'
import { createPost } from '../../api/post.api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const initialFormState = {
  mo_morning: false,
  mo_afternoon: false,
  tu_morning: false,
  tu_afternoon: false,
  we_morning: false,
  we_afternoon: false,
  th_morning: false,
  th_afternoon: false,
  fr_morning: false,
  fr_afternoon: false,
  sa_morning: false,
  sa_afternoon: false,
  su_morning: false,
  su_afternoon: false
}

export default function CreateJob() {
  const [buttonColors, setButtonColors] = useState(Array(14).fill('black'))
  const [formState, setFormState] = useState(initialFormState)

  // console.log(buttonColors)
  const handleClick = (index, nameState) => {
    const newButtonColors = [...buttonColors]
    const newFormState = { ...formState }
    newFormState[nameState] = formState[nameState] === false ? true : false
    newButtonColors[index] = buttonColors[index] === 'black' ? 'rgb(34 197 94 / var(--tw-text-opacity))' : 'black'
    setFormState(newFormState)
    setButtonColors(newButtonColors)
  }

  //  console.log(formState)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      dateStart: new Date().toISOString(),
      address: '',
      title: '',
      age: '',
      language: '',
      experience: '',
      description: '',
      salary: 0,
      housemaid: false,
      babysister: false
    }
  })

  const newPost = useMutation({
    mutationFn: (body) => createPost(body)
  })

  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    const body = { ...data, ...formState }
    // console.log(body)
    newPost.mutate(body, {
      onSuccess: (data) => {
        //console.log(data)
        toast('ポストを追加しちゃった !') // 。(15)data.data?.message
        navigate('/usercreatedjobs')
      },
      onError: (error) => {
        console.log(error)
      }
    })
  })

  return (
    <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
      <div className='w-[90%] bg-[#FFF] mt-12 mb-24 rounded-3xl p-12'>
        <form className='text-4xl leading-relaxed' onSubmit={onSubmit}>
          <div className='text-6xl flex flex-row font-bold'>
            <div className='text-[#C226F9] cursor-pointer mr-16'>
              <BiArrowBack />
            </div>
            <div>新しい仕事を作成する</div>
          </div>
          <div className='p-20'>
            <div className='flex flex-row items-center'>
              <div className='w-60 mr-20'>タイトル :</div>
              <input
                required
                type='text'
                name='title'
                {...register('title')}
                className='p-10 border-2 border-black outline-none rounded-[20px] w-[100%] h-28 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              />
            </div>
            <div className='flex flex-row items-center mt-20'>
              <div className='mr-56'>対象 :</div>
              <div className='flex items-center'>
                <label htmlFor='radio1'>
                  ベビーシッター
                  <input
                    id='radio1'
                    type='checkbox'
                    name='babysister'
                    {...register('babysister')}
                    className='w-[35px] h-[35px] rounded-[5px] ml-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                  />
                </label>
              </div>
              <div className='flex items-center ml-80'>
                <label htmlFor='radio2'>
                  料理人
                  <input
                    id='radio2'
                    type='checkbox'
                    name='housemaid'
                    {...register('housemaid')}
                    className='w-[35px] h-[35px] border-green rounded-[5px] ml-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                  />
                </label>
              </div>
            </div>
            <div className='border-2 border-black p-16 rounded-[20px] mt-16 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                  <div className='mr-10'>場所 :</div>
                  <input
                    required
                    type='text'
                    name='address'
                    {...register('address')}
                    className='p-7 border-[1px] border-black outline-none rounded-[20px] w-[30rem] h-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                  />
                </div>
                <div className='flex flex-row items-center mr-20'>
                  <div className='mr-10'>勤務開始日 :</div>
                  <input
                    type='date'
                    required
                    name='dateStart'
                    {...register('dateStart')}
                    className='p-7 border-[1px] border-black outline-none rounded-[20px] w-[30rem] h-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                  />
                </div>
              </div>
              <div className='flex flex-row items-center mt-10'>
                <div className='mr-10'>給料 :</div>
                <input
                  type='text'
                  required
                  name='salary'
                  {...register('salary')}
                  className='p-7 border-[1px] border-black outline-none rounded-[20px] w-[30rem] h-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                />
              </div>
              <div className='mt-12'>仕事の詳細情報:</div>
              <div className='flex items-center flex-col mb-12'>
                <textarea
                  required
                  name='description'
                  {...register('description')}
                  className='border-2 border-black rounded-[20px] w-[95%] h-[20rem] mt-12 resize-none outline-none p-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                ></textarea>
              </div>
            </div>
            <div className='border-2 border-black p-16 rounded-[20px] mt-16 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
              <div className='text-5xl font-semibold'>要求</div>
              <div className='flex flex-row items-center mt-10'>
                <div className='mr-10'>年齢 :</div>
                <input
                  type='text'
                  required
                  name='age'
                  {...register('age')}
                  className='p-9 border-[1px] border-black outline-none rounded-[20px] w-[15rem] h-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                />
                <div className='ml-4'>(以下)</div>
              </div>
              <div className='flex flex-row items-center mt-10'>
                <div className='mr-10'>実験 :</div>
                <input
                  required
                  type='text'
                  name='experience'
                  {...register('experience')}
                  className='p-9 border-[1px] border-black outline-none rounded-[20px] w-[90%] h-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                />
              </div>
              <div className='flex flex-row items-center mt-10'>
                <div className='mr-10'>言語 :</div>
                <input
                  type='text'
                  name='language'
                  {...register('language')}
                  className='p-9 border-[1px] border-black outline-none rounded-[20px] w-[24rem] h-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                />
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
                    style={{ color: buttonColors[0] }}
                    onClick={() => handleClick(0, `mo_morning`)}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    style={{ color: buttonColors[1] }}
                    onClick={() => handleClick(1, 'mo_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
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
                    style={{ color: buttonColors[2] }}
                    onClick={() => handleClick(2, 'tu_morning')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    style={{ color: buttonColors[3] }}
                    onClick={() => handleClick(3, 'tu_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
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
                    style={{ color: buttonColors[4] }}
                    onClick={() => handleClick(4, 'we_morning')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    style={{ color: buttonColors[5] }}
                    onClick={() => handleClick(5, 'we_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
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
                    style={{ color: buttonColors[6] }}
                    onClick={() => handleClick(6, 'th_morning')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    style={{ color: buttonColors[7] }}
                    onClick={() => handleClick(7, 'th_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
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
                    style={{ color: buttonColors[8] }}
                    onClick={() => handleClick(8, 'fr_morning')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    key={2}
                    style={{ color: buttonColors[9] }}
                    onClick={() => handleClick(9, 'fr_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
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
                    style={{ color: buttonColors[10] }}
                    onClick={() => handleClick(10, 'sa_morning')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    key={2}
                    style={{ color: buttonColors[11] }}
                    onClick={() => handleClick(11, 'sa_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
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
                    style={{ color: buttonColors[12] }}
                    onClick={() => handleClick(12, 'su_morning')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午前</div>
                  </div>
                  <div
                    key={2}
                    style={{ color: buttonColors[13] }}
                    onClick={() => handleClick(13, 'su_afternoon')}
                    className='flex flex-row mr-36 cursor-pointer hover:!text-green-500'
                  >
                    <div className='mr-12'>
                      <BiCheckCircle />
                    </div>
                    <div>午後</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center mt-32'>
              <button
                type='submit'
                className='bg-[#7101ff] hover:bg-[#0036B1] p-6 w-[26rem] rounded-[20px] text-5xl text-white'
              >
                作成
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
