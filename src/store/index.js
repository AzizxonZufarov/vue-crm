import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(`https://anyapi.io/api/v1/exchange/rates?apiKey=${key}`)
      console.log(res);
      return await res.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category
  }
})
