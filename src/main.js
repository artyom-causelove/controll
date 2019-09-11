import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

import '@/assets/fonts/_typo.scss'

import imageBox from '@/components/image-box'
import appInput from '@/components/inputs/app-input'
import rectangleButton from '@/components/buttons/rectangle-button'
import addButton from '@/components/buttons/add-button'
import circleButton from '@/components/buttons/circle-button'

Vue.config.productionTip = false

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
      apiKey: 'AIzaSyB4Gam8txMQF-eOOo-GMQyRqk426CONl6U',
      authDomain: 'controll-c0b3f.firebaseapp.com',
      databaseURL: 'https://controll-c0b3f.firebaseio.com',
      projectId: 'controll-c0b3f',
      storageBucket: '',
      messagingSenderId: '236842237861',
      appId: '1:236842237861:web:49b44edf210b9171af324c'
    }

    firebase.initializeApp(firebaseConfig)
  }
}).$mount('#app')
