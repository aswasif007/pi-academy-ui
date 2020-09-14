import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ClickOutside from 'vue-click-outside'
import moment from 'moment';

Vue.directive('offclick', ClickOutside)
Vue.filter('fromNow', value => {
  const datetime = new Date(value);
  return moment(datetime).fromNow();
})

Vue.config.productionTip = false


async function initiateApp() {
  await store.users.dispatch('reloadCurrentUser');
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}

initiateApp();
