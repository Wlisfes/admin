/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 12:54:28 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-31 16:44:33
 * @Types 路由配置文件
 */



import Login from '../views/Login'
import Home from '../views/Home'

const Routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/home',
        children: [
            {
                //首页
                path: '/home',
                name: 'home',
                component: () => import('../views/HomeChild.vue')
            },{
                //文章列表
                path: '/all/tulist',
                name: 'tulist',
                component: () => import('../views/TuList.vue')
            },
            {
                //添加文章
                path: '/add/tubook',
                name: 'tubook',
                component: () => import('../views/Tubook.vue')
            },
            {
                //草稿箱
                path: '/dll/turubb',
                name: 'turubb',
                component: () => import('../views/TuRubb.vue')
            },
            {
                //全部标签
                path: '/all/label',
                name: 'alllabel',
                component: () => import('../views/AllLabel.vue')
            },
            {
                //留言板
                path: '/message',
                name: 'message',
                component: () => import('../views/Message.vue')
            },
            {
                //文章评论
                path: '/articlereview',
                name: 'articlereview',
                component: () => import('../views/Articlereview.vue')
            },
            {
                //全部项目
                path: '/all/project',
                name: 'allproject',
                component: () => import('../views/AllProject.vue')
            },
            {
                //添加项目
                path: '/add/project',
                name: 'addproject',
                component: () => import('../views/AddProject.vue')
            }
        ]
    }
    
]



export default Routes