/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import VueSweetAlert2 from 'sweetalert2';

import 'sweetalert2/*/sweetalert2.js';
import 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(VueSweetAlert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
