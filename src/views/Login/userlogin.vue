<template>
  <el-form class="login-form" :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" clearable v-model="loginForm.username" placeholder="请输入用户名">
        <i slot="prefix" class="el-icon-user"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" clearable show-password v-model="loginForm.password"  placeholder="请输入密码">
        <i slot="prefix" class="el-icon-lock"></i>
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
const Base64 = require("js-base64").Base64;
import Cookies from 'js-cookie';
export default {
  name: 'userlogin',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      if (this.code.value !== value) {
        this.loginForm.code = ''
        this.refreshCode()
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      checked: false,
      code: {
        src: '',
        value: '',
        len: 4,
        type: 'text'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateCode }
        ]
      },
    }
  },
  created() {
  },
  mounted() {
    let username = Cookies.get('dXNlck5hbWU=');
    let password = Cookies.get('cGFzc3dvcmQ=');
    let checked = Cookies.get('Y2hlY2tlZA==');
    if(username && password){
      this.loginForm.username = Base64.decode(username);
      this.loginForm.password = Base64.decode(password);
      this.checked = JSON.parse(Base64.decode(checked));
    }
  },
  computed: {
  },
  props: [],
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if(this.checked){//记住账号密码  cookie储存7天
            Cookies.set('dXNlck5hbWU=',Base64.encode(this.loginForm.username),{ expires: 7, path: '' })
            Cookies.set('cGFzc3dvcmQ=',Base64.encode(this.loginForm.password),{ expires: 7, path: '' })
            Cookies.set('Y2hlY2tlZA==',Base64.encode(this.checked),{ expires: 7, path: '' })
            this.$store.dispatch('Login', this.loginForm).then(res => {
              this.$router.push({ path: '/dashboard/dashboard' })
            })
          }else{//不记住密码
            Cookies.remove('dXNlck5hbWU=');
            Cookies.remove('cGFzc3dvcmQ=');
            Cookies.remove('Y2hlY2tlZA==');
            this.$store.dispatch('Login', this.loginForm).then(res => {
              this.$router.push({ path: '/dashboard/dashboard' })
            })
          }
        }
      })
    }
  }
}
</script>
<style>
</style>
