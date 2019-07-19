<template>
  <div id="box">
    <Table title="维修项目列表" state=2>
      <div slot="right">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input v-model="input" placeholder="请输入内容" @input="seacth"></el-input>
          </el-col>
          <el-col :span="4">
            <el-select v-model="value" placeholder="请选择"></el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="value" placeholder="请选择"></el-select>
          </el-col>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;margin-top:20px;"
          border
          highlight-current-row
          @selection-change="handleSelectionChange"
          :fit="true"
        >
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="项目编号" width="80">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column prop="name" label="险种名称" width="90"></el-table-column>
          <el-table-column prop="category" label="险种类别" width="90"></el-table-column>
          <el-table-column prop="type" label="险种类型" width="90"></el-table-column>
          <el-table-column prop="addition" label="险种附加" width="90"></el-table-column>
          <el-table-column prop="state" label="状态" width="90"></el-table-column>
          <el-table-column prop="num" label="销售数量" width="90"></el-table-column>
          <el-table-column prop="price" label="销售金额" width="90"></el-table-column>
          <el-table-column prop="remark" label="备注" width="90"></el-table-column>
          <el-table-column prop="date" label="创建时间" width="90"></el-table-column>
          <el-table-column prop="shop" label="创建门店" width="90"></el-table-column>
        </el-table>
      </div>
    </Table>
    <Coverage v-if="insuranceData.Coverage"></Coverage>
  </div>
</template>

<script>
import Table from "../../components/project/table.vue";
import Coverage from"./coverage.vue"
import {createNamespacedHelpers}from"vuex"
const{mapState,mapMutations}=createNamespacedHelpers("project")
export default {
  components: {
    Table,Coverage
  },
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "强制险",
          category: "强制险",
          type: "强制险",
          addition: "强制险",
          state: "强制险",
          num: "强制险",
          price: "强制险",
          remark: "强制险",
          date: "强制险",
          shop: "强制险"
        }
      ],
      input:"",
      value:"",
      multipleSelection: []
    };
  },
computed:{
    ...mapState(["insuranceData"])
},
  methods: {
      seacth(){
console.log(this.input)
      },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
#box {
  margin: auto;
}
</style>
