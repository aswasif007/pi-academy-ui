import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/pages/login/Login';
import Home from '@/pages/home/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  routes
});

export default router;
