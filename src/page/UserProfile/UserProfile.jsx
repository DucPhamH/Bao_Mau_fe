import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { currentAccount } from '../../api/auth.api'
import { useState } from 'react'
import { profileEmployee } from '../../api/employee.api'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema } from '../../utils/rules'

export default function UserProfile() {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    form,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      address: ''
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
  console.log(watch())
  useEffect(() => {
    if (user) {
      setValue('name', user.data.name)
      setValue('email', user.data.email)
      setValue('address', user.data.address)
    }
  }, [user, setValue])

  // const { data: employeeData } = useQuery({
  //   queryKey: ['employee'],
  //   queryFn: () => {
  //     return profileEmployee()
  //   }
  // })
  // const employee = employeeData?.data

  //update button
  //////////////////////
  //////////////////////
  const [hideButton, hideUpdateButton] = useState(false)
  const updateFunction = () => {
    hideUpdateButton(true)
    document.querySelectorAll('.inputedit').forEach((e) => {
      e.disabled = false
    })
  }
  //////////////////////
  //////////////////////
  //////////////////////
  return (
    <div className='w-full bg-[#DCEAFF]'>
      <div className='mx-16 font-itim py-10'>
        <form action=''>
          <div className='mt-10 grid gap-x-0 pb-24'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-4 border-2 border-[#B9BFC9]'>
              <div className='mb-8 mt-40 text-center'>
                <div className='rounded-[50%] border-2 overflow-hidden inline-block justify-center items-center w-56 h-56'>
                  <img src={user?.data.image} alt='imageuser' />
                </div>

                <div className='bg-[#e8e7e74d] mx-36 mt-16 border-2 rounded-full text-center'>Le Thi A</div>

                <div className='px-6 mt-5 mx-36 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                  12345678
                </div>
              </div>
            </div>

            <div className='bg-[#FFFFFF] rounded-3xl col-start-5 row-start-1 col-span-5 border-2 border-[#B9BFC9]'>
              <div className='flex mt-9 mr-9 justify-end'>
                <button
                  type='button'
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
              <div className='ml-24 mr-32'>
                <div className='text-4xl'>プロフィールページ</div>
                <div className='grid gap-y-28 mt-32 ml-16'>
                  <div className='col-span-1'>名前:</div>
                  <input
                    className='inputedit indent-10 col-start-2 col-span-2 border rounded-xl border-black py-1'
                    disabled
                    {...register('name')}
                  ></input>
                  <div className='col-span-1 row-start-2'>メール :</div>
                  <input
                    className='inputedit indent-10 col-start-2 col-span-2 border rounded-xl border-black py-1'
                    disabled
                    {...register('email')}
                  ></input>
                  <div className='col-span-1 row-start-3'>住所 :</div>
                  <input
                    className='inputedit indent-10 col-start-2 col-span-2 border rounded-xl border-black py-1'
                    disabled
                    {...register('address')}
                  ></input>
                </div>
              </div>
              <div className='my-24 flex justify-center'>
                <button
                  type='submit'
                  className={
                    hideButton
                      ? 'bg-[#FED5D5] px-8 rounded-full py-1 border border-black'
                      : 'bg-[#FED5D5] px-8 rounded-full py-1 border border-black invisible'
                  }
                  /////
                  /////
                  // onClick={ lam gi do }
                  //////
                  //////
                  /////
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
