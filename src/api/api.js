/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 23:18:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-19 22:35:58
 * @Types 接口文件
 */


import Request from '../lib/axios.Request'


//新增项目
export const setItem = param => {
    return Request(param, `/item/set`, 'POST')
}

//获取项目
export const getItem = param => {
    return Request(param, `/item/get`, 'GET')
}

//修改项目信息
export const updateItem = param => {
    return Request(param, `/item/update`, 'POST')
}

//删除项目
export const deleteItem = param => {
    return Request(param, `/item/delete`, 'GET')
}

//获取全部文章
export const getTubok = param => {
    return Request(param, `/tubok/get`, 'GET')
}

//根据id获取文章
export const getTubokid = param => {
    return Request(param, `/tubok/get/id`, 'GET')
}

//新增文章
export const setTubok = param => {
    return Request(param, `/tubok/set`, 'POST')
}