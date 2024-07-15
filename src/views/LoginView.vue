<template>
<div class="loginView">
  <div class="sideImg">
    <el-image :src="url" style="width:100%;height: 100%;padding: 0;margin: 0;" fit="cover" lazy></el-image>
  </div>
  <div class="login">
    <div class="logo">
      <el-image :src="logoUrl" style="width:100%;height: 100%;padding: 0;margin: 0;" fit="cover" lazy></el-image>
    </div>
    <div class="loginForm">
      <div class="loginText" style="font-size: 2rem;text-align: left;margin-bottom: 1rem;">
        <span style="margin-right: 1rem;" :class="loginSelect==true?'textStyle':'selectStyle'" @click="selectLogin">登录</span>
        <span :class="loginSelect!=true?'textStyle':'selectStyle'"  @click="selectRegister">注册</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleLoginForm" label-position="right" v-if="loginSelect">
        <el-form-item  label-width="0px"><span class="title">用户登录</span></el-form-item>
  <el-form-item label-width="60px" label="手机号" prop="username">
    <el-input v-model="ruleForm.username" placeholder="请输入手机号" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" label-width="60px" prop="password">
    <el-input type="password" v-model="ruleForm.password" placeholder="请输入强密码" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="验证码" label-width="60px" style="height:40px" prop="validCode">
    <div style="height: 40px;width: 100%; display: flex;">
      <el-input v-model="ruleForm.validCode" autocomplete="off" style="width:60%;" placeholder="请输入验证码"></el-input>
     <VerificationCode :code="code" style="width: 40%;height: 100%;" @childEvent="changeRandom"></VerificationCode>
    </div>
  </el-form-item>
  <el-form-item label-width="0px" style="text-align: center;">
    <el-button type="primary" @click="submitLoginForm('ruleLoginForm')" style="width: 100%;background-color: rgb(255,190,153);border: 0;">登录</el-button>
  </el-form-item>
</el-form>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleRegisterForm" label-position="right" v-if="!loginSelect">
        <el-form-item  label-width="0px"><span class="title">用户注册</span></el-form-item>
  <el-form-item label-width="60px" label="手机号" prop="username">
    <el-input v-model="ruleForm.username" placeholder="请输入手机号" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" label-width="60px" prop="password">
    <el-input type="password" v-model="ruleForm.password" placeholder="请输入强密码" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="验证码" label-width="60px" style="height:40px" prop="validCode">
    <div style="height: 40px;width: 100%; display: flex;">
      <el-input v-model="ruleForm.validCode" autocomplete="off" style="width:60%;" placeholder="请输入验证码"></el-input>
     <VerificationCode :code="code" style="width: 40%;height: 100%;" @childEvent="changeRandom"></VerificationCode>
    </div>
  </el-form-item>
  <el-form-item label-width="0px" style="text-align: center;">
    <div style="width: 100%;height: 100%;">
      <el-button type="primary" @click="submitRegisterForm('ruleRegisterForm')" style="width: 50%;background-color: rgb(255,190,153);border: 0;margin: 0;">注册</el-button>
      <el-button type="primary" @click="resetForm('ruleRegisterForm')" style="width: 50%;background-color: skyblue;border: 0;margin: 0;">重置</el-button>
    </div>
  </el-form-item>
</el-form>
    </div>
  </div>
</div>
</template>
<!-- 脚本 -->
<script>
import VerificationCode from '@/components/VerificationCode.vue'
export default {
  name: 'LoginView',
  components: {
    VerificationCode
  },
  created () {
    this.code.randomNum = this.randomStr()
  },
  mounted () {
  },
  watch: {
    'code.randomNum' (value) {
      if (this.timeId) {
        clearInterval(this.timeId)
        this.timeId = null
      }
      this.timeId = setInterval(() => {
        this.changeRandom()
      }, 60000)
    },
    'code.contentWidth' (value) {
      this.changeView()
      this.$message.warning(`${value}` + '-' + `${this.code.contentWidth}`)
    }

  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (this.ruleForm.username !== '') {
          // this.$refs.ruleForm.validateField('username')
          const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
          if (reg.test(value) === false) {
            callback(new Error('请输入正确的手机号'))
          }
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (reg.test(value) === false) {
          callback(new Error('密码包含大写字母、小写字母、数字、特殊字符'))
        }
        callback()
      }
    }
    const validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value.toLowerCase() === this.code.randomNum.toLowerCase()) {
        callback()
      } else {
        callback(new Error('请输入正确的验证码'))
      }
    }
    return {
      code: {
        contentWidth: document.documentElement.clientWidth / 15,
        contentHeight: document.body.clientHeight / 23,
        randomNum: ''
      },
      loginSelect: true,
      logoUrl: require('@/assets/logo.jpg'),
      url: 'https://img1.baidu.com/it/u=2846993327,2859109820&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1427',
      ruleForm: {
        username: '',
        password: '',
        submitcode: '',
        validCode: ''
      },
      rules: {
        username: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        validCode: [
          { validator: validatePass3, trigger: 'blur' }
        ]
      },
      timeId: null,
      timeViewId: null
    }
  },
  methods: {
    submitLoginForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitRegisterForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    randomStr () {
      let num = ''
      for (let i = 0; i < 2; i++) {
        const num1 = Math.floor(Math.random() * 10)// 生成随机数
        num = num + num1
      }
      let AZ = ''
      let az = ''
      // 生成随机字符库 (随机字母)
      for (let i = 0; i < 1; i++) {
        az = az + String.fromCharCode(Math.random() * (122 - 97) + 97) // 生成a-z
        AZ = AZ + String.fromCharCode(Math.random() * (90 - 65) + 65) // 生成A-Z
      }
      let str = ''
      str = AZ + az + num
      return str
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    changeRandom () {
      this.code.randomNum = this.randomStr()
    },
    changeView () {
      this.code.contentWidth = document.documentElement.clientWidth / 15
    },
    selectLogin () {
      this.loginSelect = true
      this.changeRandom()
    },
    selectRegister () {
      this.loginSelect = false
      this.changeRandom()
    }
  }
}
</script>

<style lang="less" scoped>
@loginFormWidth:20vw;
@formItem:@loginFormWidth/5;
.label_center .el-form-item__label{
  width: 50%;
}
.el-form-item{
  font-size: 1rem;
  height: @formItem;
}
.sideImg{
  width:30vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.login{
  width:70vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-flow: row none;
  justify-content: center;
  align-items: center;
  background-color: rgb(250,250,250);
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

}
.logo{
  position: absolute;
  left: 1rem;
  top: 1rem;
  width:15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
}
.loginView{
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  background-color: rgb(255,255,255);
  z-index:1;
}
.loginText :hover{
  cursor: pointer;
}
.textStyle{
  color: black;
  border-bottom: 5px solid red;
}
.selectStyle{
  color: rgb(189,189,189);
}
.loginForm{
  width:@loginFormWidth;
  height: @loginFormWidth;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  text-align: center;
}
.el-input__inner{
  background-color: rgb(252,242,243);
}
.title{
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
.vue-captcha .vue-captcha-img{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
