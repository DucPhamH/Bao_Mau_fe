import Post from '../../components/Post'

const employeeApplying = {
  title: '1歳の赤ちゃんの世話を探しています',
  address: '東京',
  age: 20,
  experience: 2,
  salary: 50,
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni debitis adipisci nam vero, beatae cumque autem sequi officiis cum, est rem dolorum excepturi deserunt aliquam quia veritatis unde quo',
  img: 'https://cdn.onlinewebfonts.com/svg/img_103565.png'
}

export default function EmployeeApplyingList() {
  return (
    <div className='xl:w-[80%] rounded-2xl grid grid-cols-3 w-[95%] mx-64 gap-4 mt-24'>
      <div className='col-span-3 flex justify-center'>
        <div className='w-[80%] flex font-extrabold justify-center p-8 bg-white mx-64 text-4xl  rounded-2xl'>
          ベビーシッターアプリケーションのリスト
        </div>
      </div>
      <div className='buttons-below col-span-3 mx-32  bg-white h-fit rounded-2xl mt-8 mb-16'>
        <div className='flex flex-col gap-20 p-8'>
          <Post postProps={employeeApplying} />
        </div>
      </div>
    </div>
  )
}
