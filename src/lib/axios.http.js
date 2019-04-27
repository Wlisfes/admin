'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 22:46:55 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-04-27 22:01:35
 * @Types axios配置
 */


import axios from 'axios'
import logo from './axios.logo'


axios.defaults.baseURL='http://localhost:3000'
// axios.defaults.baseURL='http://api.lisfes.cn'
// axios.defaults.withCredentials = true


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

const Request = (param, url, type = 'GET') => {
    return new Promise((resolve, reject) => {
        if (type == 'GET') {
            axios.get(url, param).then(res => {
                resolve(res.data)
            }).catch(e => {
                reject(e)
            })
        }
        else if(type == 'POST') {
            axios.post(url, param).then(res => {
                resolve(res.data)
            }).catch(e => {
                reject(e)
            })
        }
    })
}


export default Request 