import * as firebase from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      commit('setLoading', true)

      try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(response.user.uid))
      } catch (error) {
        commit('setError', error.message)

        throw error
      }

      commit('setLoading', false)
    },
    async loginUser ({ commit }, { email, password }) {
      commit('setLoading', true)

      try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(response.user.uid))
      } catch (error) {
        commit('setError', error.message)

        throw error
      }

      commit('setLoading', false)
    },
    autoLoginUser ({ commit }, payload) {
      commit('setUser', payload.uid)
    },
    async logoutUser ({ commit }) {
      commit('setLoading', true)

      try {
        await firebase.auth().signOut()
        commit('setUser', null)
      } catch (error) {
        commit('setError', error)

        throw error
      }

      commit('setLoading', false)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuth (state) {
      return state.user !== null
    }
  }
}
