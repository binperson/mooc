// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import index from 'components/index/index';
import course from 'components/course/course';
import topics from 'components/topics/topics';
import question from 'components/question/question';
import write from 'components/write/write';
import information from 'components/information/information';

Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', component: index },
  { path: '/course', component: course },
  { path: '/topics', component: topics },
  { path: '/question', component: question },
  { path: '/write', component: write },
  { path: '/information', component: information }
];
const router = new VueRouter({
  linkActiveClass: 'active bgActive',
  routes: routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});

router.push('/index');
