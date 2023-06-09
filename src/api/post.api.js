import http from '../utils/http'
export const createPost = (body) => http.post('posts/createPost', body)
export const getAllPost = (params) => http.get('posts', { params })
export const getPost = (id) => http.get(`posts/${id}`)
