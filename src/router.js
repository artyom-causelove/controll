import Vue from 'vue'
import Router from 'vue-router'

// eslint-disable-next-line no-unused-vars
import authGuard from '@/guards/auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/rooms',
      name: 'Rooms',
      component: () => import('@/views/app-rooms')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/app-login')
    }
  ]
})
