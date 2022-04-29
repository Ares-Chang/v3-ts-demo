import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import router from '../router'

const request = axios.create({
  baseURL: 'http://xxx.xxx.xxx:8080',
})

// 请求拦截器
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = 'xxx'
    config.headers!.Authorization = `Bearer ${token}` // 注入统一的 token
    return config // 返回统一的 config ,会作为新的请求选项去进行请求
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  async (response: AxiosResponse) => {
    // 对响应数据做处理
    return response.data ? response.data : {}
  },
  (error: any) => {
    console.error(error)
    // 对响应错误做处理
    const { status } = error.response // 获取失败的状态码
    let message = '' // 提示信息
    switch (status) {
      case 400:
        message = '操作错误'
        break
      case 403:
        // router => 路由实例对象
        router.push('/login')
        break
      case 401:
        router.push('/login') // 强制回登录
        message = '用户信息过期，请重新登录！'
        break
      case 404:
        message = '连接异常!'
        break
      case 100001:
        message = '数据请求错误，请稍后重试！'
        break
      default:
        break
    }

    console.error(message)

    return Promise.reject(error.response)
  }
)

export default request
