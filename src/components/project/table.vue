<template >
  <div class="box">
    <slot name="left"></slot>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span style="font-size:18px;">{{title}}</span>
        <div class="TitleFunction">
          <el-link type="primary" @click="showFrom">新建</el-link>
          <el-link type="primary" style="margin:0 20px;">修改</el-link>
          <el-link type="danger">删除</el-link>
        </div>
      </div>
      <slot name="right"></slot>
    </el-card>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("project");
export default {
  props: ["title","state"],
  computed: {
    ...mapState(["form","maintainData", "insuranceData"])
  },
  methods: {
    showFrom() {
      if (parseInt(this.state) === 1) {
        this.maintainData.Maintenance = true;
        this.form.outerVisible=true;
      } else {
        this.insuranceData.Coverage = true;
        this.form.outerVisible=true;
      }
    }
  }
};
</script>
<style scoped>
.el-card__header {
  height: 40px !important;
  line-height: 40px;
  padding: 0 20px !important;
}
.clearfix {
  display: flex;
  position: relative;
}
.TitleFunction {
  position: absolute;
  right: 0;
}
.box {
  display: flex;
}
</style>
