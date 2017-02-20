<template>
  <div class="information">
    <div class="bg-other">
      <div class="user-info">
        <h3 class="user-name clearfix">
          <span>binperson</span>
        </h3>
        <div class="about-info">
          <span class="gender"></span> Web前端工程师
          <span class="u-info-learn">学习时长 <em>64小时41分</em></span>
        </div>
        <div class="user-desc">这位同学很懒，木有签名的说～</div>
        <div class="study-info clearfix">
          <div class="follows item">
            <a href="">
              <em>0</em>
            </a>
            <span>关注</span>
          </div>
          <div class="followers item">
            <a href="">
              <em>1</em>
            </a>
            <span>粉丝</span>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="slider">
        <div class="user-pic">
          <div class="user-pic-bg"></div>
          <img src="./header.jpg" alt="">
          <div class="set-btn">
            <a href="">
              <i class="icon-cog"></i>
            </a>
          </div>
        </div>
        <ul>
          <li>
            <a href="" class="active">
              <i class="icon-home"></i>
              <span>主页</span>
              <b class="icon-drop_right"></b>
            </a>
          </li>
          <li>
            <a href="">
              <i class="icon-tick"></i>
              <span>课程</span>
              <b class="icon-drop_right"></b>
            </a>
          </li>
          <li>
            <a href="">
              <i class="icon-wen"></i>
              <span>爱问</span>
              <b class="icon-drop_right"></b>
            </a>
          </li>
          <li>
            <a href="">
              <i class="icon-book"></i>
              <span>简书</span>
              <b class="icon-drop_right"></b>
            </a>
          </li>
        </ul>
      </div>
      <div class="u-container">
        <div class="page-home">
          <div class="dyanmic-title-wrap">
            <p class="dynamic-title">Ta的动态</p>
          </div>
          <p class="nodata">暂无任何动态</p>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import footer from 'components/footer/footer';
export default {
  components: {
    'v-footer': footer
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.information
  min-height: 750px
  padding-bottom: 99px
  .bg-other
    height: 220px
    background: url(./temp1.jpg) center top no-repeat #000
    background-size: cover
    .user-info
      position: relative
      width: 712px
      padding-left: 241px
      padding-right: 247px
      padding-top: 60px
      margin: 0 auto
      .user-name
        font-size: 32px
        font-weight: 600
        line-height: 40px
        text-align: left
        color: #fff
        span
          float: left
      .about-info
        font-size: 14px
        color: #fff
        line-height: 20px
        text-align: left
        margin-top: 6px
        .gender
          display: inline-block
          width: 16px
          height: 16px
          background: url(./gender.png) no-repeat
          vertical-align: -3px
        .u-info-learn
          margin-left: 10px
      .user-desc
        font-size: 14px
        line-height: 24px
        color: #fff
        text-align: left
        margin-top: 20px
        word-break: break-all
        word-wrap: break-word
        opacity: .5
      .study-info
        position: absolute
        top: 115px
        right: 10px
        min-width: 200px
        text-align: right
        .item
          height: 48px
          display: inline-block
          em
            display: block
            font-size: 18px
            line-height: 24px
            color: #fff
            text-align: center
            font-weight: 700
          span
            display: block
            font-size: 14px
            color: #fff
            line-height: 24px
            text-align: center
            opacity: .5
        .follows
          margin-right: 40px
  .wrap
    position: relative
    width: 1200px
    margin: 0 auto
    .slider
      position: absolute
      width: 200px
      left: 0
      top: -190px
      .user-pic
        position: relative
        margin-bottom: 20px
        .user-pic-bg
          width: 200px
          height: 200px
          background-color: #fff
          opacity: .2
          border-radius: 100px
          transition: all .3s
        img
          position: absolute
          left: 4px
          top: 4px
          width: 192px
          height: 192px
          border-radius: 95px
          transition: all .3s
        .set-btn
          width: 24px
          height: 24px
          position: absolute
          left: 0
          top: 0
          i
            font-size: 24px
            color: #787d82
            opacity: .7
            &:hover
              opacity: 1
      li
        height: 60px
        border-bottom: 1px solid #EDF1F2
        width: 160px
        margin: 0 auto
        a
          display: block
          height: 60px
          font-size: 16px
          line-height: 60px
          text-align: center
          color: #787d82
          &:hover
            color: #14191e
          &.active
            color: #F01400
          i, b
            position: relative
          i
            left: -25px
            font-size: 16px
            top: 1px
          b
            right: -45px
            font-size: 8px
    .u-container
      margin-left: 240px
      min-height: 589px
      .dyanmic-title-wrap
        padding-bottom: 21px
        border-bottom: 1px solid #CFD5D8
        padding-top: 20px
        .dynamic-title
          color: #787d82
          line-height: 14px
          margin-top: 10px
          padding-top: 25px
          font-size: 14px
      .nodata
        color: #b5b9bc
        font-size: 18px
        line-height: 420px
        text-align: center
</style>
