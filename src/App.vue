<template>
  <div class="wrapper">
    <div class="mask" v-show="true"></div>
    <sign v-show="true"></sign>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header';
import sign from 'components/sign/sign';
export default {
  components: {
    'v-header': header,
    'sign': sign
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapper
  width: 1350px
  position: relative
  .mask
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 30
    background-color: #000
    opacity: .75
</style>
