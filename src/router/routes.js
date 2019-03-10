/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 12:54:28 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-10 13:59:48
 * @Types 路由配置文件
 */



import Login from '../views/Login'
import Home from '../views/Home'

const Routes = [
    {
        path: '/',
        name: '首页',
        component: Home
    },
    {
        path: '/logon',
        name: 'login',
        component: Login
    }
]



export default Routes