import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index'
import chatRoom from '@/views/chatRoom'
Vue.use(Router)

export const constantRouterMap =  [
  {
    path:'/',
    component: login
  },
  {path: '/404', component: () => import('@/views/404')},
  {
    path: '/chat',
    component:  chatRoom,
    // children: [{
    //   path: 'home',
    //   name: 'home',
    //   component: home,
    //   meta: {title: '首页', icon: 'home'}
    // }]
  }
]

export default new Router({
  routes:constantRouterMap
})

