import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { currentAccount, updateUser } from '../../api/auth.api'
import { useState } from 'react'
import { profileEmployee, updateEmployee } from '../../api/employee.api'

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
        toast(data.data?.message)
        window.location.reload()
      },
      onError: (error) => {
        console.log(error)
      }
    })
  })

  //update button
  //////////////////////
  //////////////////////
  const [hideButton, hideUpdateButton] = useState(false)
  const updateFunction = (e) => {
    hideUpdateButton(true)
    document.querySelectorAll('.inputedit').forEach((e) => {
      e.disabled = false
    })
  }
  //////////////////////
  //////////////////////
  //////////////////////

  const [modal, setModal] = React.useState(false)
  // const [image, setImage] = React.useState('')

  // const updateAvatarMutation = useMutation({
  //   mutationFn: (body) => updateImage(body)
  // })
  // const handleImage = (e) => {
  //   console.log(e.target.files)
  //   setImage(e.target.files[0])
  // }

  // const handleApi = () => {
  //   const formData = new FormData()
  //   formData.append('imageUser', image)
  //   updateAvatarMutation.mutate(formData, {
  //     onSuccess: (data) => {
  //       console.log(data)
  //       toast(data.data?.message)
  //       window.location.reload()
  //     },
  //     onError: (error) => {
  //       console.log(error)
  //     }
  //   })
  // }

  const toggleModal = () => {
    setModal(!modal)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='w-full bg-[#DCEAFF]'>
      <div className='mx-16 font-itim py-10'>
        <div className='flex justify-end'>
          <button
            className={
              hideButton
                ? 'bg-[#FED5D5] px-8 rounded-full py-1 border border-black invisible'
                : 'bg-[#FED5D5] px-8 rounded-full py-1 border border-black'
            }
            onClick={updateFunction}
          >
            Update
          </button>
        </div>
        <form onSubmit={onSubmit} noValidate>
          <div className='mt-10 grid gap-x-6 gap-y-8'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-2 row-span-3 border-2 border-[#B9BFC9]'>
              <div className='my-8 text-center'>
                <div
                  onClick={toggleModal}
                  className='rounded-[50%] border-2  cursor-pointer overflow-hidden inline-block justify-center items-center w-56 h-56'
                >
                  <img src={user?.data?.image} alt='imageuser' />
                </div>

                <div className='bg-[#e8e7e74d] mx-36 px-5 border-2 rounded-full text-center'>{user?.data.name}</div>

                <div className='px-6 mt-2 mx-36 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                  {user?.data.phone}
                </div>

                <div className='flex mx-16 justify-between mt-16'>
                  <div className='flex  rounded-full items-center'>
                    <label htmlFor='default-checkbox-1' className='mr-2 text-2xl text-black'>
                      ベビーシッター
                    </label>
                    <input
                      id='default-checkbox-1'
                      type='checkbox'
                      name='babysister'
                      {...register('babysister')}
                      className='inputedit scale-[200%] ml-4 accent-cyan-500'
                      disabled
                    />
                  </div>
                  <div className='flex rounded-full items-center'>
                    <label htmlFor='default-checkbox-2' className='mr-2 text-2xl'>
                      料理人
                    </label>
                    <input
                      id='default-checkbox-2'
                      type='checkbox'
                      name='housemaid'
                      {...register('housemaid')}
                      className='inputedit scale-[200%] ml-4 accent-orange-500'
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-3xl row-start-4 col-span-2 row-span-2 border-2 border-[#B9BFC9]'>
              <div className='mx-9 my-4'>
                <div className='ml-5'>メール</div>
                <input
                  className='inputedit bg-[rgba(217,217,217,0.15)] rounded-xl w-full border py-1 border-black px-4'
                  disabled
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
                <div className='text-center text-4xl'>自分情報</div>
                <div className='grid gap-x-32 gap-y-14 mt-8 grid-cols-4'>
                  <div className='col-span-2'>
                    <div className='ml-2'>名前</div>
                    <input
                      className='inputedit bg-[rgba(217,217,217,0.15)] w-full border rounded-xl border-black text-center py-1'
                      disabled
                      name='name'
                      {...register('name')}
                    ></input>
                  </div>
                  <div className='col-start-3 col-span-2'>
                    <div className='ml-2'>性別</div>
                    <select
                      className='inputedit bg-[rgba(217,217,217,0.15)] w-full border rounded-xl border-black text-center py-1 appearance-none'
                      disabled
                      name='gender'
                      // defaultValue='female'
                      {...register('gender')}
                    >
                      <option className='text-center' value='male'>
                        male
                      </option>
                      <option className='text-center' value='female'>
                        female
                      </option>
                      <option className='text-center' value='other'>
                        other/unknown
                      </option>
                    </select>
                  </div>
                  <div className='row-start-2 col-start-1 col-span-2'>
                    <div className='ml-2'>誕生日</div>
                    <input
                      type='date'
                      className='inputedit border w-full rounded-xl text-center py-1'
                      name='dateOB'
                      {...register('dateOB')}
                      disabled
                    ></input>
                  </div>
                  <div className='row-start-2 col-start-3 col-span-2'>
                    <div className='ml-2'>給料（円）</div>
                    <input
                      className='inputedit border rounded-xl w-full text-center py-1'
                      name='salary'
                      {...register('salary')}
                      disabled
                    ></input>
                    <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.salary?.message}</div>
                  </div>
                </div>
                <div className='ml-2 mt-6'>Your Address</div>
                <textarea
                  disabled
                  className='inputedit bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  // defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
                  name='address'
                  {...register('address')}
                ></textarea>
                <div className='ml-2 mt-12'>詳細情報</div>
                <textarea
                  disabled
                  className='inputedit bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-56 px-4 py-2 w-full resize-none'
                  name='description'
                  {...register('description')}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='mt-16 grid gap-x-12 auto-cols-fr grid-flow-col'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-1 border-2 border-[#B9BFC9]'>
              <div className='mx-12 my-8'>
                <div>程度</div>
                <textarea
                  disabled
                  className='inputedit mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  name='degree'
                  {...register('degree')}
                ></textarea>
                <div className='mt-6'>実験</div>
                <textarea
                  disabled
                  className='inputedit mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  name='experience'
                  {...register('experience')}
                ></textarea>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-3xl col-start-2 col-span-1 border-2 border-[#B9BFC9]'>
              <div className='translate-y-1/2 mx-12'>
                <div className=''>スキル</div>
                <textarea
                  disabled
                  className='inputedit bg-[rgba(217,217,217,0.15)] mt-4 border rounded-xl border-black h-36 px-4 py-2 w-full resize-none'
                  name='skill'
                  {...register('skill')}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <button
              className={
                hideButton
                  ? 'bg-[#FED5D5] px-16 rounded-full py-1 border border-black'
                  : 'bg-[#FED5D5] px-16 rounded-full py-1 border border-black invisible'
              }
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {modal && <UploadAvatar toggleModal={toggleModal} />}
    </div>
  )
}
