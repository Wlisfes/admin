import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import * as api from './api/api'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'
import './assets/font/font.css'
// import MavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'



// Vue.use(MavonEditor)
Vue.use(iView)
Vue.prototype.api = api
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
