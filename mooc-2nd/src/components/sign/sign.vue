<template>
  <div class="sign">
    <el-tabs v-model="activetab" @tab-click="handleClick">
      <el-tab-pane label="登录" name="first">
        <div class="signin">
          <el-form :model="usersigninForm" ref="usersigninForm">
            <el-form-item
              prop="email"
              :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ]"
            >
              <el-input v-model="usersigninForm.email" placeholder="请输入登录邮箱"></el-input>
            </el-form-item>
            <el-form-item
              prop="pass"
              :rules="[
                  { required: true, message: '请输入6-16位密码，区分大小写，不能使用空格！', trigger: 'blur' }
                ]">
              <el-input type="password" v-model="usersigninForm.pass" auto-complete="off"
                        placeholder="6-16位密码，区分大小写，不能用空格"></el-input>
            </el-form-item>
          </el-form>
          <div class="form-control clearfix">
            <a href="" class="r">忘记密码</a>
          </div>
          <div class="block">
            <span class="wrapper">
              <el-button type="danger" @click="submitForm('usersigninForm')">登录</el-button>
            </span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <div class="signin">
          <el-form :model="usersignupForm" ref="usersignupForm">
            <el-form-item
              prop="email"
              :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ]"
            >
              <el-input v-model="usersignupForm.email" placeholder="请输入登录邮箱"></el-input>
            </el-form-item>
            <div class="verify">
              <el-form-item
                prop="verify"
                :rules="[
                    { required: true, message: '验证码错误', trigger: 'blur' }
                  ]">
                <el-input type="text" v-model="usersignupForm.verify" auto-complete="off"
                          placeholder="请输入验证码"></el-input>
              </el-form-item>
              <a href=""><img src="./verifycode.png" alt=""></a>
              <a href=""><i class="el-icon-loading"></i></a>
            </div>
            <el-form-item
              prop="pass"
              :rules="[
                  { required: true, message: '请输入6-16位密码，区分大小写，不能使用空格！', trigger: 'blur' }
                ]">
              <el-input type="password" v-model="usersignupForm.pass" auto-complete="off"
                        placeholder="6-16位密码，区分大小写，不能用空格"></el-input>
            </el-form-item>
          </el-form>

          <div class="block">
            <span class="wrapper">
              <el-button type="danger" @click="submitForm('usersignupForm')">注册</el-button>
            </span>
            <div class="error">{{message}}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <i class="el-icon-close" @click.stop="hidesign"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      activeName: {
        type: String,
        default: 'second'
      }
    },
    data() {
      return {
        usersigninForm: {
          email: '',
          pass: ''
        },
        usersignupForm: {
          email: '',
          verify: '',
          pass: ''
        },
        message: ''
      };
    },
    computed: {
      activetab() {
        return this.activeName;
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/doregist', this[formName]).then(response => {
              response = response.body;
              if (response.errno === 0) {
                console.log('======');
                console.log(response.data);
                this.dosign(response.data);
              } else if (response === '-2') {
                  console.log(-2);
              } else if (response.errno === -1) {
                console.log('==-----');
                console.log(response.data);
                this.dosign(response.data);
              } else if (response === '-5') {
                this.message = '该用户已注册';
              } else {
                console.log(response);
              }
            }, response => {
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      hidesign() {
        this.$emit('hidesign');
      },
      dosign(data) {
        this.$emit('dosign', data);
      },
      success() {
        this.$message({
          message: '恭喜你，创建成功！',
          type: 'success'
        });
      },
      error() {
        this.$message({
          showClose: true,
          message: '错误，该用户已注册',
          type: 'error'
        });
      },
      verifyerror() {
        this.$message({
          showClose: true,
          message: '错误，该验证码错误',
          type: 'error'
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sign
    position: fixed
    z-index: 40
    background: #fff
    box-sizing: border-box
    width: 360px;
    padding-bottom: 30px
    left: 50%
    top: 50%
    margin: -218px 0 0 -180px
    padding: 0 20px
    box-shadow: 0 0 3px rgba(0, 0, 0, .25)
    transition: all .2s
    .el-tabs__header
      .el-tabs__item
        height: 49px;
        width: 80px
        line-height: 49px;
        font-size: 16px
        text-align: center
        &.is-active
          color: #f01400
        &:hover
          color: #f94a3a
        .el-tabs__active-bar
          height: 1px
          background-color: #f01400
    .el-icon-close
      position: absolute
      top: 20px
      right: 21px
      font-size: 12px
      color: #8492a6
      &:hover
        color: #f01400
        font-size: 14px
        top: 19px
        right: 20px
    .signin
      padding: 15px 10px 30px 10px
      .verify
        .el-form-item
          display: inline-block
          .el-input__inner
            width: 120px
        img
          width: 70px
          height: 40px
          vertical-align: top
          margin-left: 8px
        .el-icon-loading
          margin-left: 20px
          font-size: 18px
      .el-input__inner
        border-color: #d0d6d9
        box-sizing: border-box
        width: 300px
        padding: 9px 9px 9px 10px
        box-shadow: 2px 0 5px 0 #fff
        font-size: 14px
        border-radius: 0
        height: 40px
        line-height: 20px
      .el-button--danger > span
        display: block
        height: 28px
        width: 268px
        line-height: 28px
        font-size: 16px
      .form-control
        line-height: 1em
        margin-bottom: 20px
        & > a
          color: #787d82
      .error
        color: #f37676


</style>

