// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import index from 'components/index/index';
import course from 'components/course/course';
import topics from 'components/topics/topics';
import manager from 'components/manager/manager';
import write from 'components/write/write';
import information from 'components/information/information';
import main from 'components/main/main';
import user from 'components/user/user';
import changeinfo from 'components/changeinfo/changeinfo';
import applylecturer from 'components/applylecturer/applylecturer';
import homepage from 'components/homepage/homepage';
import teachermanager from 'components/teachermanager/teachermanager';
import learn from 'components/learn/learn';
import video from 'components/videostart/videostart';

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
  Button,
  Pagination,
  Switch,
  Checkbox,
  CheckboxGroup,
  Upload
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
Vue.component(Pagination.name, Pagination);

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Upload);

Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  {
    path: '/main',
    name: 'main',
    component: main,
    children: [{
      path: 'index',
      name: 'index',
      component: index
    }, {
      path: 'course',
      name: 'course',
      component: course
    }, {
      path: 'topics',
      name: 'topics',
      component: topics
    }, {
      path: 'manager',
      name: 'manager',
      component: manager
    }, {
      path: 'write',
      name: 'write',
      component: write
    }, {
      path: 'information',
      name: 'information',
      component: information,
      children: [{
        path: 'homepage',
        name: 'homepage',
        component: homepage
      }, {
        path: 'teachermanager',
        name: 'teachermanager',
        component: teachermanager
      }]
    }, {
      path: 'user',
      name: 'user',
      component: user,
      children: [{
        path: 'setprofile',
        name: 'setprofile',
        component: changeinfo
      }, {
        path: 'apply',
        name: 'apply',
        component: applylecturer
      }]
    }, {
        path: 'learn/:id',
        component: learn
    }, {
      path: 'video/:id/:index',
      component: video
    }]
  }
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

router.push('/main/index');
