import { GiPositionMarker } from 'react-icons/gi'
export default function ContractedJob() {
  return (
    <div className='pt-5 pb-16 mt-10 grid grid-cols-5 rounded-xl border border-black shadow-[0_2px_1px_-1px_black]'>
      <div className='col-span-1 flex justify-center items-center'>
        <div className='rounded-[50%] border-2 overflow-hidden w-[10vw] h-[10vw] flex justify-center items-center bg-white'>
          <img src='' alt='imageuser' />
        </div>
      </div>
      <div className='col-start-2 col-span-3 flex-col'>
        <div className='text-3xl'>1歳の赤ちゃんの世話を探しています</div>
        <div className='flex mt-2'>
          <GiPositionMarker className='-ml-2' size={20} />
          <div className='-mt-1 text-3xl'>東京</div>
        </div>
        <div className='flex mt-4'>
          <div className='line-clamp-1 w-[11vw]'>年齢: 20 - 100</div>
          <div className='line-clamp-1 w-[19vw]'>実験 : 2 - 100 年</div>
          <div className='line-clamp-1'>給料: 500</div>
        </div>
        <div className='mt-4'>勤務開始日 : 17/4/2023</div>
        <div className='mt-4 line-clamp-3'>
          私の赤ちゃんは男の子で、少し多動で、従順です。歩けるし、話せるし、食べて寝れる。彼女の熱心で愛情深い赤ちゃんが必要です。お昼はお母さんと子どもたちとランチ。
        </div>
      </div>

      <div className='col-start-5 col-span-1 flex'>
        <button className='ml-20 mr-10 self-end py-3 rounded-full w-[100%] text-white bg-[#C226F9] hover:bg-green-500'>
          Xem chi tiết
        </button>
      </div>
    </div>
  )
}
