import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      component: require('@/view/index/index'),
    },
    {
      path: '/topic',
      component: require('@/view/articleDetails/index'),
    },
    {
      path: '/login',
      component: require('@/view/login/index'),
    },
    {
      name:'user',
      path: '/user/:name',
      component: require('@/view/user/index'),
    }
  ],
});
