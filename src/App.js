import { useRef } from 'react'
import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
function App() {
  const routeElement = useRouteElement()
  let refAudio = useRef(null)
  function PlayMusic() {
    if (refAudio.current) {
      refAudio.current.play()
      document.removeEventListener('click', PlayMusic, { once: true })
    }
  }

  document.addEventListener('click', PlayMusic, { once: true })

  return (
    <PayPalScriptProvider
      options={{
        clientId: 'AZ4lwqmqrbSbK2tF9nmLaKBu_9Y1HPw5Gf0k3rY-ApMRaaDPf4jghyuTk0KXl0DWQGBQ84I_7-shsuU6',
        currency: 'JPY'
      }}
    >
      <div>
        <div className='absolute w-[100%] cursor-default select-none'>
          {/* <div className='fixed bottom-8 left-20 w-[11vw] z-50 flex'></div> */}

          <i className='fixed right-0 bottom-8 z-50 backdrop-blur-[20px]'>
            Đừng đánh dân &copy;2023-2023. All rights reserved.
          </i>
        </div>

        <audio ref={refAudio} id='audio' loop>
          <source
            src='https://docs.google.com/uc?export=download&id=1jOdSOycwttg579Zt9O3SBK3NrJ8nYbt4'
            type='audio/mpeg'
          />
        </audio>
        {routeElement}
        <ToastContainer />
      </div>
    </PayPalScriptProvider>
  )
}

export default App
