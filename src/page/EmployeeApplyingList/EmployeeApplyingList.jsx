import Filter from '../../components/Filter'
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

const buttons = [
  { content: 'アクセス', backgroundColor: 'bg-[green]', color: 'white' },
  { content: 'キャンセル', backgroundColor: 'bg-[red]', color: 'white' }
]

export default function EmployeeApplyingList() {
  return (
    <div className='xl:w-[80%] rounded-2xl grid grid-cols-4 w-[95%] mx-auto gap-4 mt-24'>
      <div className='col-span-3'>
        <div className='w-[80%] p-8 bg-white text-center mx-auto rounded-2xl'>
          ベビーシッターアプリケーションのリスト
        </div>
      </div>
      <div className='col-span-3 bg-white h-fit rounded-2xl mt-8 mb-16'>
        <div className='w-[25%] bg-gray-600 rounded-2xl ml-8 mt-8 p-4'>A - Z</div>
        <div className='flex flex-col gap-6 p-8'>
          <Post postProps={employeeApplying} buttons={buttons} />
          <Post postProps={employeeApplying} buttons={buttons} />
          <Post postProps={employeeApplying} buttons={buttons} />
        </div>
      </div>
      <div className='col-span-1 bg-white ml-8 mt-8 h-fit rounded-2xl'>
        <Filter />
      </div>
    </div>
  )
}
