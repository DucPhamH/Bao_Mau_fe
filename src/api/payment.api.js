import http from '../utils/http'
export const createPayment = (body) => http.post('requests/createPayment', body)
export const getPayment = (id) => http.get(`requests/getPayment/${id}`)
export const updatePayment = (body) => http.put('requests/updatePayment', body)
