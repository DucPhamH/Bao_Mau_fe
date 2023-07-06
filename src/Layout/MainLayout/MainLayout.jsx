import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Mainlayout({ children }) {
  return (
    <>
      <div className='flex flex-col min-h-[100vh]'>
        <div className='top-0 z-10 backdrop-filter bg-transparent fixed w-full h-[100px] pointer-events-none'>
          <Header />
        </div>

        <div className='pt-40 z-0 h-auto min-h-[calc(100vh_-_110px)] text-black bg-[#DCEAFF]'>{children}</div>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Mainlayout
