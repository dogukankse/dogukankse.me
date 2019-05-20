import Vue from 'vue';
import Vuetify from 'vuetify';

// styling
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faGithub, faLinkedin, faTwitter);

// Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
