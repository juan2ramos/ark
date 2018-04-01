import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10
  },
  getters: {
    doubleCount (state, getters) {
      return state.count * 2
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    increment10 (state, payload = {}) {
      state.count += payload.number || 1
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    incrementAsync (context, payload) {
      console.log(context)
      setTimeout(() => {
        context.commit('increment', payload)
      }, 2000)
    }
  },
  modules: {
    post
  }
})

export default store
