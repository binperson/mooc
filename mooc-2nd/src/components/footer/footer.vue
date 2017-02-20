<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="followus r">
        <a href="" class="followus-weixin"></a>
        <a href="" class="followus-weibo"></a>
        <a href="" class="followus-qzone"></a>
      </div>
      <div class="footer_intro l">
        <div class="footer_link">
          <ul>
            <li><a href="">网站首页</a></li>
            <li><a href="">企业合作</a></li>
            <li><a href="">人才招聘</a></li>
            <li><a href="">联系我们</a></li>
            <li><a href="">讲师招募</a></li>
            <li><a href="">常见问题</a></li>
            <li><a href="">意见反馈</a></li>
            <li><a href="">慕课大学</a></li>
            <li><a href="">友情链接</a></li>
          </ul>
        </div>
        <p>Copyright © 2017 imooc.com All Rights Reserved | 京ICP备 13046642号-2</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer
  position: absolute
  bottom: 0
  width: 100%
  background: #000
  border-top: 1px solid #e2e4e6
  font-size: 12px
  color: #787d82
  padding: 27px 0
  min-width: 620px
  .footer-wrapper
    width: auto
    margin: 0 auto
    max-width: 1200px
    .followus
      margin-right: 34px
      padding-left: 30px
      a
        float: left
        position: relative
        width: 32px
        height: 32px
        background-image: url(./footer-sprite.png)
        background-repeat: no-repeat
        margin: 3px 6px 0
        opacity: .5
        transition: opacity .2s
        &.followus-weixin
          background-position: 0 -279px
          &:hover
            opacity: 1;
        &.followus-weibo
          background-position: 0 -321px
          &:hover
            opacity: 1;
        &.followus-qzone
          background-position: 0 -363px
          &:hover
            opacity: 1
    .footer_intro
      padding-left: 40px
      .footer_link
        margin-bottom: 4px;
        line-height: 1.8;
        ul
          overflow: hidden
          margin-top: -1px
          li
            margin-right: 30px
            text-align: center
            float: left
            a
              color: #c8cdd2
              &:hover
                color: #ffffff
      p
        line-height: 1.7

</style>

