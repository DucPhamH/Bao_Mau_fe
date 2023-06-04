import Post from '../../components/Post'

// Mockup UserPosts code

const userPost = {
  title: '1歳の赤ちゃんの世話を探しています',
  address: '東京',
  ageRange: [20, 100],
  experienceRange: [2, 100],
  salary: 50,
  dateStart: '17/04/2023',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni debitis adipisci nam vero, beatae cumque autem sequi officiis cum, est rem dolorum excepturi deserunt aliquam quia veritatis unde quo'
}

const buttons = [{ content: '候補者を見る', backgroundColor: 'bg-[#C226F9]' }]

export default function UserPosts() {
  return (
    <div className='w-[70%] xl:w-[60%] mx-auto py-36'>
      <div className='w-[80%] flex justify-center items-center mx-auto bg-white rounded-2xl p-6 mb-6'>
        あなたが作成した仕事リスト
      </div>
      <div className='bg-white px-14 flex flex-col gap-8 py-16 justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <Post postProps={userPost} buttons={buttons} />
          <Post postProps={userPost} buttons={buttons} />
          <Post postProps={userPost} buttons={buttons} />
        </div>
        <button
          type='button'
          class='px-10 py-3 text-[16px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit'
        >
          Submit
        </button>
      </div>
    </div>
  )
}
