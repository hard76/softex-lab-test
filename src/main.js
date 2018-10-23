import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  VueResource,
  components: { App },
  template: '<App/>'
})
