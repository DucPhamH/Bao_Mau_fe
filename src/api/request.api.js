import http from '../utils/http'
export const createRequest = (body) => http.post('requests/createRequest', body)
export const createRequest2 = (body) => http.post('requests/createRequest2', body)
export const getRequestEmployee = (id) => http.get(`requests/getRequestEmployee/${id}`)
export const getRequestUser = () => http.get('requests/getRequestUser')
export const deleteRequestUser = (body) => http.post('requests/deleteRequestUser', body)
export const deleteRequestEmployee = (body) => http.post('requests/deleteRequestEmployee', body)
export const acceptRequest = (body) => http.post('requests/acceptRequest', body)
export const getAcceptRequets = () => http.get('requests/getAcceptRequets')
export const cancelRequest = (body) => http.post('requests/cancelRequest', body)
export const acceptCancelRequest = (body) => http.post('requests/acceptCancelRequest', body)
