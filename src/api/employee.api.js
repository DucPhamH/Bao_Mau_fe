import http from '../utils/http'

export const profileEmployee = () => http.get('employees/profileEmployee')
export const updateEmployee = (body) => http.put('employees/updateEmployee', body)
export const getAllEmployee = (params) => http.get('employees', { params })
export const getEmployee = (id) => http.get(`employees/${id}`)
