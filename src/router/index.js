import Vue from 'vue';
import Router from 'vue-router';
import store from '@/vuex/store';

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      component: resolve => require(['@/view/index/index.vue'], resolve),
    },
    {
      path: '/topic',
      component: resolve => require(['@/view/articleDetails/index.vue'], resolve),
    },
    {
      path: '/login',
      component: resolve => require(['@/view/login/index.vue'], resolve),
    },
    {
      name:'user',
      path: '/user/:name',
      component: resolve => require(['@/view/user/index.vue'], resolve),
    },
    {
      name:'msg',
      path: '/msg',
      component: resolve => require(['@/view/msg/index.vue'], resolve),
      meta: {
        requireAuth: true, 
      },
    },
    {
      name:'create',
      path: '/create',
      component: resolve => require(['@/view/newTopic/index.vue'], resolve),
      meta: {
        requireAuth: true,
      },
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
       const token = store.getters.getToken;
      token.length ? next():next({path: '/login',query: { redirect: to.fullPath }});
    } else {
        next();
    }
})

export default router;