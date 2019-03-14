/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 23:18:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 21:54:00
 * @Types 接口文件
 */


import Request from '../lib/axios.Request'


//新增项目
export const AddItem = param => {
    return Request(param, `/add/project`, 'POST')
}