import axios from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constants/httpStatusCode.enum'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccessTokenToLS } from './auth'

// class Http {
//   private accessToken
//   constructor(){
//     this.instance = axios.create({
//       baseURL: 'http://localhost:4000/api/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//   }
// }

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

var accessToken = getAccessTokenFromLS()

instance.interceptors.request.use(
  (config) => {
    if (accessToken && config.headers) {
      config.headers.Authorization = accessToken
      return config
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    // console.log(response)
    const { url } = response.config

    if (url === 'users/login') {
      // console.log(url)
      accessToken = response.data.data.accessToken
      console.log(accessToken)
      saveAccessTokenToLS(accessToken)
    } else if (url === 'users/logout') {
      accessToken = ''
      clearAccessTokenFromLS()
    }
    return response
  },
  function (error) {
    if (error.response?.status !== HttpStatusCode.BadRequest) {
      const data = error.response?.data
      const message = data.message || error.message
      toast.error(message)
    }
    return Promise.reject(error)
  }
)

const http = instance

export default http