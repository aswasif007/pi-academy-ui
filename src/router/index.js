import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/pages/login/Login';
import Home from '@/pages/home/Home';
import Browse from '@/pages/browse/Browse';

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
  {
    path: '/browse',
    name: 'browse',
    component: Browse,
  },
];

const router = new VueRouter({
  routes
});

export default router;
