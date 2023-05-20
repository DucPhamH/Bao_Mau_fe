import http from '../utils/http'
export const registerAccount = (body) => http.post('users/register', body)
export const loginAccount = (body) => http.post('users/login', body)
export const logoutAccount = () => http.post('users/logout')

export const currentAccount = () => http.get('users/current')