<template>
  <div id="box">
    <Table title="维修项目列表" state=1>
      <div slot="right">
        <el-row :gutter="20" type="flex" align="middle">
          <el-col :span="8">
            <el-input v-model="input" placeholder="请输入内容" @input="seacth"></el-input>
          </el-col>
          <el-col :span="4">
            <el-link type="primary">更多查询</el-link>
          </el-col>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;margin-top:20px;color:black"
          border
          highlight-current-row
          @selection-change="handleSelectionChange"
          :fit="true"
        >
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="项目编号" width="80">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column prop="name" label="名称" width="90"></el-table-column>
          <el-table-column prop="category" label="业务类型" width="90"></el-table-column>
          <el-table-column prop="type" label="参考售价(元)" width="90"></el-table-column>
          <el-table-column prop="addition" label="非折扣项目" width="90"></el-table-column>
          <el-table-column prop="state" label="状态" width="90"></el-table-column>
          <el-table-column prop="num" label="销售数量" width="90"></el-table-column>
          <el-table-column prop="price" label="销售金额" width="90"></el-table-column>
          <el-table-column prop="remark" label="备注" width="90"></el-table-column>
          <el-table-column prop="date" label="创建时间" width="90"></el-table-column>
          <el-table-column prop="shop" label="创建门店" width="90"></el-table-column>
        </el-table>
      </div>
      <div slot="left" class="menu">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">业务类型</span>
            <el-link type="primary" style="float: right;">新建</el-link>
          </div>
          <div class="menuOption">
            <ul class="menuLeft">
              <li v-for="(item,index) in options" :key="index"></li>
            </ul>
            <ul class="menuRight">
              <li
                v-for="(item,index) in options"
                :key="index"
                @click="menuOption(index)"
              >{{item.name}}({{item.num}})</li>
            </ul>

            
          </div>
        </el-card>
      </div>
    </Table>
     <Maintenance v-if="maintainData.Maintenance"></Maintenance>
  </div>
</template>

<script>
import Table from "../../components/project/table.vue";
import Maintenance from "./maintenance.vue";
import {createNamespacedHelpers}from"vuex"
const{mapState,mapMutations}=createNamespacedHelpers("project")
export default {
  components: {
    Table,
    Maintenance
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
      multipleSelection: [],
      options: [
        { name: "洗车", num: 0 },
        { name: "保养", num: 0 },
        { name: "美容", num: 0 },
        { name: "洗车", num: 0 },
        { name: "轮胎", num: 0 },
        { name: "保险", num: 0 },
        { name: "其它", num: 0 }
      ],
      input: "",
    };
  },
computed:{
    ...mapState(["maintainData"])
},
  methods: {
    seacth() {
      //搜索
      console.log(this.input);
    },
    menuOption(val) {
      //侧边导航菜单事件
      console.log(val);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#box {
width: 100%;
margin: auto;
}
.menu {
  width: 200px;
}
.menuOption {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
li {
  list-style: none;
}
.menuLeft {
  border-left: dashed 1px gainsboro;
}
.menuLeft > li {
  margin-top: 20px;
  width: 15px;
  height: 21px;
  border-top: dashed 1px gainsboro;
}
.menuRight {
  margin-top: 13px;
}
.menuRight > li {
  height: 39.98px;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
