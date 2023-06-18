import money from '../../asset/animate/money.png'
import tick from '../../asset/img/tickcomplete.png'
export default function PaymentSuccess() {
  return (
    <div className='relative'>
      <img className='absolute w-[100%] h-[100%] pointer-events-none z-0' src={money} alt='' />
      <div className='flex justify-center items-center py-[4vw]'>
        <div className='rounded-[10rem] bg-white z-[1]'>
          <div className='mx-[2vw] my-[5vw]'>
            <div className='mx-[8vw]'>
              <div className='font-comfort italic text-green-600 bg-white text-[6vw]'>Payment success!</div>
              <div className='flex justify-center items-center'>
                <img src={tick} alt='' />
              </div>
              <div className='mt-[2vw] flex justify-center items-center font-playfair'>
                <div className='text-[6vw]'>-</div>
                <div className='text-green-700 text-[6vw]'>$40.000</div>
              </div>
            </div>
            <div className='mt-[3vw] flex justify-between font-itim'>
              <button className='rounded-full px-[4vw] py-[1vw] text-white text-4xl bg-[#7101FF] hover:bg-yellow-500'>
                View receipts
              </button>
              <button className='rounded-full px-[4vw] py-[1vw] text-white text-4xl bg-red-700 hover:bg-blue-700'>
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
