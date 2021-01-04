import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputValue: ''
  },
  mutations: {
    changeInputValue(state, payload) {
      state.inputValue = payload
    }
  }
})
