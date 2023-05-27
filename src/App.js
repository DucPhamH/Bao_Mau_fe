import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouteElement()
  return (
    <div>
      <audio id='audio' loop autoplay>
        <source
          src='https://docs.google.com/uc?export=download&id=1z7x24wY-t234MhNxA_Vf60QUMHaNeDK8'
          type='audio/mpeg'
        />
      </audio>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
