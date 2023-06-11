import Post from '../../components/Post'

const userRequest = {
  title: '1歳の赤ちゃんの世話を探しています',
  address: '東京',
  age: 20,
  experience: 2,
  salary: 50,
  startDate: '17/04/2023',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni debitis adipisci nam vero, beatae cumque autem sequi officiis cum, est rem dolorum excepturi deserunt aliquam quia veritatis unde quo',
  img: 'https://cdn.onlinewebfonts.com/svg/img_103565.png'
}

const buttons = [
  { content: 'アクセス', backgroundColor: 'bg-[#41E309]', color: 'white' },
  { content: 'キャンセル', backgroundColor: 'bg-[#E72253]', color: 'white' }
]

export default function UserRequestsList() {
  return (
    <div className='w-[70%] xl:w-[60%] mx-auto py-36'>
      <div className='w-[80%] h-[7rem] text-[28px] font-bold flex justify-center items-center mx-auto bg-white rounded-[20px] p-6 mb-6'>
        採用された仕事リスト
      </div>
      <div className='bg-white px-14 flex flex-col gap-8 py-16 justify-center items-center rounded-[20px]'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <Post postProps={userRequest} buttons={buttons} />
          <Post postProps={userRequest} buttons={buttons} />
          <Post postProps={userRequest} buttons={buttons} />
        </div>
      </div>
    </div>
  )
}
