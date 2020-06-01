import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HDUI from '~/index'
import router from './router'
Vue.config.productionTip = false

Vue.use(HDUI)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
