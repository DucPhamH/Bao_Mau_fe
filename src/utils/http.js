import axios from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constants/httpStatusCode.enum'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccessTokenToLS, saveInfoFromLS } from './auth'

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

const URL = {
  BASE_URL: 'http://localhost:4000/api/',
  DEPLOY_URL: 'https://bao-mau-be-0v27.onrender.com/api/'
}

const instance = axios.create({
  baseURL: URL.DEPLOY_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

var accessToken = getAccessTokenFromLS()

instance.interceptors.request.use(
  (config) => {
    //console.log(config)
    if (accessToken && config.headers) {
      config.headers.Authorization = accessToken
      //console.log(config.headers.Authorization)
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
      //console.log(accessToken)
      saveInfoFromLS(response.data.data.user)
      saveAccessTokenToLS(accessToken)
    } else if (url === 'users/logout') {
      console.log(response.data)
      accessToken = ''
      clearAccessTokenFromLS()
      toast(response.data.message)

      // window.location.reload()
    }
    return response
  },
  function (error) {
    if (error.response?.status !== HttpStatusCode.BadRequest) {
      const data = error.response?.data
      const message = data.message || error.message
      toast.error(message)
    }
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      const data = error.response?.data
      console.log(data)
      const message = data.message || error.message
      clearAccessTokenFromLS()
      toast.error(message)
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

const http = instance
//console.log(http.headers)

export default http
