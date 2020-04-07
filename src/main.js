import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { firestorePlugin } from 'vuefire'
import _ from 'lodash'
import VueMq from 'vue-mq'
import vueCustomElement from 'vue-custom-element'
import App from './App.vue'
import router from './router'
import store from './store'

import FireGun from './plugins/FireGun'

import Chatbot from './views/Chatbot.vue'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 900,
    desktop: 1200,
  },
})

Vue.filter('letterGenerator', (string) => {
  return string.split('')[0].toUpperCase()
})

Vue.filter('substringExtract', (string) => {
  return `${string.substring(0, 50)} ...`
})

Vue.use(BootstrapVue)
Vue.use(firestorePlugin)
Vue.use(FireGun)
Vue.use(vueCustomElement)

Vue.customElement('custom-chatbot', Chatbot)

Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
