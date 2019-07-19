<template>
  <div>
    <el-button type="text" @click="form.outerVisible = true">点击打开外层 Dialog</el-button>

    <el-dialog
      :title="parameter.title"
      :visible.sync="form.outerVisible"
      width="50%"
      :show-close="false"
    >
      <p class="titleRIght">
        <el-link type="primary" @click="funOption">{{parameter.fun3}}</el-link>
        <el-link type="primary" @click="funOption">{{parameter.fun2}}</el-link>
        <el-link type="primary" @click="funOption">{{parameter.fun1}}</el-link>
      </p>
      <slot></slot>
      <slot name="footer" class="priceSum"></slot>
      <div slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="24">
            <el-button @click="submit" type="primary">{{parameter.submit}}</el-button>
            <el-button
              v-show="parameter.cloleShow"
              @click="submit"
              type="primary"
            >{{parameter.close}}</el-button>
            <el-button @click="close">{{parameter.reset}}</el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
    
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { exists } from "fs";
const { mapState, mapMutations } = createNamespacedHelpers("project");
export default {
  props: ["parameter"],
  computed: {
    ...mapState(["form", "maintainData", "insuranceData"])
  },
  methods: {
    submit() {
      this.$emit("submitForm", "ruleForm");
      this.form.outerVisible = false;
    },
    close() {
      this.form.outerVisible = false;
      this.$emit("resetForm", "ruleForm");
      // this.maintainData.Maintenance=false;
      // this.insuranceData.Coverage=false;
    },
    funOption(event) {
      let e = window.event || event;
      if (e.target.innerText === "关闭") {
        this.form.outerVisible = false;
        console.log("关闭");
      } else if (e.target.innerText === "保存") {
        console.log("保存");
      } else if (e.target.innerText === "新建材料") {
        console.log("新建材料");
      } else if (e.target.innerText === "新建商品") {
        console.log("新建商品");
      } else if (e.target.innerText === "添加商品") {
        console.log("添加商品");
      }
    }
  }
};
</script>

<style scoped>
.el-dialog__header {
  background: gainsboro;
}
.dialog {
  position: relative;
}
.titleRIght {
  position: absolute;
  top: 0;
  right: 0;
}
.titleRIght > a {
  margin: 11px 12px;
}
.priceSum {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
