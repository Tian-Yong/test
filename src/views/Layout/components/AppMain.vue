<template>
  <section class="app-main">
    <transition  name="slide-fade">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
      <el-tooltip class="item" effect="dark" content="返回顶部" placement="top" >
        <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="el-zoom-in-bottom" />
      </el-tooltip>
  </section>
</template>

<script>
import BackToTop from '@/components/BackToTop'
export default {
  name: 'AppMain',
  components: { BackToTop },
  data(){
    return{
       myBackToTopStyle: {
        right: '30px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
      }
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
}
.fixed-header+.app-main {
  padding-top: 90px;
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
