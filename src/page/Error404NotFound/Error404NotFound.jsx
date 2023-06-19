import React from 'react'
import wallImg from '../../asset/img/darkwall.jpg'
import Eyes from '../../asset/img/eyes.png'
import Eyes2 from '../../asset/img/eyes2.png'
import Eyes3 from '../../asset/img/eyes3.png'
import Eyes4 from '../../asset/img/eyes4.png'

export default function Error404NotFound() {
  document.addEventListener(
    'click',
    function () {
      let audio = document.querySelector('audio')
      audio.currentTime = 0
      let num = Math.floor(Math.random() * 3)
      switch (num) {
        case 0:
          audio.src = 'https://docs.google.com/uc?export=download&id=1oJX4Zg9w2Ab2h8t38ypj4VqXJu30-4Gh'
          break
        case 1:
          audio.src = 'https://docs.google.com/uc?export=download&id=1TzPMhywnLfUEYeXnVF3UOlWAKmbvSIfh'
          break
        default:
          audio.src = 'https://docs.google.com/uc?export=download&id=1fQYp7Ov8bRHW1ZDmhuuLzxo3n6y4aZDz'
          break
      }
      audio.load()
      audio.volume = 0.6
      audio.play()
    },
    { once: true }
  )

  let randomTop, randomLeft, timerandom
  setTimeout(() => {
    document.querySelectorAll('.randomPosImg').forEach(function (randomPosImg) {
      randomTop = Math.floor(Math.random() * 90)
      randomLeft = Math.floor(Math.random() * 90)
      randomPosImg.style.top = randomTop + '%'
      randomPosImg.style.left = randomLeft + '%'
      randomPosImg.style.visibility = 'visible'
    })
  }, 21500)
  setInterval(() => {
    document.querySelectorAll('.randomPosImg').forEach(function (randomPosImg) {
      timerandom = Math.floor(Math.random() * 100)
      if (timerandom > 90) {
        randomTop = Math.floor(Math.random() * 90)
        randomLeft = Math.floor(Math.random() * 90)
        randomPosImg.style.top = randomTop + '%'
        randomPosImg.style.left = randomLeft + '%'
      }
    })
  }, 1000)

  return (
    <>
      <div className=' bg-black cursor-default overflow-x-hidden select-none'>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes2} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes3} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes4} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes2} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes3} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes4} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes2} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes3} alt=''></img>
        </div>
        <div className='absolute w-[10vw] h-[10vw] randomPosImg invisible overflow-hidden'>
          <img src={Eyes4} alt=''></img>
        </div>
        <div className='w-[100vw] h-[90vh] flex justify-center items-center gap-9'>
          <div className='rounded-[50%] w-[30vw] h-[30vw] overflow-hidden flex justify-center items-center'>
            <div className='animation404 shadow-[0_0_20rem_rgba(255,255,255,1)] rounded-[50%] w-[30vw] h-[30vw] overflow-hidden relative flex justify-center items-center animate-entrance404first'>
              <div className='text-[#880808] z-10 text-[25vw] font-blooddrip mt-[10vw]'>4</div>
              <img className=' absolute max-w-none' src={wallImg} alt='' />
            </div>
          </div>
          <div className='rounded-[50%] w-[30vw] h-[30vw] overflow-hidden flex justify-center items-center'>
            <div className='animation404 rounded-[50%] w-[30vw] h-[30vw] relative overflow-hidden flex justify-center items-center animate-entrance404second'>
              <div className='text-[#880808] z-10 text-[25vw] font-blooddrip mt-[10vw]'>0</div>
              <img className=' absolute max-w-none' src={wallImg} alt='' />
            </div>
          </div>
          <div className='rounded-[50%] w-[30vw] h-[30vw] overflow-hidden flex justify-center items-center'>
            <div className='animation404 rounded-[50%] w-[30vw] h-[30vw] overflow-hidden relative flex justify-center items-center animate-entrance404third'>
              <div className='text-[#880808] z-10 text-[25vw] font-blooddrip mt-[10vw]'>4</div>
              <img className=' absolute max-w-none' src={wallImg} alt='' />
            </div>
          </div>
        </div>
        <div className='text-[#880808] text-[10vw] font-blooddrip mt-[-10vh] z-10'>
          <span className='animation404 animate-fadeIn1'>E</span>
          <span className='animation404 animate-fadeIn2'>R</span>
          <span className='animation404 animate-fadeIn3'>R</span>
          <span className='animation404 animate-fadeIn4'>O</span>
          <span className='animation404 animate-fadeIn5'>R</span>
        </div>
      </div>
    </>
  )
}
