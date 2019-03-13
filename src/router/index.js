
import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'
import iView from 'iview'
import { getToken } from '../lib/util'
import { LOGIN_NAME } from '../config/index'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes
})

// import $Witch from '../lib/witch-suit'
// const $witch = $Witch(router)

// $witch.rules([{
//       match: '/',
//       validator() {
//         console.log(1)
//         return true
//       },
//       reactor() {
//         console.log(2)
//         return `/login`
//       }
//     }
// ])

// $witch.before(() => iView.LoadingBar.start())
// $witch.after(() => iView.LoadingBar.finish())


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    const token = getToken()
    console.log(token)
    if (!token && to.name !== LOGIN_NAME) {
      //未登录且要跳转的页面不是登录页
      iView.Message.warning('未登录，请先登录！')
      next({
        name: LOGIN_NAME
      })
    } else if(!token && to.name === LOGIN_NAME) {
      //未登陆且要跳转的页面是登录页
      next()
    } else if(token && to.name === LOGIN_NAME) {
      //已登录且要跳转的页面是登录页
      next({
        name: 'Home'
      })
    } else {
      next()
    }
 
})

router.afterEach(to => {
    iView.LoadingBar.finish()
})

export default router