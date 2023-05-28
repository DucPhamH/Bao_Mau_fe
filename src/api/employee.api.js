import http from '../utils/http'

export const profileEmployee = () => http.get('employees/profileEmployee')
export const updateEmployee = (body) => http.put('employees/updateEmployee', body)
