import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsDot } from 'react-icons/bs'
import { TbLocation } from 'react-icons/tb'
import { BsPersonFill } from 'react-icons/bs'
import { BsCardText } from 'react-icons/bs'
export default function EmployeeInfo() {
  return (
    <div className=' bg-[#DCEAFF] flex justify-center items-center flex-col'>
      <div className='w-[90%] bg-[#FFF] mt-12 mb-24 rounded-3xl p-32'>
        <div className='text-4xl leading-relaxed'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row items-center'>
              <div className='text-[12rem]'>
                <CgProfile />
              </div>
              <div className='ml-20 font-bold'>
                <div className='flex flex-row items-center'>
                  <div>
                    <div>Le Thi A</div>
                  </div>
                  <div className='flex flex-row items-center ml-12'>
                    <div className='text-[#41E309] text-7xl'>
                      <BsDot />
                    </div>
                    <div className='text-xl -ml-4'>オンライン</div>
                  </div>
                </div>
                <div className='text-3xl/relaxed'>
                  <div className='flex flex-row items-center'>
                    <div>
                      <TbLocation />
                    </div>
                    <div className='ml-2'>東京</div>
                  </div>
                  <div>
                    年齢: 22歳&emsp;経験: 3年
                    <br />
                    サービス価格: から50000円/h&emsp;登録日: 12/12/2020
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className='w-[14rem] h-[6rem] bg-[#7101FF] text-white rounded-[20px] hover:bg-[#2200ff] text-4xl'>
                採用
              </button>
            </div>
          </div>
          <div className='mt-12'>
            <div className='flex flex-row items-center'>
              <div>
                <BsPersonFill />
              </div>
              <div className='ml-12'>自分の紹介</div>
            </div>
            <div className='flex flex-row leading-10 mt-6'>
              <div>
                <BsCardText />
              </div>
              <div className='ml-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sit temporibus quos recusandae, eos,
                esse quis magnam fuga laudantium, tempore ipsam laborum! Quas reprehenderit dolorum id cum quaerat
                asperiores sint!
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sit temporibus quos recusandae, eos,
                esse quis magnam fuga laudantium, tempore ipsam laborum! Quas reprehenderit dolorum id cum quaerat
                asperiores sint!
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sit temporibus quos recusandae, eos,
                esse quis magnam fuga laudantium, tempore ipsam laborum! Quas reprehenderit dolorum id cum quaerat
                asperiores sint!
              </div>
            </div>
          </div>
          <div className='mt-12 px-20 leading-[5rem]'>
            <div>総合案内</div>
            <ul className='list-disc marker:text-[#7101FF]'>
              <div className='columns-xl'>
                <li>誕生日: 19/03/2000</li>
                <li>性別: 女性</li>
                <li>国籍: ベトナム</li>
                <li>経験: 2 年</li>
                <li>言語: 日本語、英語</li>
                <li>学歴: 大学</li>
              </div>
              <li className='leading-10 mt-5'>
                スキル： Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sit temporibus quos
                recusandae, eos, esse quis magnam fuga laudantium, tempore ipsam laborum! Quas reprehenderit dolorum id
                cum quaerat asperiores sint!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
