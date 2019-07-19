<template>
  <div id="box">
    <!-- 采购收货 -->
    <!-- <Form :parameter="text" @submitForm="submitForm" @resetForm="resetForm">
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
        <li>收货数量:10</li>
        <li>现结金额:10</li>
        <li>月结金额:10</li>
        <li>铺货金额:10</li>
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
    </Form> -->
    <Table  
    state="true"
    :inputValue="inputValue"
    :inputText="inputText"
    :tableData="tableData"
    :text="text"
    :priceSum="priceSum"
    ></Table>
  </div>
</template>

<script>
import Table from "../../components/Shipment/table.vue";
export default {
  data() {
    return {
      inputValue: ['','','',''],
      text: {
        title: "新建/编辑收货单(SH19062400001)",
        submit: `保存`,
        close: "结算",
        cloleShow: true,
        reset: `取消`,
        fun1: "关闭",
        fun2: "新建商品",
        fun3: "添加商品"
      },
      priceSum:["10","10","10","10"],
      inputText: ["供应商","经办人","运费","收货日期"],
      tableData: [
        {name: "王小虎",brand: "王小虎",type: "王小虎",measure: "王小虎",num: "王小虎",rejection: "王小虎",take: "王小虎",unit: "王小虎",price: "王小虎",close: "王小虎",remark: "王小虎"},
        {name: "王小虎",brand: "王小虎",type: "王小虎",measure: "王小虎",num: "王小虎",rejection: "王小虎",take: "王小虎",unit: "王小虎",price: "王小虎",close: "王小虎",remark: "王小虎"},
      ],
      currentRow: null,
    };
  },
  components: {
    Table
  },
  methods: {
   
  }
};
</script>

<style scoped>
</style>
