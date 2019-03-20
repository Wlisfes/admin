/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 23:18:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-20 22:54:07
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

//添加文章
export const setTubok = param => {
    return Request(param, `/tubok/set`, 'POST')
}

//获取全部文章
export const getTubokAll = param => {
    return Request(param, `/tubok/get/all`, 'GET')
}

//根据id获取文章内容
export const getTubokid = param => {
    return Request(param, `/tubok/get/id`, 'GET')
}

//根据id修改文章是否发布
export const updateTubokStatusid = param => {
    return Request(param, `/update/tubokstatus/id`, 'POST')
}

//根据id设置是否为草稿
export const updateTubokDraftid = param => {
    return Request(param, `/update/tubokdraft/id`, 'POST')
}

//获取全部草稿
export const getTubokDraftAll = param => {
    return Request(param, `/tubok/draft/all`, 'GET')
}

//根据id删除草稿
export const deleteTubokid = param => {
    return Request(param, `/tubok/delete/id`, 'GET')
}
