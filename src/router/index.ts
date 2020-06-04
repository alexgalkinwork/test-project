import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BaseForm from '@/components/BaseForm/BaseForm.vue';
import ResultList from '@/components/ResultList/ResultList.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'BaseForm' }
  },
  {
    path: '/base-form',
    name: 'BaseForm',
    component: BaseForm
  },
  {
    path: '/result-list',
    name: 'ResultList',
    component: ResultList,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
