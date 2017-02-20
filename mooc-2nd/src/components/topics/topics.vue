<template>
  <div class="topics">
    <div class="banner"></div>
    <div class="topics-wrapper">
      <div class="box">
        <div class="box-item">
          <a href="">
            <div class="item-content">
              <img src="./boxbg.jpg" alt="">
              <div class="item-bottom">
                <h2>iOS基础语法与常用控件</h2>
                <div class="courseinfo">
                  <span class="l">14节课</span>
                  <span class="l">1小时41分</span>
                </div>
                <p>零基础也能迅速入门iOS开发</p>
              </div>
              <div class="people">
                <div class="pricenum">
                  <span class="people-info">在学人数：</span>
                  <span>6429</span>
                </div>
              </div>
            </div>
          </a>
          <div class="c-line"></div>
          <div class="d-line"></div>
        </div>
        <div class="box-item">
          <a href="">
            <div class="item-content">
              <img src="./boxbg.jpg" alt="">
              <div class="item-bottom">
                <h2>iOS基础语法与常用控件</h2>
                <div class="courseinfo">
                  <span class="l">14节课</span>
                  <span class="l">1小时41分</span>
                </div>
                <p>零基础也能迅速入门iOS开发</p>
              </div>
              <div class="people">
                <div class="pricenum">
                  <span class="people-info">在学人数：</span>
                  <span>6429</span>
                </div>
              </div>
            </div>
          </a>
          <div class="c-line"></div>
          <div class="d-line"></div>
        </div>
        <div class="box-item">
          <a href="">
            <div class="item-content">
              <img src="./boxbg.jpg" alt="">
              <div class="item-bottom">
                <h2>iOS基础语法与常用控件</h2>
                <div class="courseinfo">
                  <span class="l">14节课</span>
                  <span class="l">1小时41分</span>
                </div>
                <p>零基础也能迅速入门iOS开发</p>
              </div>
              <div class="people">
                <div class="pricenum">
                  <span class="people-info">在学人数：</span>
                  <span>6429</span>
                </div>
              </div>
            </div>
          </a>
          <div class="c-line"></div>
          <div class="d-line"></div>
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
.topics
  min-height: 750px
  padding-bottom: 100px;
  .banner
    position: relative
    width: 100%
    height: 560px
    background: url(./lujing2.jpg) center center no-repeat
    background-size: cover
  .topics-wrapper
    margin: -160px auto auto
    width: 1200px
    padding-bottom: 100px
    .box
      text-align: center
      .box-item
        display: inline-block
        position: relative
        cursor: pointer
        margin-right: 16px
        .item-content
          width: 285px;
          height: 302px;
          background: #fff;
          display: inline-block;
          position: relative;
          cursor: pointer;
          margin-bottom: 30px;
          border-radius: 4px;
          box-shadow: 0 8px 16px rgba(7,17,27,.2)
          overflow: hidden;
          &:hover
            .item-bottom
              top: 50px
          img
            width: 100%
            height: 172px
            border-radius: 4px
          .item-bottom, .people
            position: absolute
            width: 100%
            box-sizing: border-box
          .item-bottom
            top: 110px;
            height: 130px
            background: url(./titlebg.png)
            transition: top .5s
            padding: 30px 28px 0
            text-align: left
            h2
              max-height: 48px
              font-size: 16px
              line-height: 24px
              color: #07111b
              font-weight: 700
              margin-bottom: 6px
            .courseinfo
              height: 16px
              line-height: 16px
              padding-bottom: 12px
              border-bottom: 1px solid #d9dde1
              margin-bottom: 10px
              color: #93999f
              font-size: 12px
              span
                margin-right: 16px
            p
              word-wrap: break-word
              line-height: 24px
              color: #93999f
              font-size: 12px
          .people
            height: 64px
            background-color: #fff
            line-height: 60px
            bottom: 0
            padding: 0 22px
            border-radius: 4px
            position: absolute
            width: 100%
            box-sizing: border-box
            .pricenum
              position: relative
              color: #ef1313
              span
                float: left
              .people-info
                margin-right: 15px
                text-align: left
                color: #93999f
                font-size: 12px
        .c-line, .d-line
          height: 3px
          background-color: #fff
          position: absolute
          border-radius: 4px
          box-shadow: 0 8px 16px rgba(7,17,27,.2)
        .c-line
          width: 98%
          left: 1%
          bottom: 31px
        .d-line
          width: 96%
          left: 2%
          bottom: 25px



</style>

