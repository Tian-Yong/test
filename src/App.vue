<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>
<style>
@import './assets/font/iconfont.css';
 [class^="el-icon-zc"], [class^=" el-icon-zc"] {
    font-family: "iconfont", serif !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* 设置滚动条的样式 */
        ::-webkit-scrollbar {
          width:8px;
          background-color: none;
        }

        /* 滚动槽 */
        ::-webkit-scrollbar-track {
          border-radius:10px;
        }

        /* 滚动条滑块 */
        ::-webkit-scrollbar-thumb {
          border-radius:10px;
          background:#bbb;
        }
</style>
