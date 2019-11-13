import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import BootstrapVue from 'bootstrap-vue'
import VLightbox from 'vlightbox'
import VModal from 'vue-js-modal'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'

Vue.use(BootstrapVue)
Vue.use(VLightbox)
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
