import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export function PlayMusic() {
  let audio = document.querySelector('audio')
  audio.src = 'https://docs.google.com/uc?export=download&id=1pGwGPBtf66cmnzmfLLmr_6fEw8uxIsUe'
  audio.volume = 0.15
  audio.play().catch((error) => {})
}
function App() {
  const routeElement = useRouteElement()
  document.addEventListener('click', PlayMusic, { once: true })
  return (
    <div>
      <audio id='audio' loop>
        <source type='audio/mpeg' />
      </audio>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
