import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { firestorePlugin } from 'vuefire'
import _ from 'lodash'
import VueMq from 'vue-mq'
import App from './App.vue'
import router from './router'
import store from './store'


import FireGun from './plugins/FireGun'

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
  return `${string.substring(0, 100)} ...`
})

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
