/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 23:18:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-31 16:41:06
 * @Types 接口文件
 */


import http from '../lib/axios.http'


//新增项目
export const setItem = param => http(param, `/item/set`, 'POST')

//获取项目
export const getItem = param => http(param, `/item/get`, 'GET')

//修改项目信息
export const updateItem = param => http(param, `/item/update`, 'POST')

//删除项目
export const deleteItem = param => http(param, `/item/delete`, 'GET')

//添加文章
export const setTubok = param => http(param, `/tubok/set`, 'POST')

//获取全部文章
export const getTubokAll = param => http(param, `/tubok/get/all`, 'GET')

//根据id获取文章内容
export const getTubokid = param => http(param, `/tubok/get/id`, 'GET')

//根据id修改文章是否发布
export const updateTubokStatusid = param => http(param, `/update/tubokstatus/id`, 'POST')

//根据id设置是否为草稿
export const updateTubokDraftid = param => http(param, `/update/tubokdraft/id`, 'POST')

//获取全部草稿
export const getTubokDraftAll = param => http(param, `/tubok/draft/all`, 'GET')

//根据id删除草稿
export const deleteTubokid = param => http(param, `/tubok/delete/id`, 'GET')

//新增标签
export const setLabel = param => http(param, `/label/set`, 'POST')

//获取全部标签
export const getLabel = param => http(param, `/label/get`, 'GET')

//编辑标签
export const updateLabel = param => http(param, `/label/update`, 'POST')

//删除标签
export const deleteLabel = param => http(param, `/label/delete`, 'GET')
