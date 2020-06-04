import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { VIcon, VSnackbar } from 'vuetify/lib';
import { Intersect } from 'vuetify/lib/directives';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  directives: {
    Intersect
  },
  components: {
    // the components which Toast.vue used
    VIcon,
    VSnackbar
  },
  render: h => h(App)
}).$mount('#app');
