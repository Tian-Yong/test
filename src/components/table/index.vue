<template>
  <div id="table">
    <!-- 表单数据 -->
    <template>
      <el-table
        :data="tableData.tableTd"
        border
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <template v-for="(item,index) in tableData.tableTh">
            <el-table-column
            align="center" 
            :label="item.title" :key="index" v-if="item.type == 'slot'" min-width="100">
                <template slot-scope="scope">
                    <slot name="client" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column
            align="center"
            :label="item.title" :key="index" v-else-if="item.type == 'switch'" min-width="80">
                <template slot-scope="scope">
                    <slot name="switch" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column
            align="center"
            :label="item.title" :key="index" v-else-if="item.type == 'icon'" min-width="100">
                <template slot-scope="scope">
                    <slot name="icon" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column
            align="center"
            :label="item.title" :key="index" v-else-if="item.type == 'expand'" type="expand" min-width="100">
                <template slot-scope="scope">
                    <slot name="expand" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column
            align="center"
            :label="item.title" :key="index" v-else-if="item.type == 'image'" width="100">
                <template slot-scope="scope">
                    <slot name="image" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column
            align="center"
            :label="item.title" :key="index" v-else-if="item.type == 'section'" width="55" type="selection">
            </el-table-column>
            <el-table-column
            :prop="item.name"
            align="center"
            :show-overflow-tooltip="true"
            :label="item.title" :key="index" v-else min-width="50">
            </el-table-column>
        </template>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pagingData.current"
        background
        :page-size="pagingData.size"
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        class="cg_page"
        >
      </el-pagination>
    </template>
  </div>
</template>

<script>
export default {
    props:{
      tableData:{
        type:Object,
        default:() => {}
      },
      paging: {
        type:Object,
        default:() => {}
      },
      total:{
        type:Number,
        default:0
      }
    },
    data(){
      return {
          pagingData: this.paging
      }
  },
  methods: {
    handleCurrentChange (currentPage) {
      this.pagingData.current = currentPage;
      this.$emit('refresh',this.pagingData)
    },
    handleSizeChange(pageCount){
      this.pagingData.size = pageCount;
      this.pagingData.current = 1;
      this.$emit('refresh',this.pagingData)
    },
    handleSelectionChange(val){
      this.$emit('handleSelectionChange',val)
    }
  }
};
</script>
<style lang="scss" scoped>
#table {
  .cg_page {
    text-align: right;
    padding: 20px 0 0 0;
  }
}
</style>
