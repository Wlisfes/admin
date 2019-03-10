/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 10:39:19 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-10 17:15:31
 * @Types 工具函数
 */


import Cookies from 'js-cookie'
import { TOKEN_KEY,COOKIE_EXPIRES } from '../config'


/**
 * 存储token
 * @param {*} token 
 */
export const setToken = token => {
    Cookies.set(TOKEN_KEY, token, { expires: COOKIE_EXPIRES || 1 })
}

/**
 * 获取token
 */
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if(token)
        return token
    else
        return false
}
