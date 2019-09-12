import store from '@/store'

export default function (to, from, next) {
  if (store.getters.isAuth) {
    next()
  } else {
    next('/login?loginError=false')
  }
}
