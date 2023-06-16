import http from '../utils/http'
export const createPost = (body) => http.post('posts/createPost', body)
export const getAllPost = (params) => http.get('posts', { params })
export const getPost = (id) => http.get(`posts/${id}`)
export const getAllPostSend = (id) => http.get(`posts/getAllPostSend/${id}`)
export const getAllPostUser = () => http.get('posts/getAllPostUser')
export const getAllPostUserAccept = () => http.get('posts/getAllPostUserAccept')
export const getAllPostUserPayment = () => http.get('posts/getAllPostUserPayment')
