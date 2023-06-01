import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { currentAccount, updateUser } from '../../api/auth.api'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userSchema } from '../../utils/rules'
import { toast } from 'react-toastify'
import UploadAvatar from '../EmployeeProfile/UploadAvatar'

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
    document.querySelectorAll('.elementeffects').forEach((e) => {
      if (getComputedStyle(e).visibility === 'visible') e.style.visibility = 'hidden'
      else e.style.visibility = 'visible'
    })
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
        <form onSubmit={onSubmit}>
          <div className='mt-10 grid gap-x-0 pb-24'>
            <div className='bg-[#FFFFFF] rounded-3xl col-span-4 border-2 border-[#B9BFC9]'>
              <div className='mb-8 mt-40 text-center'>
                <div
                  onClick={toggleModal}
                  className='cursor-pointer rounded-[50%] border-2 overflow-hidden inline-block justify-center items-center w-56 h-56'
                >
                  <img src={user?.data.image} alt='imageuser' />
                </div>

                <div className='bg-[#e8e7e74d] mx-36 mt-16 border-2 rounded-full text-center'>{user?.data.name}</div>

                <div className='px-6 mt-5 mx-36 border rounded-full text-center shadow-[inset_0px_4px_4px_0_rgb(0_0_0_/_0.1)] bg-[rgba(232,231,231,0.3)]'>
                  {user?.data.phone}
                </div>
              </div>
            </div>

            <div className='bg-[#FFFFFF] rounded-3xl col-start-5 row-start-1 col-span-5 border-2 border-[#B9BFC9]'>
              <div className='flex mt-9 mr-9 justify-end'>
                <button
                  type='button'
                  className='elementeffects bg-[#FED5D5] px-8 rounded-full py-1 border border-black visible'
                  onClick={updateFunction}
                >
                  Update
                </button>
              </div>
              <div className='ml-24 mr-32'>
                <div className='text-4xl'>プロフィールページ</div>
                <div className='grid gap-y-28 mt-32 ml-16'>
                  <div className='col-span-1'>名前 :</div>
                  <input
                    className='inputedit indent-10 col-start-2 col-span-2 border rounded-xl border-black py-1'
                    disabled
                    name='name'
                    autoComplete='on'
                    {...register('name')}
                  ></input>
                  <div className='col-span-1 row-start-2'>メール :</div>
                  <input
                    className='inputedit indent-10 col-start-2 col-span-2 border rounded-xl border-black py-1'
                    disabled
                    name='email'
                    {...register('email')}
                  ></input>
                  <div className='col-span-1 row-start-3'>住所 :</div>
                  <input
                    className='inputedit indent-10 col-start-2 col-span-2 border rounded-xl border-black py-1'
                    disabled
                    name='address'
                    {...register('address')}
                  ></input>
                </div>
              </div>
              <div className='my-24 flex justify-center'>
                <button
                  type='submit'
                  className='elementeffects bg-[#FED5D5] px-8 rounded-full py-1 border border-black invisible'
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {modal && <UploadAvatar toggleModal={toggleModal} />}
    </div>
  )
}
