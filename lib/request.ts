// import axios, { AxiosInstance } from 'axios'
// import { error } from 'console'

// export interface HTTPResult<T = any> {
//   data: {
//     data: T
//     meta: {
//       pagination: Pagination
//     }
//   }
// }

// export interface Pagination {
//   page?: number
//   pageSize?: number
//   pageCount?: number
//   total?: number
// }

// export const instance = axios.create({
//   baseURL: 'http://127.0.0.1:1337/api',
//   timeout: 10000,
//   withCredentials: true
// })

// instance.interceptors.request.use(config => {
//   return config
// })

// instance.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     console.log(error, 'axios Error')
//   }
// )

// const apiService = {
//   $: instance,
//   request: <T = unknown>(...args: Parameters<AxiosInstance['request']>): Promise<HTTPResult<T>> =>
//     instance.request(...args),
//   get: <T = unknown>(...args: Parameters<AxiosInstance['get']>): Promise<HTTPResult<T>> => instance.get(...args),
//   delete: <T = unknown>(...args: Parameters<AxiosInstance['delete']>): Promise<HTTPResult<T>> =>
//     instance.delete(...args),
//   head: <T = unknown>(...args: Parameters<AxiosInstance['head']>): Promise<HTTPResult<T>> => instance.head(...args),
//   options: <T = unknown>(...args: Parameters<AxiosInstance['options']>): Promise<HTTPResult<T>> =>
//     instance.options(...args),
//   post: <T = unknown>(...args: Parameters<AxiosInstance['post']>): Promise<HTTPResult<T>> => instance.post(...args),
//   put: <T = unknown>(...args: Parameters<AxiosInstance['put']>): Promise<HTTPResult<T>> => instance.put(...args),
//   patch: <T = unknown>(...args: Parameters<AxiosInstance['patch']>): Promise<HTTPResult<T>> => instance.patch(...args)
// }

// export default apiService
