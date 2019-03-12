/*
 * @Author: 情雨随风 
 * @Date: 2019-03-10 12:54:28 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-12 22:15:43
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
        redirect: '/homechild',
        children: [
            {
                //首页
                path: '/homechild',
                name: 'homechild',
                component: () => import('../views/HomeChild.vue')
            },
            {
                //全部标签
                path: '/all/label',
                name: 'alllabel',
                component: () => import('../views/AllLabel.vue')
            },
            {
                //新增标签
                path: '/add/label',
                name: 'addlabel',
                component: () => import('../views/AddLabel.vue')
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