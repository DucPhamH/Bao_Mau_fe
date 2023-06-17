import moment from 'moment/moment'
import { useRef, useState } from 'react'
export default function Timer() {
  const div = useRef(null),
    seconds = useRef(null),
    session = useRef(null)
  const [showClock, toggleShowClock] = useState(true)

  function time() {
    let d, s, m, h, sesn, splitStr, splitStr2
    d = moment().format('LTS')
    splitStr = d.split(':')
    splitStr2 = splitStr[2].split(' ')
    s = splitStr2[0]
    m = splitStr[1]
    h = splitStr[0]

    sesn = splitStr2[1]
    if (h < 10) h = '0' + h

    // var mnth = d.getMonth() + 1
    // var date = d.getDate()
    // var year = d.getFullYear()
    // var daylist = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    // // var fa_day = d.getDay()
    // // fa_day = daylist[fa_day]

    // if (date < 10) {
    //   date = '0' + date
    // }
    // if (mnth < 10) {
    //   mnth = '0' + 0
    // }
    if (div.current) div.current.innerHTML = h + ':' + m
    // day.current.innerHTML = fa_day
    if (seconds.current) seconds.current.innerHTML = s
    if (session.current) session.current.innerHTML = sesn
    // dat.current.innerHTML = date + '-' + mnth + '-' + year
  }

  setInterval(time, 1000)

  return (
    <>
      <div className={showClock ? 'absolute w-[100%] cursor-default select-none z-[3]' : 'z-[1] absolute'}>
        <div className='fixed bottom-0 left-0'>
          <div className={showClock ? '' : 'invisible pointer-events-none'}>
            <div className='bg-black h-[8vw] w-[20vw] rounded-[10px] border-[5px] border-solid border-[#FFC300]'>
              <div
                onClick={() => toggleShowClock(false)}
                className='absolute right-[0.1vw] top-[-1px] text-[2vw] font-bold cursor-pointer hover:text-[#FF0000] text-[#FFC300]'
              >
                &#60;
              </div>
              <div className='text-[3vw] font-segmented7 mt-[1vw] italic'>
                <div className='text-[rgba(194,206,206,0.12)] absolute left-[3vw]'>
                  <span className='!font-segmented14 text-[1.5vw] top-0 left-[-2vw] absolute italic'>~~</span>
                  88:88&nbsp;
                  <span className='text-[2vw]'>88</span>
                </div>
                <div className='absolute text-[#FFC300] left-[3vw]'>
                  <span
                    ref={session}
                    className='!font-segmented14 text-[1.5vw] top-0 left-[-2vw] absolute italic'
                  ></span>
                  <span ref={div}></span> <span ref={seconds} className='text-[2vw] text-[#FFC300]'></span>
                </div>
              </div>
              {/* <br />
          <div className='date'>
            <div className='date-bg'>88-08-2088</div>
            <div ref={dat} className='date-front' id='date'></div>
          </div>
          <div className='day'>
            <div className='day-bg'>~~~</div>
            <div ref={day} className='day-front' id='din'></div>
          </div> */}
            </div>
          </div>
          <div
            className={showClock ? 'absolute invisible pointer-events-none' : 'bottom-[-2vw] left-0 h-[10vw] absolute'}
          >
            <div
              onClick={() => toggleShowClock(true)}
              className='bg-black text-[2vw] border-[5px] rounded-[5px] font-bold hover:text-[#FF0000] cursor-pointer border-solid border-[#FFC300] text-[#FFC300]'
            >
              &#62;
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
