<template>
  <header class="header-wrapper" :class="{active: isActive}">
  <el-row :gutter="10">
    <el-col :span="16">
      <el-row :gutter="0">
        <el-col :span="5">
          <div class="grid-content" @click="changeFalse">
            <router-link to="/index" class="logo">
              <div class="logo-content"></div>
            </router-link>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content" @click="changeTrue">
            <router-link to="/course" class="text-area">课程</router-link>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content" @click="changeTrue">
            <router-link to="/topics" class="text-area ">专题<i class="icn-new"></i></router-link>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content" @click="changeTrue">
            <router-link to="/question" class="text-area">爱问</router-link>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content" @click="changeTrue">
            <router-link to="/write" class="text-area">简书</router-link>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4">
      <el-row :gutter="10">
        <div class="search">
          <el-input
            placeholder="请输入关键词"
            icon="search"
            v-model="inputkey"
            @click="handleIconClick">
          </el-input>
        </div>
      </el-row>
    </el-col>
    <el-col :span="4">
      <el-row :gutter="10">
          <div v-if="login">
            <el-col :span="12" :offset="8">
              <div class="grid-content">
                <router-link to="/information" class="text-area">个人信息</router-link>
              </div>
            </el-col>
          </div>
          <div v-else>
            <el-col :span="12" :offset="8">
              <el-row :gutter="2">
                <el-col :span="10">
                  <div class="grid-content text-area">
                    登录
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="grid-content text-area">
                    注册
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </div>
      </el-row>
    </el-col>
  </el-row>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isActive: false,
      login: false,
      inputkey: ''
    };
  },
  methods: {
    changeTrue() {
      this.isActive = true;
    },
    changeFalse() {
      this.isActive = false;
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    position: relative
    z-index: 10
    background: #ffffff
    transition: 1s all;
    &.active
      background: #000000
      .grid-content
        color: #ffffff
        .text-area
          color: #ffffff
          &:hover
            background: #252020
    .grid-content
      height: 60px
      line-height: 60px
      text-align: center
      color: #787d82
      .logo
        display: block
        padding-left: 20px
        .logo-content
          width: 140px
          height: 60px
          background: url(./logo-change.png)
        &.active
          .logo-content
            background: url(./logo.png)
      .text-area
        display: block
        color: #000000
        font-size: 14px
        &.active
          background: #252020
        .icn-new
          position: relative
          display: inline-block
          top: -10px
          width: 16px
          height: 16px
          background: url(./new.png) no-repeat
    .search
      line-height: 60px
      .el-input__inner
        border: 1px solid #e4e4e4;
</style>
