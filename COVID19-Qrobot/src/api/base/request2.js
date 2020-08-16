import axios from 'axios'

const request2 = axios.create({
  baseURL: '/api',
  timeout: 8000,
})

// request interceptor
request2.interceptors.request.use(
  (config) => {
    console.log('config>' + JSON.stringify(config))
    return config
  },
  (error) => {
    console.log('request-error>' + error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request2.interceptors.response.use(
  (response) => {
    console.log(response.data)
    const res = response.data
    console.log(res.ret)
    if (res.ret !== 0) {
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('response-error>' + error)
    return Promise.reject(error)
  }
)

export default request2
