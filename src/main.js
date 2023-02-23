// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons' // icon
import './permission' // permission control

//安装路由 、ElementUI

import '@/styles/index.scss'

import store from './store'


Vue.use(router)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: store,
  router:router,
  template: '<App/>',
  components: { App }
})
