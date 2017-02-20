<template>
  <div class="question">
    <div class="ques-wrapper">
      <div class="ques-article clearfix">
        <div class="l ques-main">
          <div class="top-slogan">
            <span>大学生自己的问答社区</span>
            <a class="js-quiz" href="">我要提问</a>
          </div>
          <div class="nav">
            <a href="" class="active">推荐</a>
            <a href="">最新</a>
            <a href="">等待回答</a>
          </div>
          <div class="ques-list">
            <div class="ques-answer">
              <div class="tag-img">
                <a href="">
                  <img src="./header.jpg" alt="">
                </a>
              </div>
              <div class="from-tag">
                来自<a href="">JavaScript</a>
              </div>
              <div class="ques-con">
                <a href="" class="ques-con-content">我这样写有错吗</a>
              </div>
              <div class="answer-con">
                <div class="user">
                  <a href="">Caballarii</a>
                  <span class="signature">回答：</span>
                </div>
                <div class="answer-content">var count=0写在循环里，那每次循环count都会被先赋值为0，并且循环外面拿不到count<...code...>把count写外面
                  <span class="see-more">[ 查看全部 ]</span>
                </div>
                <div class="ctrl-bar clearfix">
                  <span class="agree-with"><b>赞同</b><em>1</em></span>
                  <span class="oppose">反对</span>
                </div>
              </div>
            </div>
            <div class="ques-answer">
              <div class="tag-img">
                <a href="">
                  <img src="./header.jpg" alt="">
                </a>
              </div>
              <div class="from-tag">
                来自<a href="">JavaScript</a>
              </div>
              <div class="ques-con">
                <a href="" class="ques-con-content">我这样写有错吗</a>
              </div>
              <div class="answer-con">
                <div class="user">
                  <a href="">Caballarii</a>
                  <span class="signature">回答：</span>
                </div>
                <div class="answer-content">var count=0写在循环里，那每次循环count都会被先赋值为0，并且循环外面拿不到count<...code...>把count写外面
                  <span class="see-more">[ 查看全部 ]</span>
                </div>
                <div class="ctrl-bar clearfix">
                  <span class="agree-with"><b>赞同</b><em>1</em></span>
                  <span class="oppose">反对</span>
                </div>
              </div>
            </div>
            <div class="ques-answer">
              <div class="tag-img">
                <a href="">
                  <img src="./header.jpg" alt="">
                </a>
              </div>
              <div class="from-tag">
                来自<a href="">JavaScript</a>
              </div>
              <div class="ques-con">
                <a href="" class="ques-con-content">我这样写有错吗</a>
              </div>
              <div class="answer-con">
                <div class="user">
                  <a href="">Caballarii</a>
                  <span class="signature">回答：</span>
                </div>
                <div class="answer-content">var count=0写在循环里，那每次循环count都会被先赋值为0，并且循环外面拿不到count<...code...>把count写外面
                  <span class="see-more">[ 查看全部 ]</span>
                </div>
                <div class="ctrl-bar clearfix">
                  <span class="agree-with"><b>赞同</b><em>1</em></span>
                  <span class="oppose">反对</span>
                </div>
              </div>
            </div>
            <div class="ques-answer">
              <div class="tag-img">
                <a href="">
                  <img src="./header.jpg" alt="">
                </a>
              </div>
              <div class="from-tag">
                来自<a href="">JavaScript</a>
              </div>
              <div class="ques-con">
                <a href="" class="ques-con-content">我这样写有错吗</a>
              </div>
              <div class="answer-con">
                <div class="user">
                  <a href="">Caballarii</a>
                  <span class="signature">回答：</span>
                </div>
                <div class="answer-content">var count=0写在循环里，那每次循环count都会被先赋值为0，并且循环外面拿不到count<...code...>把count写外面
                  <span class="see-more">[ 查看全部 ]</span>
                </div>
                <div class="ctrl-bar clearfix">
                  <span class="agree-with"><b>赞同</b><em>1</em></span>
                  <span class="oppose">反对</span>
                </div>
              </div>
            </div>
            <pagebar></pagebar>
          </div>
        </div>
        <div class="r ques-slider">
          <div class="hot-ques">
            <div class="title">
              热门问题
            </div>
            <ul>
              <li>
                <p class="content"><a href="">话说，大家想编程的最初初衷是什么</a></p>
                <div class="info-bar clearfix">
                  <a href="" class="answer-num">234人回答</a>
                  <a href="" class="follow-num">8关注</a>
                </div>
              </li>
              <li>
                <p class="content"><a href="">话说，大家想编程的最初初衷是什么</a></p>
                <div class="info-bar clearfix">
                  <a href="" class="answer-num">234人回答</a>
                  <a href="" class="follow-num">8关注</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import footer from 'components/footer/footer';
