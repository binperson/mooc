<template>
<header class="header" :class="{ active: isActive }">
  <div class="header-wrapper" :class="{ active: isActive }">
    <div class="logo" @click="changeFalse">
      <router-link to="/index" class="logo-link"></router-link>
    </div>
    <div class="change-active" :class="{ active: isActive }">
      <ul class="item-wrapper">
        <li @click="changeTrue" class="tab-item">
          <router-link to="/course" class="tab-link" :class="{ active: isActive }">课程</router-link>
        </li>
        <li @click="changeTrue" class="tab-item">
          <router-link to="/topics" class="tab-link" :class="{ active: isActive }">专题<i class="icn-new"></i></router-link>
        </li>
        <li @click="changeTrue" class="tab-item">
          <router-link to="/question" class="tab-link" :class="{ active: isActive }">爱问</router-link>
        </li>
        <li @click="changeTrue" class="tab-item">
          <router-link to="/write" class="tab-link" :class="{ active: isActive }">简书</router-link>
        </li>
      </ul>
      <div @click="changeTrue" class="login-area" v-show="false">
        <router-link to="/information">个人信息</router-link>
      </div>
    </div>
    <ul class="header-unlogin">
      <li class="unlogin-item">登录</li>
      <li class="unlogin-item">注册</li>
    </ul>
  </div>
</header>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    changeTrue() {
      this.isActive = true;
    },
    changeFalse() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  height: 60px
  background: #ffffff
  transition: 1s all;
  &.active
    background: #000000
  .header-wrapper
    display: flex
    padding-right: 10px
    height: 60px
    line-height: 60px
    text-align: center
    &.active
      color: #ffffff
    .logo
      flex: 0 0 160px
      box-sizing: border-box
      padding: 0 20px
      .logo-link
        display: block
        height: 60px
        width: 160px
        transition: 1s all;
        background: url(./logo-change.png)
        &.active
          background: url(./logo.png)
    .change-active
      flex: 1
      &.active
        color: #ffffff
      .item-wrapper
        display: flex
        .tab-item
          flex: 0 0 78px
          font-size: 16px
          .tab-link
            display: block
            color: #07111b
            &.active
              color: #ffffff
            &.active.bgActive
              background: #252020
            .icn-new
              position: relative
              display: inline-block
              top: -10px
              width: 16px
              height: 16px
              background: url(./new.png) no-repeat
    .header-unlogin
      flex: 0 0 120px
      display: flex
      .unlogin-item
        flex: 1
</style>
