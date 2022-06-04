import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,

  },
  mutations: {
    login(state) {
      state.isAuth = true
    },
    logOut(state) {
      state.isAuth = false
    }
  },
  actions: {
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    }
  },
  modules: {
  }
})
