/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 23:18:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-10 23:44:23
 * @Types 用户模块接口
 */


import Request from '../lib/axios.Request'


/**
 * 注册用户
 * @param {*} ops 
 */
export const pushToUserAccount = ops => {
    return Request({
        url: `http://localhost:3000/user/set`,
        method: `GET`,
        data: ops || {}
    })
}


