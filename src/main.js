import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import * as firebase from 'firebase'

import '@/assets/fonts/_typo.scss'

import imageBox from '@/components/image-box'
import appInput from '@/components/inputs/app-input'
import rectangleButton from '@/components/buttons/rectangle-button'
import addButton from '@/components/buttons/add-button'
import circleButton from '@/components/buttons/circle-button'

Vue.config.productionTip = false

Vue.use(VueReCaptcha, { siteKey: '6LdfI7gUAAAAALGmQwLQ9uadO5Nseq_AYzqETmmo' })

Vue.component('image-box', imageBox)
Vue.component('rectangle-button', rectangleButton)
Vue.component('circle-button', circleButton)
Vue.component('add-button', addButton)
Vue.component('app-input', appInput)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    let firebaseConfig = {
      apiKey: 'AIzaSyApHUkaHxUbUlQ2DswGtn61BBhJ6SqgQP0',
      authDomain: 'controll-37c24.firebaseapp.com',
      databaseURL: 'https://controll-37c24.firebaseio.com',
      projectId: 'controll-37c24',
      storageBucket: '',
      messagingSenderId: '622713998408',
      appId: '1:622713998408:web:a92a78f4bbf95b9efc1c7d'
    }

    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
