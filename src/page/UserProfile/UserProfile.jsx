import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { currentAccount } from '../../api/auth.api'
import { useState } from 'react'
import { profileEmployee } from '../../api/employee.api'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema } from '../../utils/rules'

export default function UserProfile() {
  // const {
  //   register,
  //   setValue,
  //   handleSubmit,
  //   watch,
  //   form,
  //   formState: { errors }
  // } = useForm({
  //   defaultValues: {
  //     name: '',
  //     email: ''
  //   },
  //   resolver: yupResolver(employeeSchema)
  // })

  // const { data: userData } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: () => {
  //     return currentAccount()
  //   }
  // })
  // const user = userData?.data
  // // console.log(user)
  // console.log(watch())
  // useEffect(() => {
  //   if (user) {
  //     setValue('name', user.data.name)
  //     setValue('email', user.data.email)
  //   }
  // }, [user, setValue])

  // const { data: employeeData } = useQuery({
  //   queryKey: ['employee'],
  //   queryFn: () => {
  //     return profileEmployee()
  //   }
  // })
  // const employee = employeeData?.data

  //update button function
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
        <form action=''>
          <div className='mt-10 grid gap-x-6 gap-y-8'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-2 row-span-3 border-2 border-[#B9BFC9]'>
              <div className='my-8 text-center'>
                <div className='rounded-[50%] border-2 overflow-hidden inline-block justify-center items-center w-56 h-56'>
                  {/* <img src={user?.data.image} alt='' /> */}
                </div>
                <div>
                  <input
                    className='inputedit bg-[#e8e7e74d] border-2 rounded-full text-center'
                    name='name'
                    type='text'
                    placeholder='name'
                    defaultValue='Le Thi A'
                    // {...register('name')}
                    disabled
                  ></input>
                </div>
                <div>
                  <input
                    className='px-6 mt-2 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'
                    disabled
                    value='12345678'
                  ></input>
                </div>

                {/* <input
                    className='px-24 bg-[#D9D9D9] text-center mt-12 rounded-lg py-2'
                    disabled
                    value='Employee'
                  ></input> */}
                <div className='flex mx-16 justify-between mt-16'>
                  <div className='flex  rounded-full items-center'>
                    <label htmlFor='default-checkbox-1' className='mr-2 text-2xl text-black'>
                      ベビーシッター
                    </label>
                    <input
                      id='default-checkbox-1'
                      type='checkbox'
                      value='babysitter'
                      // name='roles'
                      // {...register('roles')}
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
                      value='chef'
                      // name='roles'
                      // {...register('roles')}
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
                  defaultValue='nguyenvana123123@gmail.com'
                  // {...register('email')}
                ></input>

                {/* <div className='w-full relative'>
                <div className='ml-5 mt-5'>パスワード</div>
                <div className='right-4 top-[60%] absolute cursor-pointer scale-150' onClick={toggleShowPassword}>
                  {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                </div>
                <input
                  type={showPassword ? `text` : `password`}
                  className='bg-[rgba(217,217,217,0.15)] px-4  rounded-xl border py-1 w-full border-black'
                  value='123456'
                  disabled
                ></input>
              </div> */}
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
                      defaultValue='Le Thi A'
                    ></input>
                  </div>
                  <div className='col-start-3 col-span-2'>
                    <div className='ml-2'>性別</div>
                    <select
                      className='inputedit bg-[rgba(217,217,217,0.15)] w-full border rounded-xl border-black text-center py-1 appearance-none'
                      disabled
                      defaultValue='female'
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
                      defaultValue='6969-09-06'
                      disabled
                    ></input>
                  </div>
                  <div className='row-start-2 col-start-3 col-span-2'>
                    <div className='ml-2'>給料</div>
                    <input
                      className='inputedit border rounded-xl w-full text-center py-1'
                      defaultValue='200円'
                      disabled
                    ></input>
                  </div>
                </div>
                <div className='ml-2 mt-6'>Your Address</div>
                <textarea
                  disabled
                  className='inputedit bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
                ></textarea>
                <div className='ml-2 mt-12'>詳細情報</div>
                <textarea
                  disabled
                  className='inputedit bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-56 px-4 py-2 w-full resize-none'
                  defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。
                事前課題が終わった人は、このスレッドへの返信で完了報告をお願いします。 期限：5月24日(水)　13:00
                報告文サンプルは事前学習資料にありますので、確認してください。
                今回はスプレッドシートでの提出のため、完了報告がないと、終わったかどうか判断できません。
                報告がなければ0点になりますので、ご注意ください。'
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
                  defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
                ></textarea>
                <div className='mt-6'>実験</div>
                <textarea
                  disabled
                  className='inputedit mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                  defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
                ></textarea>
              </div>
            </div>
            <div className='bg-[#FFFFFF] rounded-3xl col-start-2 col-span-1 border-2 border-[#B9BFC9]'>
              <div className='translate-y-1/2 mx-12'>
                <div className=''>スキル</div>
                <textarea
                  disabled
                  className='inputedit bg-[rgba(217,217,217,0.15)] mt-4 border rounded-xl border-black h-36 px-4 py-2 w-full resize-none'
                  defaultValue='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <div className='mt-10 flex justify-center'>
          <button
            className={
              hideButton
                ? 'bg-[#FED5D5] px-16 rounded-full py-1 border border-black'
                : 'bg-[#FED5D5] px-16 rounded-full py-1 border border-black invisible'
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
  )
}
