import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { firestorePlugin } from 'vuefire'
import _ from 'lodash'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 900,
    desktop: 1200,
  }
})

import FireGun from './plugins/FireGun'

Vue.use(BootstrapVue)
Vue.use(firestorePlugin)
Vue.use(FireGun)

Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
