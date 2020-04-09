import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'
// 自定义配置创建 axios 实例
const http = axios.create({
    baseURL: 'http://localhost:3000/web/api'
})

// 添加请求拦截器 
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = sessionStorage.token
    if(token){
        config.headers.Authorization = 'Bearer ' + token
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 定义拦截器，全局捕获错误
http.interceptors.response.use(res => {
    //属于 2XX 范围的状态代码触发此功能
    return res
}, err => {
    //超出 2XX 范围的状态代码触发此功能
    if (err.response.data.message) {
        Vue.prototype.$toast({
            type: 'fail',
            message: err.response.data.message
        })
    }
    // 后端遇到任何接口需要登录的情况，都返回 401 状态码 ，前端收到 401 跳转到登录页面
    if(err.response.status === 401){
        router.push('/login')
    }
    return Promise.reject(err)
})


export default http