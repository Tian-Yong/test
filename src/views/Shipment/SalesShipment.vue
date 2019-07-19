<template>
  <div>
    <!-- 销售退货 -->
    <Form :parameter="text" @submitForm="submitForm" @resetForm="resetForm">
      <ul class="priceSum" slot="footer">
        <li>收货数量:10</li>
        <li>现结金额:10</li>
        <li>月结金额:10</li>
        <li>铺货金额:10</li>
      </ul>
    </Form>
  </div>
</template>

<script>
import Form from "../../components/project/form.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("project");
export default {
  data() {
    return {
      text: {
        title: "新建/编辑收货单(SH19062400001)",
        submit: `保存`,
        close: "结算",
        cloleShow:true,
        reset: `取消`,
        fun1: "关闭",
        fun2: "新建商品",
        fun3: "添加商品"
      }
    };
  },
  components: {
    Form
  },
  methods: {
    ...mapMutations(["insurance"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   this.insurance(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //   this.$refs[formName].resetFields();
      //   this.insurance(this.ruleForm);
    }
  }
};
</script>

<style scpoed>
.priceSum {
  display: flex;
  list-style: none;
  position: absolute;
  bottom: 16px;
  left: -22px;
}
.priceSum > li {
  margin-right: 10px;
}
</style>
