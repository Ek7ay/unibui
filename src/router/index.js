import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Index from '@/pages/index/Index'
import Contentindex from '@/pages/content/index/Contentindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children : [
        {
          path: 'contentindex',
          component: Contentindex
        },
        {
          path: "",
          component: Contentindex
        }
      ]
    }
  ]
})
