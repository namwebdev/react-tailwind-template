import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data
    return response
  },
  (error) => {
    throw error
  }
)

export default axiosClient
