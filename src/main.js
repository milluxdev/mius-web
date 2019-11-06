import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './plugins/element.js'
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(HappyScroll)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
