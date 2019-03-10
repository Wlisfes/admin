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

import $Witch from '../lib/witch-suit'
const $witch = $Witch(router)

$witch.rules([
  {
    match: '/',
    validator() {
      let token = getToken()
      console.log(token)
      return token ? false : true
    },
    reactor() {
      console.log('reactor /login')
      return '/logon'
    }
  }
])

$witch.before(() => iView.LoadingBar.start())
$witch.after(() => iView.LoadingBar.finish())

export default router