import http from '../utils/http'
export const createPayment = (body) => http.post('requests/createPayment', body)
