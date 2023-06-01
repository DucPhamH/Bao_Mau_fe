import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouteElement()
  document.addEventListener(
    'click',
    function () {
      let audio = document.querySelector('audio')
      audio.volume = 0.15
      audio.play()
    },
    {
      once: true
    }
  )
  return (
    <div>
      <audio id='audio' loop>
        <source
          src='https://docs.google.com/uc?export=download&id=1pGwGPBtf66cmnzmfLLmr_6fEw8uxIsUe'
          type='audio/mpeg'
        />
      </audio>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
