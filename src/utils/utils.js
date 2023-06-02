import axios from 'axios'
import HttpStatusCode from '../constants/httpStatusCode.enum'
export function isAxiosError(error) {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError(error) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.BadRequest
}

export function getAges(dateOB) {
  const date = new Date(dateOB)
  const currentDate = new Date()
  const year = date.getFullYear()
  const currentYear = currentDate.getFullYear()

  return currentYear - year
}
