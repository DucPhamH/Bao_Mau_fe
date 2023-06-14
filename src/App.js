import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export function PlayMusic() {
  let audio = document.querySelector('audio')
  audio.src = 'https://docs.google.com/uc?export=download&id=1jOdSOycwttg579Zt9O3SBK3NrJ8nYbt4'
  audio.volume = 1
  audio.play().catch((error) => {})
}
function App() {
  const routeElement = useRouteElement()
  document.addEventListener('click', PlayMusic, { once: true })
  return (
    <div>
      <audio id='audio' loop></audio>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
