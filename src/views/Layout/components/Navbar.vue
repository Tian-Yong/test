<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

    <breadcrumb class="breadcrumb-container"></breadcrumb>
   
    <div class="right-menu">
     <FullScreen class="screenfull right-menu-item" />
      
      <el-dropdown class="avatar-container right-menu-item" trigger="click" size="medium">
        <div class="avatar-wrapper">
         <el-avatar class="user-avatar" :src="avatar" default="用户头像" icon="el-icon-user-solid"> user </el-avatar>
          <span class="userName">{{name}}&nbsp;<i class="el-icon-caret-bottom"></i></span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
         <router-link to="/">
            <el-dropdown-item>
              个人中心
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

import Breadcrumb from '@/components/breadcrumb'
import Hamburger from '@/components/hamburger'
import FullScreen from '@/components/full-screen/index'

export default {
  name: 'navBar',
  components: {
    Breadcrumb,
    Hamburger,
    FullScreen
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {

      this.$store.dispatch('LogOut').then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 15px;
    -webkit-transition: background .3s;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
  }
  .breadcrumb-container {
    float: left;
  }
  .nx-help {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international {
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 20px;
      .avatar-wrapper {
        height:45px;
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .userName{
          float: right;
          line-height: 42px;
        }
      }
    }
  }
}
</style>
