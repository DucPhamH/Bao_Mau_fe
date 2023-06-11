import http from '../utils/http'
export const createRequest = (body) => http.post('requests/createRequest', body)
export const createRequest2 = (body) => http.post('requests/createRequest2', body)
