import 'es6-promise/auto';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import './assets/main.css';
import routes from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
const app = new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount('#app');
