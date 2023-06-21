import { useRef, useState } from 'react'
import animate from '../../asset/animate/animate.gif'
import idle1 from '../../asset/animate/idle1.png'
import idle2 from '../../asset/animate/idle2.png'
import idle3 from '../../asset/animate/idle3.png'
import idle4 from '../../asset/animate/idle4.png'
import leftArrow from '../../asset/animate/leftArrowKey.png'
import rightArrow from '../../asset/animate/rightArrowKey.png'
import whiteModel from '../../asset/animate/white.png'
export default function Moving() {
  let movingLeft = false,
    movingRight = false,
    randomIdle,
    value
  const preloadImg = [idle1, idle2, idle3, idle4, leftArrow, rightArrow]
  const idle = [idle1, idle2, idle3, idle4],
    charElement = useRef(null),
    leftArrowEl = useRef(null),
    rightArrowEl = useRef(null)
  const event1 = (e) => {
      //   console.log(getComputedStyle(charEl).getPropertyValue('margin-left'))
      if (e.repeat) return
      if (e.key === 'ArrowLeft') {
        if (charElement.current) {
          charElement.current.src = animate
          charElement.current.style.transform = 'scaleX(-1)'
        }
        if (leftArrowEl.current) leftArrowEl.current.style.backgroundColor = 'cyan'
        movingLeft = true
        movingRight = false
      } else if (e.key === 'ArrowRight') {
        if (charElement.current) {
          charElement.current.src = animate
          charElement.current.style.transform = 'scaleX(1)'
        }
        if (rightArrowEl.current) rightArrowEl.current.style.backgroundColor = 'cyan'
        movingLeft = false
        movingRight = true
      }
    },
    event2 = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        randomIdle = Math.floor(Math.random() * 4)
        movingLeft = false
        movingRight = false
        if (charElement.current) {
          charElement.current.src = idle[randomIdle]
          if (e.key === 'ArrowLeft') charElement.current.style.transform = 'scaleX(-1)'
          else charElement.current.style.transform = 'scaleX(1)'
        }
        if (e.key === 'ArrowLeft' && leftArrowEl.current) leftArrowEl.current.style.backgroundColor = 'black'
        else if (rightArrowEl.current) rightArrowEl.current.style.backgroundColor = 'black'
      }
    }
  // document.addEventListener('keydown', event1)
  // document.addEventListener('keyup', event2)
  function animation() {
    if (charElement.current) {
      let charEl = document.getElementById('charModel')
      let ml = getComputedStyle(charEl).getPropertyValue('margin-left')
      //   console.log(charElement.current.style.marginLeft)
      if (movingLeft === true) {
        charElement.current.style.marginLeft = ml.replace(/(\d+)([^0-9]*)$/, function (temp, x, y) {
          value = parseInt(x, 10)
          if (value > 10) return value - 2 + y
        })
      } else if (movingRight === true) {
        charElement.current.style.marginLeft = ml.replace(/(\d+)([^0-9]*)$/, function (temp, x, y) {
          value = parseInt(x, 10)
          if (value < 820) return value + 2 + y
        })
      }
    }
  }
  let interval
  //interval = setInterval(animation, 30)

  let control = true
  const toggleControl = () => {
    control = !control
    if (control === true) {
      document.removeEventListener('keydown', event1)
      document.removeEventListener('keyup', event2)
      clearInterval(interval)
      document.addEventListener('keydown', event1)
      document.addEventListener('keyup', event2)
      interval = setInterval(animation, 30)
      if (charElement.current) charElement.current.src = idle1
      if (leftArrowEl.current) leftArrowEl.current.style.visibility = 'visible'
      if (rightArrowEl.current) rightArrowEl.current.style.visibility = 'visible'
    } else {
      document.removeEventListener('keydown', event1)
      document.removeEventListener('keyup', event2)
      clearInterval(interval)
      if (charElement.current) charElement.current.src = whiteModel
      if (leftArrowEl.current) leftArrowEl.current.style.visibility = 'hidden'
      if (rightArrowEl.current) rightArrowEl.current.style.visibility = 'hidden'
    }
  }
  const [isLoading, setIsLoading] = useState(true)
  const cacheImages = async (preloadImg) => {
    const promises = await preloadImg.map((src) => {
      return new Promise(function () {
        new Image().src = src
      })
    })
    await Promise.all(promises)
    setIsLoading(false)
  }
  cacheImages(preloadImg)
  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <div className='h-[40%] w-[100%] overflow-x-hidden flex justify-between'>
          <img className='bg-black invisible' ref={leftArrowEl} src={leftArrow} alt='' />
          <div className='w-full'>
            <img
              id='charModel'
              onClick={toggleControl}
              ref={charElement}
              src={whiteModel}
              className='h-[100%] ml-[10px]'
              alt=''
            />
          </div>
          <img className='bg-black invisible' ref={rightArrowEl} src={rightArrow} alt='' />
        </div>
      )}
    </>
  )
}
