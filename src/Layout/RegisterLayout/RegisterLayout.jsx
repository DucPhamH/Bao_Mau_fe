import { Link } from 'react-router-dom'

export default function RegisterLayout({ children }) {
  return (
    <section className='min-h-screen flex items-stretch text-white '>
      <div className='lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center back_ground_register'>
        <div className='w-full px-24 z-10'>
          <Link to='/' className='text-6xl font-bold text-left tracking-wide'></Link>
          <p className='text-3xl my-4'></p>
        </div>
      </div>
      <div className='lg:w-1/2 w-full flex bg-red-800 items-center justify-center text-center md:px-16 px-0 z-0'>
        <div className='absolute lg:hidden z-10 inset-0 bg-no-repeat bg-cover items-center back_ground_register'>
          <div className='absolute bg-black opacity-60 inset-0 z-0' />
        </div>
        <div className='w-full py-6 z-20'>{children}</div>
      </div>
    </section>
  )
}
