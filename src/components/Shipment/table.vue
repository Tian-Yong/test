<template>
  <div id="box">
    <!-- 采购收货 -->
    <Form :parameter="text" @submitForm="submitForm" @resetForm="resetForm">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in inputText" :key="index">
          <span class="inputLable">{{item}}</span>
          <el-input placeholder="请输入内容" v-model="inputValue[index]">
            <span slot="append">
              <el-popover placement="right" width="500" trigger="click">
                <el-link type="primary" slot="reference">选择</el-link>
              </el-popover>
            </span>
          </el-input>
        </el-col>
      </el-row>
      <ul class="priceSum" slot="footer">
        <li>收货数量:{{priceSum[0]}}</li>
        <li>现结金额:{{priceSum[1]}}</li>
        <li>月结金额:{{priceSum[2]}}</li>
        <li>铺货金额:{{priceSum[3]}}</li>
      </ul>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%; height:400px;overflow-y:scroll;margin-top:20px;"
        show-overflow-tooltip
        v-infinite-scroll="load"
        border
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="name" label="商品名称"></el-table-column>
        <el-table-column property="brand" label="品牌"></el-table-column>
        <el-table-column property="type" label="类型"></el-table-column>
        <el-table-column property="measure" label="计量单位"></el-table-column>
        <el-table-column property="num" label="到货数量"></el-table-column>
        <el-table-column property="rejection" label="拒收数量"></el-table-column>
        <el-table-column property="take" label="收货数量"></el-table-column>
        <el-table-column property="unit" label="单间(元)"></el-table-column>
        <el-table-column property="price" label="小计金额(元)"></el-table-column>
        <el-table-column property="close" label="结算方式"></el-table-column>
        <el-table-column property="remark" label="备注"></el-table-column>
        <el-table-column label="操作">
          <el-link type="primary">修改</el-link>
          <el-link type="primary">删除</el-link>
        </el-table-column>
      </el-table>
    </Form>
  </div>
</template>

<script>
import Form from "../project/form.vue";
export default {
    props:['inputValue','inputText','tableData','text',"priceSum","state"],
  components: {
    Form
  },
  methods: {
  
    load () {
    this.tableData.push( {name: "田勇",brand: "田勇",type: "田勇",measure: "田勇",num: "田勇",rejection: "田勇",take: "田勇",unit: "田勇",price: "田勇",close: "田勇",remark: "田勇"})
      },
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
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>

<style scoped>

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
.el-col {
  display: flex;
}
.el-input-group__append {
  padding: 0 !important;
}
.inputLable {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
