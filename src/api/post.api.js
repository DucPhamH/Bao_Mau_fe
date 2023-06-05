import http from '../utils/http'
export const createPost = (body) => http.post('posts/createPost', body)
