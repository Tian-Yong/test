<template>
  <div>
    <el-button type="primary" @click="elardShow=true">主要按钮</el-button>
    <el-card class="box-card" v-if="elardShow">
      <div slot="header" class="clearfix">
        <span>维修项目列表</span>
        <el-link type="danger" style="float: right; padding: 3px 6px" @click="elardShow=false">删除</el-link>
        <el-link type="primary" style="float: right; padding: 3px 0">新建项目</el-link>
      </div>
      <el-row class="text" :gutter="20">
        <el-col :span="18">
          <el-input v-model="input" placeholder="请输入内容" @input="seacth"></el-input>
        </el-col>
        <el-col :span="4">
          <el-link type="primary">新建项目</el-link>
        </el-col>
      </el-row>
      <el-table
        ref="singleTable"
        :data="tableData"
        @current-change="handleCurrentChange"
        style="width: 100%;margin-top:20px;"
        border
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="name" label="姓名" width="250"></el-table-column>
        <el-table-column label="地址">
          <el-link type="primary" style="margin-right:20px">详情</el-link>
          <el-link type="primary">添加</el-link>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      elardShow: false,
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentRow: null
    };
  },

  methods: {
    seacth() {
      console.log(1111111111);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>
<style scoped>
.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -240px;
  margin-top: -196px;
}
</style>