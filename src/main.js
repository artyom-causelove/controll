import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/fonts/_typo.scss'

import imageBox from '@/components/image-box'
import rectangleButton from '@/components/buttons/rectangle-button'
import circleButton from '@/components/buttons/circle-button'

Vue.config.productionTip = false

Vue.component('image-box', imageBox)
Vue.component('rectangle-button', rectangleButton)
Vue.component('circle-button', circleButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
