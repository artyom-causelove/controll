import Vue from 'vue'
import Vuex from 'vuex'

import User from '@/models/user'
import Shared from '@/models/shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Shared
  }
})
