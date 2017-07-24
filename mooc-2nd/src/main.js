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
import docheck from 'components/docheck/docheck';
import docheckt from 'components/docheckt/docheckt';
import recentlearn from 'components/recentlearn/recentlearn';
import comment from 'components/comment/comment';
import answer from 'components/answer/answer';
import chat from 'components/chat/chat';
import allcomments from 'components/allcomments/allcomments';
import chapter from 'components/chapter/chapter';
import deletecourse from 'components/delete/delete';
import ownwrite from 'components/ownwrite/ownwrite';

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
  Upload,
  Radio,
  Table,
  TableColumn,
  RadioGroup,
  Icon
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
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);

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
      path: 'chat',
      name: 'chat',
      component: chat
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
      component: manager,
      children: [{
        path: 'docheck',
        name: 'docheck',
        component: docheck
      }, {
        path: 'docheckt',
        name: 'docheckt',
        component: docheckt
      }, {
        path: 'delete',
        name: 'delete',
        component: deletecourse
      }]
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
      }, {
        path: 'recentlearn',
        name: 'recentlearn',
        component: recentlearn
      }, {
        path: 'ownwrite',
        name: 'ownwrite',
        component: ownwrite
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
        component: learn,
        children: [{
          path: 'comments',
          name: 'allcomments',
          component: allcomments
        }, {
          path: 'chapter',
          name: 'chapter',
          component: chapter
        }]
    }, {
      path: 'video/:id/:index',
      component: video,
      children: [{
        path: 'comment',
        name: 'comment',
        component: comment
      }, {
      path: 'answer',
      name: 'answer',
      component: answer
      }]
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
