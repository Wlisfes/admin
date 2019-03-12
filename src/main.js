import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import api from './api'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'
import './assets/font/font.css'






Vue.use(iView)
Vue.prototype.api = api
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
