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
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  Input,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Button
} from 'element-ui';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Input.name, Input);
Vue.component(Card.name, Card);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Tag.name, Tag);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Button.name, Button);

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