import pagebar from 'components/pagebar/pagebar';
export default {
  components: {
    'v-footer': footer,
    pagebar
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ques-wrapper
  padding: 0 0 100px 0
  .ques-article
    width: 1200px
    margin: 40px auto 0
    .ques-main
      width: 840px
      padding: 0 0 20px
      margin-right: 20px
      .top-slogan
        margin-bottom: 30px
        height: 80px
        background: url(./wenda_title_bg.png)
        span
          float: left
          padding-left: 40px
          line-height: 80px
          display: inline-block
          font-size: 24px
          font-weight: 700
        a
          width: 160px
          height: 40px
          line-height: 40px
          text-align: center
          background-color: #f01400
          color: #fff
          float: right
          margin-top: 20px
          margin-right: 40px
      .nav
        padding-bottom: 20px
        border-bottom: 1px solid #d0d6d9
        a
          font-size: 16px
          color: #787d82
          line-height: 20px
          text-align: left
          margin-right: 50px
          &.active
            color: #f01400
      .ques-list
        min-height: 800px;
        .ques-answer
          position: relative
          padding-left: 56px
          padding-top: 20px
          padding-bottom: 24px
          border-bottom: 1px solid #d0d6d9
          .tag-img
            position: absolute
            left: 0
            top: 25px
            width: 40px
            height: 40px
            overflow: hidden
            a
              display: block
              border-radius: 50%
              overflow:hidden
              img
                display: block
                width: 100%
                height: 100%
          .from-tag
            height: 20px
            font-size: 12px
            line-height: 20px
            overflow: hidden
            color: #787d82
            a
              font-size: 12px
              color: #787d82
              margin-left: 15px
          .ques-con
            line-height: 20px
            position: relative
            .ques-con-content
              display: block
              line-height: 28px
              margin-right: 30px
              word-break: break-all
              font-size: 18px
              font-weight: 600
              color: #14191e
          .answer-con
            padding-bottom: 46px
            position: relative
            .user
              line-height: 20px
              margin-top: 24px
              a
                font-size: 14px
                font-weight: 600
                color: #14191e
                margin-right: 5px
                .signature
                  font-size: 12px
                  color: #b5b9bc
            .answer-content
              color: #14191e
              line-height: 28px
              font-size: 14px
              margin-top: 2px
              word-break: break-all
              overflow: hidden
            .ctrl-bar
              position: absolute
              width: 100%
              left: 0
              bottom: 0
              background-color: #fff
              z-index: 9
              span
                line-height: 24px
                font-size: 12px
                color: #787d82
                margin-right: 20px
                cursor: pointer
              .agree-with
                display: inline-block
                height: 24px
                border: 1px solid #d0d6d9
                padding: 0 9px
                em
                  margin-left: 3px
    .ques-slider
      width: 280px
      .hot-ques
        margin-bottom: 30px
        .title
          font-size: 16px
          color: #14191e
          padding-bottom: 15px
          border-bottom: 1px solid #d0d6d9
          text-align: left
          line-height: 20px
        li
          padding: 15px 0
          border-bottom: 1px solid #edf1f2
          .content
            a
              font-size: 14px
              color: #14191e
              word-wrap: break-word
              text-align: left
              line-height: 20px
          .info-bar
            height: 20px
            margin-top: 7px
            overflow: hidden
            a
              float: left
              font-size: 12px
              line-height: 20px
              color: #b5b9bc
              &.answer-num
                margin-right: 30px

</style>

