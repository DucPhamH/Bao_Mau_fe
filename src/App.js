import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouteElement()
  document.addEventListener(
    'click',
    function () {
      document.querySelector('audio').play()
    },
    { once: true }
  )
  return (
    <div>
      <audio id='audio' loop autoPlay>
        <source
          src='https://docs.google.com/uc?export=download&id=1Ei8gl-Prz9NNPqY4LLsef49MG_E2KiyK'
          type='audio/mpeg'
        />
      </audio>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
