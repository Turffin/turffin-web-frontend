import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getToken, clearToken } from './auth'

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    if (!token && config.url && !config.url.includes('/login') && !config.url.includes('/public')) {
      console.warn('No authentication token found for protected route:', config.url)
    }

    return config
  },
  (error: AxiosError) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ API Response: ${response.status} ${response.config.url}`)
    }

    return response
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          clearToken()
          if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
            window.location.href = '/login'
          }
          break
        case 403:
          console.error('❌ Forbidden: Access denied')
          break
        case 404:
          console.error('❌ Not Found: Resource not available')
          break
        case 500:
          console.error('❌ Server Error: Internal server error')
          break
        default:
          console.error(`❌ API Error: ${status}`, data)
      }
    } else if (error.request) {
      console.error('❌ Network Error: No response received')
    } else {
      console.error('❌ Error:', error.message)
    }

    return Promise.reject(error)
  }
)

export default api
