import Vue from 'vue'
import App from './App.vue'
import * as VueThreejs from 'vue-threejs'
import vuetify from './plugins/vuetify';

Vue.use(VueThreejs)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

