import Vue from  'vue'
import qs from 'qs'
import Axios from 'axios'
import { nfSuccess , nfError } from '@/utils/methods'

const modules = require.context('./api',false,/\.js$/)

/*
* 整合api
* */
export const apis = modules.keys().reduce((apis,mod) => {
    const vs = modules(mod)
    return Object.keys(vs).reduce((apis,key) => {
        return  Object.assign(apis , 'default' === key ? vs[key] : { [key]:vs[key] })
    }, apis)
}, { })
console.info(apis)
// 注册到全局
Object.assign(Vue.prototype,apis)

// create
const http = Axios.create({
    baseURL: '/api',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    timeout: 1000 * 7
})

// default
export default http

// 将 http 注册到全局
Vue.prototype.http = http

// request
http.interceptors.request.use((config) => {
    const { method, data, type, responseType } = config
    if(/(post|put)/i.test(method) && type !== 'json' && typeof(data) === 'object' ){
        config.data = qs['stringify'](data)
    }
    if( responseType === 'blob' ) {
        config.timeout = 0
    }
    return config
})

// interceptors response
http.interceptors.response.use((response) => {
    const { status , data , config } = response
    const { result = { } , msg } = data , { method , quiet } = config
    // result code
    switch (data.succ || config.responseType || status == 200) {
        case true :
            // success message
            // nfSuccess(msg)
            switch (method) {
                case 'delete':
                case 'post'  :
                case 'put'   : !quiet && nfSuccess(msg)
            }
            return Promise.resolve(result)
            
        case 'blob':
            if(data.type === 'application/json') {
                nfError('服务异常，请稍后再试！')
                return Promise.reject(msg)
            } else {
                return Promise.resolve(response)
            }
        default :
            !quiet && nfError(msg)
            return Promise.reject({status , msg , config})
    }
}, r => {
    let message
    const {status, config = {} } = r.response || {}, {url = ''} = config
    // 根据返回状态提示
    switch (status) {
        case 100 : return Promise.reject('slient error')
        case 400 : message = '服务拒绝访问，请检查参数';break
        default  : message = '服务异常，请稍后再试';
    }
    // 提示错误信息
    nfError(message)
    console.error('api >' + url + '>' + status)
    const error = new Error(message)
    error.status = status

    return  Promise.reject(error)
})