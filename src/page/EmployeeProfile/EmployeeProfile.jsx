import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useRef } from 'react'
import { currentAccount, updateUser } from '../../api/auth.api'
import { useState } from 'react'
import { profileEmployee, updateEmployee } from '../../api/employee.api'
import { BsCameraFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema } from '../../utils/rules'
import { toast } from 'react-toastify'
import { omit } from 'lodash'
import UploadAvatar from './UploadAvatar'

export default function EmployeeProfile() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      address: '',
      gender: '',
      dateOB: new Date(),
      salary: 0,
      babysister: true,
      housemaid: true,
      degree: '',
      description: '',
      experience: '',
      skill: ''
    },
    resolver: yupResolver(employeeSchema)
  })

  const { data: userData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return currentAccount()
    }
  })
  const user = userData?.data
  console.log(user)
  const { data: employeeData } = useQuery({
    queryKey: ['employee'],
    queryFn: () => {
      return profileEmployee()
    }
  })
  const employee = employeeData?.data

  const updateUserMutation = useMutation({
    mutationFn: (body) => updateUser(body)
  })

  const updateEmployeeMutation = useMutation({
    mutationFn: (body) => updateEmployee(body)
  })

  // console.log(user)

  useEffect(() => {
    if (user) {
      setValue('name', user.data.name)
      setValue('email', user.data.email)
      setValue('address', user.data.address)
    }
  }, [user, setValue])

  useEffect(() => {
    if (employee) {
      setValue('gender', employee?.data.gender)
      setValue('dateOB', employee?.data.dateOB.split('T')[0])
      setValue('salary', employee?.data.salary)
      setValue('babysister', employee?.data.babysister)
      setValue('housemaid', employee?.data.housemaid)
      setValue('degree', employee?.data.degree)
      setValue('description', employee?.data.description)
      setValue('experience', employee?.data.experience)
      setValue('skill', employee?.data.skill)
    }
  }, [employee, setValue])

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    const employees = omit(data, ['name', 'email', 'address'])
    const users = omit(data, [
      'gender',
      'dateOB',
      'salary',
      'babysister',
      'housemaid',
      'degree',
      'description',
      'experience',
      'skill'
    ])
    // console.log(users)
    updateUserMutation.mutate(users, {
      onSuccess: (data) => {},
      onError: (error) => {
        console.log(error)
      }
    })
    updateEmployeeMutation.mutate(employees, {
      onSuccess: (data) => {
        toast('情報を編集しちゃった !') // 。(16)data.data?.message
        window.location.reload()
      },
      onError: (error) => {
        console.log(error)
      }
    })
  })

  const [modal, setModal] = React.useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  let initialFormValue = useRef([])
  //edit profile
  const [stateForm, changeStateForm] = useState(0)
  const backFunction = () => {
    document.querySelector('form').reset()
    let inputedit = document.querySelectorAll('.inputedit')
    document.querySelectorAll('.checkbox')[0].checked = initialFormValue.current[0]
    document.querySelectorAll('.checkbox')[1].checked = initialFormValue.current[1]
    for (let i = 0; i < inputedit.length; ++i) inputedit[i].value = initialFormValue.current[i + 2]
    changeStateForm(0)
  }

  //update button
  //////////////////////
  //////////////////////
  const updateFunction = () => {
    changeStateForm(1)
    let inputedit = document.querySelectorAll('.inputedit')
    initialFormValue.current[0] = document.querySelectorAll('.checkbox')[0].checked
    initialFormValue.current[1] = document.querySelectorAll('.checkbox')[1].checked
    for (let i = 0; i < inputedit.length; ++i) initialFormValue.current[i + 2] = inputedit[i].value
  }
  //////////////////////
  //////////////////////
  //////////////////////

  ///wait for api load
  const [apiLoaded, setApiLoaded] = useState(false)
  let interval = setInterval(function () {
    let waitForAPICall = document.querySelector('.waitForAPICall')
    if (waitForAPICall.innerHTML !== '') {
      setApiLoaded(true)
      clearInterval(interval)
    }
  }, 100)
  return (
    <div className='w-full bg-[#DCEAFF]'>
      <div className='mx-16 font-itim py-10'>
        <div className={stateForm === 0 ? 'invisible' : ''}>
          <div className='flex justify-center items-center'>
            <button
              onClick={backFunction}
              className='px-[2vw] text-4xl pt-4 pb-4 rounded-full text-white bg-red-600 hover:bg-green-600 py-3'
            >
              Hủy
            </button>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className={apiLoaded ? '' : 'invisible'}>
            <div className={stateForm === 0 ? '' : 'invisible'}>
              <button
                className='bg-[#FED5D5] text-4xl pt-4 pb-4 p-8 rounded-full py-1 border border-black'
                onClick={updateFunction}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate>
          <div className='mt-10 grid gap-x-6 gap-y-8'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-2 row-span-3 border-2 border-[#B9BFC9]'>
              <div className='my-8'>
                <div className='flex justify-center items-center'>
                  <div className='relative'>
                    <div
                      onClick={toggleModal}
                      className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-56 h-56 flex justify-center items-center'
                    >
                      <div className='absolute bottom-6 right-6 w-10 h-10 rounded-lg bg-white flex justify-center items-center'>
                        <BsCameraFill />
                      </div>
                      <img src={user?.data?.image} alt='imageuser' />
                    </div>
                  </div>
                </div>

                <div className='text-4xl waitForAPICall shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)] mx-36 px-5 border-2 rounded-full text-center mt-10'>
                  {user?.data.name}
                </div>

                <div className='text-4xl px-6 mt-2 mx-36 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                  {user?.data.phone}
                </div>

                <div className='flex mx-16 justify-between mt-16'>
                  <div className='flex  rounded-full items-center '>
                    <label htmlFor='default-checkbox-1' className='mr-2 text-4xl text-black'>
                      Chăm trẻ (ベビーシッター)
                    </label>
                    <input
                      id='default-checkbox-1'
                      type='checkbox'
                      name='babysister'
                      {...register('babysister')}
                      className='checkbox scale-[200%] ml-4 accent-cyan-500'
                      disabled={stateForm === 0 ? true : false}
                    />
                  </div>
                  <div className='flex rounded-full items-center'>
                    <label htmlFor='default-checkbox-2' className='mr-2 text-4xl'>
                      Nấu ăn (料理人)
                    </label>
                    <input
                      id='default-checkbox-2'
                      type='checkbox'
                      name='housemaid'
                      {...register('housemaid')}
                      className='checkbox scale-[200%] ml-4 accent-orange-500'
                      disabled={stateForm === 0 ? true : false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-3xl row-start-4 col-span-2 row-span-2 border-2 border-[#B9BFC9]'>
              <div className='mx-9 my-4 text-4xl'>
                <div className='ml-5 text-4xl'>Mail</div>
                <input
                  className='inputedit bg-[rgba(217,217,217,0.15)] rounded-xl w-full border py-1 border-black px-4'
                  disabled={stateForm === 0 ? true : false}
                  type='email'
                  placeholder='email'
                  name='email'
                  autoComplete='on'
                  {...register('email')}
                ></input>
                <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.email?.message}</div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-3xl col-start-3 row-start-1 col-span-6 row-span-5 border-2 border-[#B9BFC9]'>
              <div className='mx-12 mt-5 mb-6'>
                <div className='text-center text-6xl font-semibold mt-12'>Thông tin cá nhân</div>
                <div className='grid gap-x-32 gap-y-14 mt-8 grid-cols-4 text-4xl'>
                  <div className='col-span-2'>
                    <div className='ml-2'>Họ tên</div>
                    <input
                      className='inputedit bg-[rgba(217,217,217,0.15)] w-full border rounded-xl border-black text-center py-1'
                      disabled={stateForm === 0 ? true : false}
                      name='name'
                      {...register('name')}
                    ></input>
                  </div>
                  <div className='col-start-3 col-span-2'>
                    <div className='ml-2'>Giới tính</div>
                    <select
                      className='inputedit bg-[rgba(217,217,217,0.15)] w-full border rounded-xl border-black text-center py-1 appearance-none'
                      disabled={stateForm === 0 ? true : false}
                      name='gender'
                      // defaultValue='female'
                      {...register('gender')}
                    >
                      <option className='text-center' value='male'>
                        Nam
                      </option>
                      <option className='text-center' value='female'>
                        Nữ
                      </option>
                      <option className='text-center' value='other'>
                        Không xác định
                      </option>
                    </select>
                  </div>
                  <div className='row-start-2 col-start-1 col-span-2'>
                    <div className='ml-2'>Ngày sinh</div>
                    <input
                      type='date'
                      className='inputedit border w-full rounded-xl text-center py-1 border-black'
                      name='dateOB'
                      {...register('dateOB')}
                      disabled={stateForm === 0 ? true : false}
                    ></input>
                  </div>
                  <div className='row-start-2 col-start-3 col-span-2 text-4xl'>
                    <div className='ml-2'>Lương（Yên）</div>
                    <input
                      className='inputedit border rounded-xl w-full text-center py-1 border-black'
                      name='salary'
                      {...register('salary')}
                      disabled={stateForm === 0 ? true : false}
                    ></input>
                    <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.salary?.message}</div>
                  </div>
                </div>
                <div className='ml-2 mt-6 text-4xl'>Địa chỉ</div>
                <textarea
                  disabled={stateForm === 0 ? true : false}
                  className='inputedit text-4xl bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  // defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
                  name='address'
                  {...register('address')}
                ></textarea>
                <div className='ml-2 mt-12 text-4xl'>Thông tin cơ bản</div>
                <textarea
                  disabled={stateForm === 0 ? true : false}
                  className='inputedit text-4xl bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-56 px-4 py-2 w-full resize-none'
                  name='description'
                  {...register('description')}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='mt-16 grid gap-x-12 auto-cols-fr grid-flow-col'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-1 border-2 border-[#B9BFC9]'>
              <div className='mx-12 my-8 text-4xl'>
                <div>Trình độ học vấn</div>
                <textarea
                  disabled={stateForm === 0 ? true : false}
                  required
                  className='inputedit mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  name='degree'
                  {...register('degree')}
                ></textarea>
                <div className='mt-6'>Kinh nghiệm (Năm)</div>
                <textarea
                  disabled={stateForm === 0 ? true : false}
                  className='inputedit mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  name='experience'
                  {...register('experience')}
                ></textarea>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-3xl col-start-2 col-span-1 border-2 border-[#B9BFC9]'>
              <div className='translate-y-1/2 mx-12 text-4xl'>
                <div className=''>Kỹ năng</div>
                <textarea
                  disabled={stateForm === 0 ? true : false}
                  className='inputedit bg-[rgba(217,217,217,0.15)] mt-4 border rounded-xl border-black h-36 px-4 py-2 w-full resize-none'
                  name='skill'
                  {...register('skill')}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <div className={stateForm === 0 ? 'invisible' : ''}>
              <button className='bg-[#FED5D5] text-4xl pt-4 pb-4 px-16 rounded-full py-1 border border-black'>
                Lưu thay đổi
              </button>
            </div>
          </div>
        </form>
      </div>
      {modal && <UploadAvatar toggleModal={toggleModal} />}
    </div>
  )
}
