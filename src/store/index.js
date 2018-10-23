import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import VueInstance from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Test Name',
    phone: null,
    message: null,
    loading: false,
    error: null,
    response: null
  },
  getters: {
    name (state) {
      return state.name
    },
    phone (state) {
      return state.phone
    },
    message (state) {
      return state.message
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    response (state) {
      return state.response
    }
  },
  mutations: {
    name (state, payload) {
      state.name = payload
    },
    phone (state, payload) {
      state.phone = payload
    },
    message (state, payload) {
      state.message = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    response (state, payload) {
      state.response = payload
    },
    clearResponse (state) {
      state.response = null
    }
  },
  actions: {
    setLoading ({commit}, payload) {
      commit('setLoading', payload)
    },
    setError ({commit}, payload) {
      commit('setError', payload)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    setResponse ({commit}, payload) {
      commit('response', payload)
    },
    async sendMessage ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      commit('response', null)

      const message = {
        name: payload.name,
        phone: payload.phone,
        message: payload.message
      }
      await VueInstance.$http.post('http://localhost:3000/messages', message)
        .then(response => response.json())
        .then(data => {
          commit('response', 'Your message has been successfully sent!')
          commit('setLoading', false)
        }).catch(error => {
          commit('setError', 'An error has occurred!')
          commit('setLoading', false)
          throw error
        })
    }
  }
})
