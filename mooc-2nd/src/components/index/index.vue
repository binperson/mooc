<template>
  <div class="index-wrapper">
    <div class="bk"></div>
    <div class="g-banner" @mouseover="show" @mouseleave="leavehide">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in arr1">
          <div class="carousel-wrapper">
            <img src="./index_background1.jpg" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-card class="box-card">
        <div v-for="(o, index) in getclassify" class="item" @mouseover="overshow(index,o)">
          <a href="" class="text">{{o}} <i class="el-icon-arrow-right"></i></a>
        </div>
      </el-card>
      <el-card @mouseleave="leavehide()" class="box-card2" v-show="active">
        <div class="inner-box">
          <div class="title">分类目录</div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/main/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/main/course' }">课程</el-breadcrumb-item>
            <el-breadcrumb-item>{{oclassify}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="title recommend">课程推荐</div>
          <p v-if="item.limits===1" v-show="needShow(item.category)" v-for="item in courses" class="every-recom"><router-link :to="'/main/learn/'+item.courseindex" class="cate-tag">
            <el-tag type="gray">课程</el-tag>
            {{item.title}}</router-link></p>
        </div>
      </el-card>
    </div>
    <div class="contentwrap">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="recomend">推荐课程</div>
        </el-col>
        <el-col :span="2" :offset="16"><a @click="turn" class="more">更多<i class="el-icon-arrow-right"></i></a></el-col>
      </el-row>
      <div class="moco-course-list clearfix">
        <div class="moco-course-wrap" v-for="(item, index) in courses">
          <router-link  v-show="item.limits===1" :to="'/main/learn/'+item.courseindex">
            <div class="moco-course-box">
              <img :src="item.imglink" alt="">
              <div class="moco-course-intro">
                <h3><i>
                  <el-tag type="gray">{{item.rank}}</el-tag>
                </i> {{item.title}}
                </h3>
                <p class="discribe">{{item.intro}}</p>
              </div>
              <div class="moco-course-bottom">
                <span>{{item.learnnum}}人在学</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="contentwrap">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="recomend">热门课程</div>
        </el-col>
        <el-col :span="2" :offset="16"><a @click="turn" class="more">更多<i class="el-icon-arrow-right"></i></a></el-col>
      </el-row>
      <div class="moco-course-list clearfix">
        <div class="moco-course-wrap" v-for="(item, index) in hotcourses">
          <router-link  v-show="item.limits===1" :to="'/main/learn/'+item.courseindex">
            <div class="moco-course-box">
              <img :src="item.imglink" alt="">
              <div class="moco-course-intro">
                <h3><i>
                  <el-tag type="gray">{{item.rank}}</el-tag>
                </i> {{item.title}}
                </h3>
                <p class="discribe">{{item.intro}}</p>
              </div>
              <div class="moco-course-bottom">
                <span>{{item.learnnum}}人在学</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="outwrap-content" v-show="false">
      <div class="contentwrap clearfix">
        <div class="classify">
          <div class="title">简书&爱问</div>
          <div class="describe">IT知识和答疑，想要的都在这</div>
          <a href="">
            <div class="linkbtn">爱问</div>
          </a>
          <a href="">
            <div class="linkbtn">简书</div>
          </a>
          <a href="">
            <div class="linkbtn">热门专题</div>
          </a>
        </div>
        <a href="">
          <div class="longer longer1">
            <p>[liuyubobobo老师]算法杂谈</p>
          </div>
        </a>
        <a href="">
          <div class="longer longer2 mr0">
            <p>大家编程的初衷是什么？</p>
          </div>
        </a>
        <div class="longer buttom-longer">
          <div class="left">简书热门</div>
          <div class="right">
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
          </div>
        </div>
        <div class="longer buttom-longer mr0">
          <div class="left">爱问推荐</div>
          <div class="right">
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
            <a href=""><p>如何学好，用好MySQL数据库？</p></a>
          </div>
        </div>
      </div>
    </div>
    <div class="index-footer">
      <div class="container">
        <div class="footer-wrap idx-width">
          <div class="footer-sns">
            <a href="" class="sns-content"></a>
            <a href="" class="sns-content"></a>
            <a href="" class="sns-content"></a>
            <a href="" class="sns-content"></a>
          </div>
        </div>
        <div class="footer-link">
          <a href="" class="link-item">企业合作</a>
          <a href="" class="link-item">人才招聘</a>
          <a href="" class="link-item">联系我们</a>
          <a href="" class="link-item">讲师招募</a>
          <a href="" class="link-item">常见问题</a>
          <a href="" class="link-item">意见反馈</a>
          <a href="" class="link-item">慕课大学</a>
          <a href="" class="link-item">友情链接</a>
        </div>
        <div class="footer-copyright">
          <p>© 2017 mooc.com 京ICP备 10101101号-1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      classify: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        arr1: [1, 2, 2],
        active: false,
        oclassify: '',
        courses: [],
        hotcourses: []
      };
    },
    methods: {
      overshow(index, o) {
        this.active = true;
        this.oclassify = o;
      },
      leavehide() {
        this.active = false;
      },
      needShow(typearr) {
          if (typearr.indexOf(this.oclassify) !== -1) {
              return true;
          }
      },
      show() {
          this.active = true;
      },
      turn() {
        this.$router.push('/main/course');
      }
    },
    created() {
      console.log(1111);
      this.$http.get('/allcourse').then((response) => {
        response = response.body;
        response.sort(function (a, b) {
          return b.learnnum - a.learnnum;
        });
        if (response.length <= 5) {
          this.courses = response;
          this.hotcourses = response;
        } else {
          let out = [];
          let num = 5;
          for (let i = 0; i < num; i++) {
              this.hotcourses.push(response[i]);
          }
          while (out.length < num) {
              let temp = (Math.random() * response.length) >> 0;
              out.push(response.splice(temp, 1)[0]);
          }
          this.courses = out;
        }
        console.log(this.courses);
      });
    },
    computed: {
        getclassify() {
            let arr = [];
            let arr1 = [];
            let oldarr = this.classify;
            for (let item in oldarr) {
                arr1.push(item);
            }
            console.log(this.classify);
            console.log(999);
            console.log(arr1);
            for (let i = 0; i < 8; i++) {
              let index = Math.floor(Math.random() * arr1.length);
              arr.push(oldarr[arr1[index]]);
              arr1.splice(index, 1);
            }
            return arr;
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index-wrapper
    .bk
      width: 100%
      height: 490px
      position: absolute
      top: 0
      background: url(./background-christmas.jpg) top center no-repeat
    .g-banner
      position: relative
      height: 460px
      overflow: hidden
      width: 1200px
      margin: 20px auto
      background-color: #fff
      .el-carousel__container
        height: 460px
        .el-carousel__arrow--left
          left: 256px
      .el-carousel__indicators
        left: 60%
      .el-card
        position: absolute
        height: 100%
        top: 0
        border: none
        border-radius: 0
      .box-card
        left: 0
        background: rgba(7, 17, 27, .5)
        color: #000000
        width: 175px
        z-index: 29
        .el-card__body
          padding: 0
          .item
            position: relative
            padding: 0 24px
            color: #ffffff
            border-bottom: 1px solid rgba(255, 255, 255, .2)
            &:last-child
              border-bottom: none
            &:hover
              background-color: rgba(7, 17, 27, .3)
            .text
              height: 64px
              line-height: 66px
              display: block
              font-size: 16px
              color: #ffffff
              .el-icon-arrow-right
                position: absolute
                right: 12px
                top: 26px
                font-size: 12px
                color: rgba(255, 255, 255, .5)
      .box-card2
        left: 175px
        width: 732px
        border-style: solid
        border-width: 1px
        border-color: #d9dde1
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1)
        background: url(./dataBg.png)
        background-size: 100%
        z-index: 20
        .inner-box
          height: 100%
          width: 100%
          padding-left: 20px
          padding-right: 20px
          .title
            line-height: 16px
            margin-top: 12px
            font-weight: 700
            margin-bottom: 13px
            color: #07111b
            font-size: 16px
            &.recommend
              margin-top: 33px;
              margin-bottom: 16px;
          .every-recom
            margin-bottom: 8px
          .cate-tag
            line-height: 28px;
            font-size: 12px
    .contentwrap
      width: 1200px
      margin: 0 auto 42px
      .recomend, .more
        margin-top: 42px
        margin-bottom: 24px
        line-height: 16px
        .el-icon-arrow-right
          font-size: 12px
      .recomend
        color: #07111b
        font-size: 16px
      .more
        display: block
        color: #14191e
        padding-left: 33px
        font-size: 14px
      .moco-course-list
        margin: -10px;
        .moco-course-wrap
          position: relative
          margin: 10px
          float: left
          background-color: #fff
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1)
          &:hover
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4)
          .moco-course-box
            position: relative
            box-sizing: border-box
            width: 224px
            height: 172px
            overflow: hidden
            .moco-course-intro
              box-sizing: border-box
              position: absolute
              padding: 0 20px
              top: 65px
              height: 144px
              width: 100%
              transition: top .5s
              background-image: url(./bg-course.png)
              & > h3
                margin: 0;
                padding: 16px 0 6px
                font-size: 14px
                max-height: 40px
                overflow: hidden
                color: #07111b
                line-height: 21px
              &:hover
                top: 25px
              .discribe
                color: #93999f
                font-size: 12px
                height: 40px
                overflow: hidden
                line-height: 20px
            .moco-course-bottom
              position: absolute
              padding: 0 20px
              bottom: 0
              box-sizing: border-box
              width: 100%
              height: 42px
              line-height: 36px
              background-color: #fff
              color: #93999f
              font-size: 12px
    .outwrap-content
      background-color: #f3f5f7
      padding-bottom: 60px
      .contentwrap
        width: 1200px
        margin: auto
        padding-top: 28px
        .classify
          float: left
          width: 224px
          height: 364px
          margin-top: 20px
          margin-right: 20px
          background-image: url(./shoujileft.png)
          .title
            font-size: 32px
            line-height: 36px
            margin-left: 20px
            font-weight: 700
            margin-top: 28px
            color: #fff
          .describe
            line-height: 12px
            margin-left: 20px
            margin-top: 24px
            padding-bottom: 122px
            font-size: 14px
            color: #fff
          .linkbtn
            height: 34px
            width: 184px
            margin: auto auto 8px
            line-height: 34px
            text-align: center
            border: 1px solid #fff
            border-radius: 3px
            font-size: 14px
            color: #fff
        .longer
          width: 468px
          height: 172px
          float: left
          font-size: 20px
          color: #fff
          font-weight: 700
          margin-top: 20px
          margin-right: 20px
          text-align: center
          line-height: 172px
          overflow: hidden
          &.mr0
            margin-right: 0
          &.longer1
            background: red
          &.longer2
            background: yellow
          &.buttom-longer
            background: #ffffff
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1)
            transition: all .3s ease
            &:hover
              box-shadow: 0 5px 20px rgba(0, 0, 0, .3)
          .left
            float: left
            width: 82px
            margin: 32px
            height: 60px
            font-size: 20px
            color: #07111b
            line-height: 20px
            font-weight: 700
            font-align: center
          .right
            float: right
            margin-right: 32px
            text-align: left
            width: 290px
            margin-top: 23px
            a
              font-size: 14px
              line-height: 32px
              color: #07111b
              font-weight: 400
              p
                height: 32px
                overflow: hidden

    .index-footer
      .container
        width: 1200px
        margin: 0 auto
        .idx-width
          width: 1200px
          margin: 0 auto
          .footer-sns
            padding-top: 30px
            text-align: center
            .sns-content
              display: inline-block
              height: 32px
              width: 32px
              background-image: url(./idx-btm.png)
              background-repeat: no-repeat
              margin: 0 9px
              &:nth-of-type(1)
                background-position: 0 -221px
                &:hover
                  background-position: 0 -262px
              &:nth-of-type(2)
                background-position: -52px -221px
                &:hover
                  background-position: -52px -262px
              &:nth-of-type(3)
                background-position: -104px -221px
                &:hover
                  background-position: -104px -262px
              &:nth-of-type(4)
                background-position: -156px -221px
                &:hover
                  background-position: -156px -262px
        .footer-link
          padding: 25px 0
          margin: 0 auto
          text-align: center
          border-bottom: 1px solid #d0d6d9
          .link-item
            margin: 0 10px
            color: #99a1a6
            font-size: 14px
            &:hover
              color: #5b7382
        .footer-copyright
          padding: 20px 0 25px
          line-height: 14px
          text-align: center
          color: #b4bbbf
          font-size: 12px

</style>
