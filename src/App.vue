<template>
  <div class="wrapper">
    <div class="mask" v-show="sign"></div>
    <sign v-show="sign" @hidesign = "hidesign" :active-name = 'activeName'></sign>
    <v-header @showsign="showsign"></v-header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header';
import sign from 'components/sign/sign';
export default {
  data() {
    return {
      sign: false,
      activeName: 'first'
    };
  },
  methods: {
    hidesign() {
      this.sign = false;
    },
    showsign(act) {
      this.sign = true;
      this.activeName = act;
    }
  },
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
