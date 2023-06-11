import http from '../utils/http'
export const createRequest = (body) => http.post('requests/createRequest', body)
