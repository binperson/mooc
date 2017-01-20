<template>
  <div class="userCard">
    <div class="userheader-wrap">
      <img src="./user.jpg" alt="">
    </div>
    <div class="g-user-card">
      <div class="card-inner">
        <div class="card-top clearfix">
          <a href="" class="l"><img src="./user.jpg" alt=""></a>
          <div class="card-top-right-box l">
            <a href="">
              <span class="name text-ellipsis">binperson</span>
            </a>
            <div class="meta">
              <a href="">学习时长<b>64小时41分</b></a>
            </div>
          </div>
        </div>
        <div class="card-history">
          <span class="history-item">
            <span class="tit text-ellipsis">用JS实现购物车特效</span>
            <span class="media-name text-ellipsis">1-1 JS实现购物车功能介绍</span>
            <i class="icon-clock"></i>
            <a href="" class="continue" title="用JS实现购物车特效
1-1  JS实现购物车功能介绍">继续</a>
          </span>
        </div>
        <div class="card-sets clearfix">
          <a href="" class="r">安全退出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.userCard
  position: relative
  color: #787d82
  .userheader-wrap
    height: 60px
    line-height: 60px
    width: 60px
    color: #787d82
    text-align: center
    img
      width: 36px
      height: 36px
      border-color: #4d5559
      border-radius: 50%
      display: inline-block
      background: url(./menu_icon.png) no-repeat
      vertical-align: middle
  &:hover
    .g-user-card
      visibility: visible
  .g-user-card
    position: absolute
    right: 0
    top: 100%
    width: 306px
    visibility: hidden
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.2)
    z-index: 1000
    .card-inner
      background-color: #fff
      box-shadow: 0 4px 8px 0 rgba(0,0,0,.2)
      padding: 24px
      box-sizing: border-box
      .card-top
        color: #93999f
        position: relative
        a
          color: #93999f
          display: inline-block
          img
            float: left
            width: 72px
            height: 72px
            border-radius: 50%
            border: 2px solid #fff
            margin-right: 12px
            display: inline-block
            background: url(./menu_icon.png) no-repeat
        .card-top-right-box
          margin-top: 14px
          a
            color: #93999f
            display: inline-block
            .name
              display: inline-block
              font-size: 16px
              color: #07111b
              width: 170px
          .meta
            font-size: 12px
            a
              margin-right: 12px
              b
                margin-left: 2px
                font-weight: bold
      .card-history
        padding: 16px 0 16px 0
        margin-bottom: -1px
        border-bottom: 1px solid #edf1f2
        .history-item
          display: block
          position: relative
          padding-left: 24px
          font-size: 12px
          color: #787d82
          transition: background-color .2s
          .icon-clock
            position: absolute
            left: 0
            top: 2px
            font-size: 14px
          .tit
            display: block
            margin-bottom: 8px
            font-weight: 700
          .media-name
            display: block
            width: 200px
          .continue
            position: absolute
            right: 0
            top: 26px
            color: #00b43c
      .card-sets
        margin-top: 16px
        font-size: 12px
        line-height: 12px
        a
          color: #4d555d
</style>
