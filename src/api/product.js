import axiosClient from './index'

const productApi = {
  getProducts: (params) => {
    return axiosClient.get('/categories', { params })
  },
}

export default productApi
