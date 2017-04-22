<template>
  <div class="course">
    <div class="wrap">
      <div class="top">
        <div class="course-content">
          <div class="course-nav-box">
            <div class="course-nav-row clearfix">
              <div class="hd l">
                分类：
              </div>
              <div class="bd">
                <ul>
                  <li class="course-nav-item on"><a href="">全部</a></li>
                  <li class="course-nav-item"><a href="">计算机</a></li>
                  <li class="course-nav-item"><a href="">经济学</a></li>
                  <li class="course-nav-item"><a href="">法学</a></li>
                  <li class="course-nav-item"><a href="">教育学</a></li>
                  <li class="course-nav-item"><a href="">文学</a></li>
                  <li class="course-nav-item"><a href="">历史学</a></li>
                  <li class="course-nav-item"><a href="">理学</a></li>
                  <li class="course-nav-item"><a href="">工学</a></li>
                  <li class="course-nav-item"><a href="">医学</a></li>
                  <li class="course-nav-item"><a href="">管理学</a></li>
                  <li class="course-nav-item"><a href="">艺术</a></li>
                  <li class="course-nav-item"><a href="">其他</a></li>
                </ul>
              </div>
            </div>
            <div class="course-nav-row course-nav-row clearfix">
              <div class="hd l">
                状态：
              </div>
              <div class="bd">
                <ul>
                  <li class="course-nav-item on"><a href="">全部</a></li>
                  <li class="course-nav-item"><a href="">开课中</a></li>
                  <li class="course-nav-item"><a href="">即将开课</a></li>
                  <li class="course-nav-item"><a href="">已结课</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="course-tool-bar clearfix">
        <div class="tool-left l">
          <a class="sort-item active">最新</a>
          <a class="sort-item">最热</a>
        </div>
      </div>
      <div class="course-list">
        <div class="moco-course-list">
          <ul class="clearfix">

            <li v-for="(item, index) in courses" class="moco-course-wrap">
              <div class="moco-course-tag">即将开课</div>
              <i class="moco-course-tag-bg"></i>
              <router-link :to="'/main/learn/'+item.courseindex">
                <div class="moco-course-box">
                  <img :src="item.imglink" height="124" width="100%" alt="">
                  <div class="moco-course-intro">
                    <h3><i>高</i>{{item.title}}</h3>
                    <p>{{item.intro}}</p>
                  </div>
                  <div class="moco-course-bottom">
                    <span class="l"> 813人在学</span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <pagebar></pagebar>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from 'components/footer/footer';
  import pagebar from 'components/pagebar/pagebar';
  export default {
    data() {
      return {
        courses: []
      };
    },
    created() {
      console.log(1111);
      this.$http.get('/allcourse').then((response) => {
        response = response.body;
        this.courses = response;
        console.log(this.courses);
      });
    },
    components: {
      'v-footer': footer,
      pagebar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .course
    min-height: 750px
    padding: 0 0 99px 0
    background: #f3f5f7
    .wrap
      width: 100%
      background-color: #fff
      padding-bottom: 12px
      .top
        width: 1200px
        margin: auto
        .course-content
          padding-top: 12px
          float: none
          width: 100%
          box-shadow: none
          .course-nav-row
            padding: 16px 0 5px
            border-bottom: 1px solid #edf1f2
            &.course-nav-row
              padding: 16px 0 5px
              border-bottom: none
            .hd
              width: 52px
              height: 20px
              line-height: 30px
              font-weight: 700
              font-size: 14px
              color: #07111b
              text-align: right
            .bd
              margin-left: 64px
              .course-nav-item
                display: inline-block
                margin: 0 6px
                &.on
                  a
                    background: #f01400
                    color: #fff
                a
                  display: block
                  line-height: 14px
                  margin-bottom: 10px
                  padding: 9px 12px
                  font-size: 14px
                  color: #14191e
    .container
      margin: 0 auto
      width: 1200px
      .course-tool-bar
        position: relative
        padding-top: 26px
        padding-bottom: 16px
        overflow: hidden
        height: 14px !important
        margin-top: -1px
        padding-right: 15px
        font-size: 12px
        a
          &.sort-item
            margin: 0 12px
            line-height: 14px
            font-size: 14px
            color: #787d82
            &.active
              color: #f01414
      .course-list
        padding: 10px 0 20px
        .moco-course-list
          margin: -10px
          .moco-course-wrap
            float: left
            margin: 10px
            background-color: #fff
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1)
            position: relative
            &:hover
              box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2)
            .moco-course-tag
              position: absolute
              left: -4px
              top: 4px
              z-index: 1
              font-size: 12px
              color: #fff
              padding: 0 6px
              height: 20px
              line-height: 20px
              background: #00b33b
            .course-tag-bg
              position: absolute
              display: inline-block
              left: -4px
              top: 24px
              z-index: 1
              width: 0
              height: 0
              border-top: 4px solid #4d555d
              border-left: 4px solid transparent
            .moco-course-box
              width: 224px
              height: 172px
              box-sizing: border-box
              overflow: hidden
              position: relative
              &:hover
                .moco-course-intro
                  top: 28px
              .moco-course-intro
                box-sizing: border-box
                position: absolute
                padding: 0 20px
                transition: top .5s
                top: 65px
                height: 144px
                width: 100%
                background-image: url(./bg-course.png)
                h3
                  margin: 0
                  padding: 16px 0 6px
                  font-size: 14px
                  max-height: 40px
                  overflow: hidden
                  color: #07111b
                  line-height: 21px
                  i
                    float: left
                    margin-top: 2px
                    margin-right: 4px
                    padding: 2px
                    font-style: normal
                    font-size: 12px
                    color: #fff
                    line-height: 12px
                    border-radius: 1px
                    background-color: #93999f
                p
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
                background-color: #fff
                color: #93999f
                font-size: 12px
                line-height: 36px

</style>

