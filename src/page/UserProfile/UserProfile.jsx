import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import { currentAccount, updateUser } from '../../api/auth.api'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userSchema } from '../../utils/rules'
import { toast } from 'react-toastify'
import UploadAvatar from '../EmployeeProfile/UploadAvatar'
import { BsCameraFill } from 'react-icons/bs'
import ChangePass from './ChangePass'
export default function UserProfile() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      address: ''
    },
    resolver: yupResolver(userSchema)
  })

  const { data: userData } = useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return currentAccount()
    }
  })
  const user = userData?.data

  useEffect(() => {
    if (user) {
      setValue('name', user.data.name)
      setValue('email', user.data.email)
      setValue('address', user.data.address)
    }
  }, [user, setValue])

  const updateUserMutation = useMutation({
    mutationFn: (body) => updateUser(body)
  })

  const onSubmit = handleSubmit((data) => {
    // console.log(users)
    updateUserMutation.mutate(data, {
      onSuccess: (data) => {
        toast.success('編集しました !') //。(22)
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
  const [stateForm, changeStateForm] = useState(0)
  /////////////////////////
  ////////////////////////
  let initialName = useRef(null),
    initialMail = useRef(null),
    initialAddr = useRef(null)

  const updateInfo = () => {
    changeStateForm(1)
    let updateinfo = document.querySelectorAll('.updateinfo')
    initialName.current = updateinfo[0].value
    initialMail.current = updateinfo[1].value
    initialAddr.current = updateinfo[2].value
  }
  ///////////////////////
  ///////////////////////
  //back, reset form
  const backFunction = () => {
    document.querySelectorAll('form').forEach((e) => {
      e.reset()
    })
    let updateinfo = document.querySelectorAll('.updateinfo')
    updateinfo[0].value = initialName.current
    updateinfo[1].value = initialMail.current
    updateinfo[2].value = initialAddr.current
    changeStateForm(0)
  }
  ///////////////////////
  ///////////////////////

  //wait for api load
  // const [apiLoaded, setApiLoaded] = useState(false)
  // let interval = setInterval(function () {
  //   let waitForAPICall = document.querySelector('.waitForAPICall')
  //   if (waitForAPICall?.value !== '') {
  //     setApiLoaded(true)
  //     clearInterval(interval)
  //   }
  // }, 100)
  return (
    <>
      {user && (
        <div className='w-full bg-[#DCEAFF]'>
          <div className='mx-16 font-itim py-10'>
            <div className={stateForm === 0 ? 'invisible' : ''}>
              <div className='flex justify-center items-center'>
                <button
                  onClick={backFunction}
                  className='px-[2vw] rounded-full text-4xl pt-4 pb-4 text-white bg-red-600 hover:bg-green-600 py-3'
                >
                  キャンセル
                </button>
              </div>
            </div>
            <div className='mt-10 grid gap-x-0 pb-24'>
              <div className='bg-[#FFFFFF] rounded-3xl col-span-2 border-2 border-[#B9BFC9]'>
                <div className='mb-8 mt-40 text-center text-4xl'>
                  <div className='flex justify-center items-center text-4xl'>
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
                  <div className='text-5xl bg-[#e8e7e74d] pt-2 pb-2 mx-28 mt-16 border-2 rounded-full text-center'>
                    {user?.data.name}
                  </div>
                  <div className='text-5xl mt-5 mx-28 pt-2 pb-2 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                    {user?.data.phone}
                  </div>

                  <div className={stateForm === 0 ? '' : 'invisible'}>
                    <button
                      type='button'
                      className='bg-[#FED5D5] text-4xl pt-4 pb-4 p-8 rounded-full py-1 border border-black mt-10'
                      onClick={() => changeStateForm(2)}
                    >
                      パスワードの変更
                    </button>
                  </div>
                  <div className={stateForm === 2 ? '' : 'invisible'}>
                    <ChangePass />
                  </div>
                </div>
              </div>

              <div className='bg-[#FFFFFF] rounded-3xl col-start-3 row-start-1 col-span-5 border-2 border-[#B9BFC9]'>
                <div className='flex mt-9 mr-9 justify-end'>
                  <div className={stateForm === 0 ? '' : 'invisible'}>
                    <button
                      type='button'
                      className='bg-[#FED5D5] text-4xl pt-4 pb-4 p-8 rounded-full py-1 border border-black'
                      onClick={updateInfo}
                    >
                      編集
                    </button>
                  </div>
                </div>
                <form
                  onSubmit={onSubmit}
                  //  onChange={makeFormChangedStatus}
                >
                  <div className='mx-20'>
                    <div className='text-7xl font-semibold'>プロフィールページ</div>
                    <div className='grid gap-y-28 mt-32 pl-8 text-5xl'>
                      <div className='col-span-1'>名前 :</div>
                      <div className='col-start-2 col-span-2 py-1'>
                        <input
                          className='waitForAPICall updateinfo indent-10 w-full border rounded-xl border-black '
                          disabled={stateForm === 1 ? false : true}
                          name='name'
                          autoComplete='on'
                          {...register('name')}
                        ></input>
                        <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.name?.message}</div>
                      </div>
                      <div className='col-span-1 row-start-2'>メール :</div>
                      <div className='col-start-2 col-span-2 py-1'>
                        <input
                          className='updateinfo indent-10 w-full border rounded-xl border-black'
                          disabled={stateForm === 1 ? false : true}
                          name='email'
                          {...register('email')}
                        ></input>

                        <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.email?.message}</div>
                      </div>
                      <div className='col-span-1 row-start-3'>住所 :</div>
                      <div className='col-start-2 col-span-2 py-1'>
                        <input
                          className='updateinfo indent-10 w-full border rounded-xl border-black'
                          disabled={stateForm === 1 ? false : true}
                          name='address'
                          {...register('address')}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className='my-24 flex justify-center'>
                    <div className={stateForm === 1 ? '' : 'invisible'}>
                      <button
                        type='submit'
                        className='bg-[#FED5D5] pt-4 pb-4 p-8 text-4xl rounded-full py-1 border border-black'
                      >
                        保存
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {modal && <UploadAvatar toggleModal={toggleModal} />}
        </div>
      )}
    </>
  )
}
