import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
// import BGM from './components/BGM'
function App() {
  const routeElement = useRouteElement()

  return (
    <PayPalScriptProvider
      options={{
        clientId: 'AZ4lwqmqrbSbK2tF9nmLaKBu_9Y1HPw5Gf0k3rY-ApMRaaDPf4jghyuTk0KXl0DWQGBQ84I_7-shsuU6',
        currency: 'JPY'
      }}
    >
      <div>
        {/* <BGM /> */}
        {routeElement}
        <ToastContainer />
      </div>
    </PayPalScriptProvider>
  )
}

export default App
