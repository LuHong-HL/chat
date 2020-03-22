import axios from 'axios'

// 自定义配置创建 axios 实例
const http = axios.create({
    baseURL: 'http://localhost:3000/web/api'
})

export default http