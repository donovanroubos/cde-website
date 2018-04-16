import Vue from 'vue';
import Router from 'vue-router';

// Pages
import Home from '@/pages/Home';
import Grid from '@/pages/Grid';

// Components

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
    },
  ],
});
