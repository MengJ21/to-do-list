import axios from "axios";

const service = axios.create({
    baseURL: '/api', // 所有的请求地址前缀部分
    timeout: 60000, // 请求超时时间毫秒
    withCredentials: true, // 异步请求携带cookie
    headers: {
        // 设置后端需要的传参类型
        'Content-Type': 'application/json',
        'token': 'your token',
        'X-Requested-With': 'XMLHttpRequest',
    }
})
export default service
