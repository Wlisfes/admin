import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import * as api from './api/api'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'
import './assets/font/font.css'

import VueHighlightJS from 'vue-highlight.js'
import 'vue-highlight.js/lib/allLanguages'
import 'highlight.js/styles/default.css'




Vue.use(VueHighlightJS)
Vue.use(iView)
Vue.prototype.api = api
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
