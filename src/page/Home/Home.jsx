import React, { useContext } from 'react'
import bg from '../../asset/img/bg.png'
import { AppContext } from '../../contexts/app.context'
import { FaBabyCarriage } from 'react-icons/fa'
import { TbChefHat } from 'react-icons/tb'
export default function Home() {
  const { info } = useContext(AppContext)
  console.log(info?.roles)
  const check = Boolean(info?.roles === 1)
  console.log(check)

  return (
    <div className='relative overflow-x-hidden w-[100%]'>
      <img src={bg} alt='not found' className='w-full object-fit h-[calc(100vh_-_210px)]' />
      <div className='absolute w-full h-full top-0 left-0'>
        <div className='w-full flex justify-center items-center my-28'>
          <div className='bg-[#9EFFA8] text-[#FA1313] text-8xl font-alex flex justify-center items-center h-44 w-[500px] rounded-full'>
            COOKCARE
          </div>
        </div>

        {/* <button className='bg-[#87FDE8] mx-5 font-ankokuzonji text-5xl py-12 w-full rounded-full'>
            お前はもう死んでいる
          </button> */}
        <div className='bg-[#87FDE8] mx-5 font-unown text-8xl py-12 rounded-full overflow-hidden whitespace-nowrap relative'>
          <span className='absolute animate-move whitespace-nowrap inline-block'>
            <div className='flex'>
              {/* <img src={pepe} alt='' className='h-24' />
              <p className=''>babysitters chefs</p>
              <img src={pepe} alt='' className='h-24 transform scale-x-[-1]' /> */}
              <TbChefHat></TbChefHat>Chefs
              <TbChefHat></TbChefHat>and
              <FaBabyCarriage></FaBabyCarriage>Babysitters
              <FaBabyCarriage className='h-24 transform scale-x-[-1]'></FaBabyCarriage>
            </div>
          </span>
          <span id='homepage-animation2' className='animate-move whitespace-nowrap inline-block'>
            <div className='flex'>
              {/* <img src={pepe} alt='' className='h-24' />
              <p className=''>chefs babysitters</p>
              <img src={pepe} alt='' className='h-24 transform scale-x-[-1]' /> */}
              <FaBabyCarriage></FaBabyCarriage>Babysitters
              <FaBabyCarriage className='h-24 transform scale-x-[-1]'></FaBabyCarriage>and
              <TbChefHat></TbChefHat>
              Chefs
              <TbChefHat></TbChefHat>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
