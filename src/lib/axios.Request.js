'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 22:46:55 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-10 23:46:20
 * @Types axios配置
 */


import axios from 'axios'
import logo from './axios.logo'


//请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use(
    res => {
        logo(res.request, res)
        return res
    },
    err => {
        logo(err.request, err.response)
        return err
    }
)


const Request = async ops => {
    if(ops.method === "POST") 
        return axios({
            url: ops.url,
            method: ops.method,
            data: ops.data
        })
    else if(ops.method === "GET")
        return axios(ops.url, {
            method: ops.method,
            params: ops.data
        })
}

export default Request 