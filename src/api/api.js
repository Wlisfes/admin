/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 23:18:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 23:41:20
 * @Types 接口文件
 */


import Request from '../lib/axios.Request'


//新增项目
export const setItem = param => {
    return Request(param, `/set/item`, 'POST')
}

//获取项目
export const getItem = param => {
    return Request(param, `/get/item`, 'GET')
}