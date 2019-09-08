import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/fonts/_typo.scss'

import imageBox from '@/components/image-box'

Vue.config.productionTip = false

Vue.component('image-box', imageBox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
