import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BaseForm from '@/components/BaseForm/BaseForm.vue';
import ResultList from '@/components/ResultList/ResultList.vue';
import LoginForm from '@/components/LoginForm/LoginForm.vue';
import axios from 'axios';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'LoginForm' }
  },
  {
    path: '/base-form',
    name: 'BaseForm',
    component: BaseForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login-form',
    name: 'LoginForm',
    component: LoginForm,
    meta: {
      guest: true
    }
  },
  {
    path: '/result-list',
    name: 'ResultList',
    component: ResultList,
    meta: {
      requiresAuth: true
    },
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const url = 'http://localhost:3000/verify-token';
  const token = localStorage.getItem('jwtToken');
  const config = {
    headers: {
      Authorization: token
    }
  };

  // Check if route requires auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verify JWT
    axios.get(url, config).then(response => {
      if (response.data.success !== true) {
        next({ name: 'LoginForm' });
      } else {
        next();
      }
    });

    // Check if route only avaiable to guests
  } else if (to.matched.some(record => record.meta.guest)) {
    if (token == null) {
      if (to.name === 'LoginForm') {
        next();
      }
      next({ name: 'LoginForm' });

      // Verify JWT
    } else {
      axios.get(url, config).then(response => {
        if (response.data.success !== true) {
          next({ name: 'LoginForm' });
        } else {
          next({ name: 'BaseForm' });
        }
      });
      next();
    }
  }
});

export default router;
