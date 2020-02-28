import Vue from 'vue'
import App from './App.vue'


import { ClientTable } from 'vue-tables-2'
// Vue.use(ClientTable, [options = {}], [useVuex = false], [theme = 'bootstrap3'], [swappables = {}]);
// Vue.use(ServerTable, [options = {}], [useVuex = false], [theme = 'bootstrap3'], [swappables = {}]);
Vue.use(ClientTable, {}, false, 'bootstrap3')



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
