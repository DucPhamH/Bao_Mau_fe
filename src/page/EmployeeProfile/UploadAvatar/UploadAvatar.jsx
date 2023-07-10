import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { updateImage } from '../../../api/auth.api'
import { toast } from 'react-toastify'
//import { queryClient } from '../../..'

export default function UploadAvatar({ toggleModal }) {
  const [image, setImage] = React.useState('')
  const updateAvatarMutation = useMutation({
    mutationFn: (body) => updateImage(body)
  })
  const handleImage = (e) => {
    // console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    const formData = new FormData()
    formData.append('imageUser', image)
    updateAvatarMutation.mutate(formData, {
      onSuccess: (data) => {
        //queryClient.invalidateQueries({ queryKey: ['profile'] })
        setTimeout(function () {
          toast('更新に成功 !') // 。(17)
          window.location.reload()
        }, 2000)
      },
      onError: (error) => {
        console.log(error)
      }
    })
  }

  return (
    <div className='modal'>
      <div className='overlay'></div>
      <div className='modal-content bg-white w-[420px]'>
        <div className='w-full flex justify-center items-center'>
          <input type='file' name='file' onChange={handleImage} />
        </div>
        <div className='w-full flex justify-evenly items-center'>
          <div className='mt-10 flex justify-center'>
            <button
              onClick={toggleModal}
              className='bg-[#97a9ef] px-16 rounded-full py-1 hover:bg-slate-400 border border-black'
            >
              Cancel
            </button>
          </div>
          <div className='mt-10 flex justify-center'>
            <button
              onClick={handleApi}
              className='bg-[#FED5D5] px-16 rounded-full py-1 hover:bg-slate-400 border border-black'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
