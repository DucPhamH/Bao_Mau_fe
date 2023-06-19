import { Link } from 'react-router-dom'
import money from '../../asset/animate/money.png'
import tick from '../../asset/animate/tickcomplete.png'
export default function PaymentSuccess() {
  return (
    <div className='relative'>
      <img className='absolute w-[100%] h-[100%] pointer-events-none z-0' src={money} alt='' />
      <div className='flex justify-center items-center pb-[4vw] pt-[1vw]'>
        <div className='rounded-[10rem] bg-white z-[1]'>
          <div className='mx-[2vw] mb-[1.5vw] mt-[1vw]'>
            <div className='mx-[8vw]'>
              <div className='font-comfort italic text-green-600 bg-white text-[6vw]'>Payment success!</div>
              <div className='flex justify-center items-center'>
                <img src={tick} alt='' />
              </div>
            </div>
            <div className='mt-[2vw] flex justify-between font-itim'>
              <Link to='/contractedjobslist'>
                <button className='rounded-full px-[4vw] py-[1vw] text-white text-4xl bg-[#7101FF] hover:bg-yellow-500'>
                  View receipts
                </button>
              </Link>
              <Link to='/'>
                <button className='rounded-full px-[4vw] py-[1vw] text-white text-4xl bg-red-700 hover:bg-blue-700'>
                  Back to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
