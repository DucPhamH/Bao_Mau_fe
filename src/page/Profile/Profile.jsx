import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { currentAccount } from '../../api/auth.api'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useState } from 'react'
export default function Profile() {
  const { data: userData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return currentAccount()
    }
  })
  const user = userData?.data
  console.log(user)

  const [showPassword, setShowPassword] = useState(false)
  // function toggleShowPassword() {
  //   setShowPassword((current) => !current)
  // }
  // if (showPassword) {
  //   password = (
  //     <div>
  //       <span className='mx-3'>123456</span>{' '}
  //       <span className='right-2 top-3 absolute cursor-pointer scale-150'>
  //         <MdOutlineVisibilityOff onClick={toggleShowPassword} />
  //       </span>
  //     </div>
  //   )
  // } else {
  //   password = (
  //     <div>
  //       <span className='mx-3'>******</span>
  //       <span className='right-2 top-3 absolute cursor-pointer scale-150'>
  //         <MdOutlineVisibility onClick={toggleShowPassword} />
  //       </span>
  //     </div>
  //   )
  // }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='w-full bg-[#DCEAFF]'>
      <div className='mx-16 font-itim py-10'>
        <div className='flex justify-end'>
          <button className='bg-[#FED5D5] px-8 rounded-full py-1 border border-black'>Update</button>
        </div>
        <div className='mt-10 grid gap-x-6 gap-y-8'>
          <div className='bg-[#FFFFFF] rounded-3xl col-span-2 row-span-3 border-2 border-[#B9BFC9]'>
            <div className='my-12 text-center'>
              <div className='rounded-[50%] border-2 overflow-hidden inline-block justify-center items-center w-56 h-56'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png'
                  alt=''
                />
              </div>
              <div className='bg-[#e8e7e74d] m-auto w-fit px-16 border-2 rounded-full text-center'>Le Thi A</div>
              <div className='m-auto w-fit px-16 mt-2 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                nguyenvana123@gmail.com
              </div>
              <div className='m-auto w-fit px-24 bg-[#D9D9D9] mt-12 rounded-lg py-2'>Employee (Babysitter)</div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] rounded-3xl row-start-4 col-span-2 row-span-2 border-2 border-[#B9BFC9]'>
            <div className='mx-9 my-4'>
              <div className='ml-5'>電話番号</div>
              <div className='bg-[rgba(217,217,217,0.15)] rounded-xl border py-1 border-black'>
                <div className='mx-3'>012345678</div>
              </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF] rounded-3xl col-start-3 row-start-1 col-span-6 row-span-5 border-2 border-[#B9BFC9]'>
            <div className='mx-12 mt-5 mb-6'>
              <div className='text-center text-4xl'>自分情報</div>
              <div className='grid gap-x-32 gap-y-14 mt-8'>
                <div className='col-span-1'>
                  <div className='ml-2'>名前</div>
                  <div className='bg-[rgba(217,217,217,0.15)] border rounded-xl border-black text-center py-1'>
                    Le Thi A
                  </div>
                </div>
                <div className='col-start-2'>
                  <div className='ml-2'>性別</div>
                  <div className='bg-[rgba(217,217,217,0.15)] border rounded-xl border-black text-center py-1'>
                    female
                  </div>
                </div>
                <div className='row-start-2'>
                  <div className='ml-2'>誕生日</div>
                  <div className='border rounded-xl text-center py-1'>6/9/6969</div>
                </div>
                <div className='row-start-2 col-start-2'>
                  <div className='ml-2'>給料</div>
                  <div className='border rounded-xl text-center py-1'>200円</div>
                </div>
              </div>
              <div className='ml-2 mt-6'>Your Address</div>
              <textarea
                disabled
                className='bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                value='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
              ></textarea>
              <div className='ml-2 mt-12'>詳細情報</div>
              <textarea
                disabled
                className='bg-[rgba(217,217,217,0.15)] border rounded-xl border-black h-56 px-4 py-2 w-full resize-none'
                value='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。
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
                className='mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                value='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
              ></textarea>
              <div className='mt-6'>実験</div>
              <textarea
                disabled
                className='mt-4 border rounded-xl border-black h-24 px-4 py-2 w-full resize-none'
                value='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
              ></textarea>
            </div>
          </div>
          <div className='bg-[#FFFFFF] rounded-3xl col-start-2 col-span-1 border-2 border-[#B9BFC9]'>
            <div className='translate-y-1/2 mx-12'>
              <div className=''>スキル</div>
              <textarea
                disabled
                className='bg-[rgba(217,217,217,0.15)] mt-4 border rounded-xl border-black h-36 px-4 py-2 w-full resize-none'
                value='みなさん、こんにちは。 これは来週の 09_Webアプリ - スプリントバックログ の事前課題提出用スレッドです。'
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
