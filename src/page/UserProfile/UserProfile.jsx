import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
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
        toast(data.data?.message)
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

  //update button
  //////////////////////
  //////////////////////
  const updateFunction = () => {
    document.querySelectorAll('.updatefunct').forEach((e) => {
      if (getComputedStyle(e).visibility === 'visible') e.style.visibility = 'hidden'
      else e.style.visibility = 'visible'
    })
    document.querySelectorAll('.inputedit').forEach((e) => {
      e.disabled = false
    })
    document.querySelectorAll('.changepassword').forEach((e) => {
      e.style.visibility = 'hidden'
    })
  }
  //////////////////////
  //////////////////////
  //////////////////////

  //change password button
  //////////////////////
  //////////////////////
  const changePasswordFunction = () => {
    document.querySelectorAll('.changepassword').forEach((e) => {
      if (getComputedStyle(e).visibility === 'visible') e.style.visibility = 'hidden'
      else e.style.visibility = 'visible'
    })
    document.querySelectorAll('.updatefunct').forEach((e) => {
      e.style.visibility = 'hidden'
    })
  }
  //////////////////////
  //////////////////////
  //////////////////////
  const [formChanged, setFormChanged] = React.useState(false)
  const makeFormChangedStatus = () => setFormChanged(true)

  return (
    <div className='w-full bg-[#DCEAFF]'>
      <div className='mx-16 font-itim py-10'>
        <div className='mt-10 grid gap-x-0 pb-24'>
          <div className='bg-[#FFFFFF] rounded-3xl col-span-2 border-2 border-[#B9BFC9]'>
            <div className='mb-8 mt-40 text-center'>
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
              <div className='bg-[#e8e7e74d] mx-36 mt-16 border-2 rounded-full text-center'>{user?.data.name}</div>
              <div className='mt-5 mx-36 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                {user?.data.phone}
              </div>
              <button
                type='button'
                className='changepassword bg-[#FED5D5] px-8 rounded-full py-1 border border-black mt-10'
                onClick={changePasswordFunction}
              >
                Change password
              </button>
              <ChangePass />
            </div>
          </div>

          <div className='bg-[#FFFFFF] rounded-3xl col-start-3 row-start-1 col-span-5 border-2 border-[#B9BFC9]'>
            <div className='flex mt-9 mr-9 justify-end'>
              <button
                type='button'
                className='updatefunct bg-[#FED5D5] px-8 rounded-full py-1 border border-black'
                onClick={updateFunction}
              >
                Update
              </button>
            </div>
            <form onSubmit={onSubmit} onChange={makeFormChangedStatus}>
              <div className='ml-24 mr-32'>
                <div className='text-4xl'>プロフィールページ</div>
                <div className='grid gap-y-28 mt-32 ml-16'>
                  <div className='col-span-1'>名前 :</div>
                  <div className='col-start-2 col-span-2 py-1'>
                    <input
                      className='inputedit indent-10 w-full border rounded-xl border-black '
                      disabled
                      name='name'
                      autoComplete='on'
                      {...register('name')}
                    ></input>
                    <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.name?.message}</div>
                  </div>
                  <div className='col-span-1 row-start-2'>メール :</div>
                  <div className='col-start-2 col-span-2 py-1'>
                    <input
                      className='inputedit indent-10 w-full border rounded-xl border-black'
                      disabled
                      name='email'
                      {...register('email')}
                    ></input>
                    <div className='mt-1 flex min-h-[1.75rem] text-lg text-red-600'>{errors.email?.message}</div>
                  </div>
                  <div className='col-span-1 row-start-3'>住所 :</div>
                  <div className='col-start-2 col-span-2 py-1'>
                    <input
                      className='inputedit indent-10 w-full border rounded-xl border-black'
                      disabled
                      name='address'
                      {...register('address')}
                    ></input>
                  </div>
                </div>
              </div>
              <div className='my-24 flex justify-center'>
                <button
                  type='submit'
                  className='updatefunct bg-[#FED5D5] px-8 rounded-full py-1 border border-black invisible'
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {modal && <UploadAvatar toggleModal={toggleModal} />}
    </div>
  )
}
