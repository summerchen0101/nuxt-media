import axios from 'axios'

const _instance = axios.create({
  baseURL: process.env.VUE_APP_API_PATH,
  withCredentials: true,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'},
  validateStatus: (status) => {
    if (status === 500) {
      alert('API Error(500)')
    }
    // return (status >= 200 && status < 300) || status === 422
    return true
  }
})

_instance.interceptors.response.use(function (response) {
  // console.log(response)
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default _instance
