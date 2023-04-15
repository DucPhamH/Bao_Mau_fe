import axios from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constants/httpStatusCode.enum'

const instance = axios.create({
  baseURL: 'https://json-server-test-sand.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const http = instance

export default http
