<template>
  <div>
    <el-card>
      <div id="anticipation-priority" :breadcrumb="false" v-loading="loading">
        <div class="date-table">
          <el-button type="success" size="small" @click="exportCsvEvent">导出</el-button>
          <elx-editable
            height="400px"
            border
            ref="elxEditable"
            :edit-config="{trigger: 'manual', mode: 'row', clearActiveMethod}"
            :edit-rules="{buildingName: [{required: true, message: '姓名不能为空', trigger: 'blur'}]}"
            :data="table"
          >
            <elx-editable-column
              type="index"
              width="50"
              align="center"
              label="序号"
              icon="el-icon-question"
            ></elx-editable-column>
            <elx-editable-column
              prop="buildingName"
              label="名称"
              align="center"
              :edit-render="{required:true,name: 'ElInput'}"
            ></elx-editable-column>
            <elx-editable-column
              prop="homeStyle"
              label="风格"
              align="center"
              :edit-render="{required:true,name: 'ElInput'}"
            ></elx-editable-column>
            <elx-editable-column
              prop="homeType"
              label="类型"
              align="center"
              :edit-render="{required:true,name: 'ElInput'}"
            ></elx-editable-column>
            <elx-editable-column
              prop="homeArea"
              label="面积"
              align="center"
              :edit-render="{required:true,name: 'ElInput'}"
            ></elx-editable-column>
            <elx-editable-column
              prop="homePay"
              label="售价"
              align="center"
              :edit-render="{required:true,name: 'ElInput'}"
            ></elx-editable-column>
            <elx-editable-column label="操作" width="150">
              <template v-slot="scope">
                <template v-if="$refs.elxEditable.hasActiveRow(scope.row)">
                  <el-button size="mini" type="success" @click="saveRowEvent(scope.row)">保存</el-button>
                  <el-button size="mini" type="warning" @click="cancelRowEvent(scope.row)">取消</el-button>
                </template>
                <template v-else>
                  <el-button size="mini" type="primary" @click="openActiveRowEvent(scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="removeEvent(scope.row)">删除</el-button>
                </template>
              </template>
            </elx-editable-column>

            <infinite-loading
              slot="append"
              ref="InfiniteLoading1"
              @infinite="onInfinite"
              :distance="10"
              spinner="bubbles"
              forceUseInfiniteWrapper=".el-table__body-wrapper"
            >
              <!-- <div slot="spinner" style="font-size:18px;padding:10px 0;">拼命加载中 <i class="el-icon-loading" ></i></div> -->
              <div slot="no-more" style="font-size:18px;padding:10px 0;">没有更多了！</div>
            </infinite-loading>
          </elx-editable>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
Date.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    InfiniteLoading
  },
  data() {
    return {
      paging: {
        current: 1,
        size: 5
      },
      total: 0,
      table: [],
      loading: true,
      sortable: null,
      numberList: []
    };
  },
  created() {
    // this.$nextTick(() => {
    //     this.setSort()
    // })
  },
  mounted() {},
  methods: {
    onInfinite($state) {
      let that = this;
      axios.defaults.headers.common["Authorization"] =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxMzk4MjM0NzM2NSIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE1NjUxNzEzMTAsInVzZXIiOnsiaWQiOiIxMCIsInJvbGVzIjoiMTEyOTIxNjM1OTM0NTExNTEzNyIsImNsaWVudElkIjoiMTEyOTIxMTAwNjg5MjYyMTgyNiIsImRlY29yYXRpb25lcklkIjoxMDgsInN0b3JlSWQiOjkxfSwiYXV0aG9yaXRpZXMiOlsiMTEyOTIxNjM1OTM0NTExNTEzNyJdLCJqdGkiOiJhNGI5MGE1ZS1jNWE4LTQ4YzQtYTBkNC05YTNjM2M5YzgwYmQiLCJjbGllbnRfaWQiOiJoZHNjX2FkbWluIn0.RqoYeYnsn6ZvDkxqxWhThD1lq1ho9tCEtrgIhrctEIE";
      axios
        .post("http://api.beedec.com:8000/hdsc/ignore/case/page", {
          page: { current: that.paging.current, size: that.paging.size }
        })
        .then(res => {
          if (res.data.data.records.length) {
            that.paging.current += 1;
            that.table = that.table.concat(res.data.data.records);
            that.loading = false;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    setSort() {
      const el = document.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost",
        setData: function(dataTransfer) {
          dataTransfer.setData("Text", "");
          // to avoid Firefox bug
        },
        onEnd: evt => {
          const targetRow = this.table.splice(evt.oldIndex, 1)[0];
          const tempIndex = this.numberList.splice(evt.newIndex, 1)[0];
          let data = {
            anticipationId: targetRow.id,
            priorityNumber: tempIndex
          };

          // axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxMzk4MjM0NzM2NSIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE1NjUxNzEzMTAsInVzZXIiOnsiaWQiOiIxMCIsInJvbGVzIjoiMTEyOTIxNjM1OTM0NTExNTEzNyIsImNsaWVudElkIjoiMTEyOTIxMTAwNjg5MjYyMTgyNiIsImRlY29yYXRpb25lcklkIjoxMDgsInN0b3JlSWQiOjkxfSwiYXV0aG9yaXRpZXMiOlsiMTEyOTIxNjM1OTM0NTExNTEzNyJdLCJqdGkiOiJhNGI5MGE1ZS1jNWE4LTQ4YzQtYTBkNC05YTNjM2M5YzgwYmQiLCJjbGllbnRfaWQiOiJoZHNjX2FkbWluIn0.RqoYeYnsn6ZvDkxqxWhThD1lq1ho9tCEtrgIhrctEIE';
          // axios.post('http://api.beedec.com:8000/hdsc/ignore/case/page',{page:{current:this.paging.current,size:this.paging.size}}).then(res=>{
          // this.paging.current = 1
          // this.$set(this, 'table', [])
          // this.$nextTick(() => {
          //     this.$refs.Infinite.$emit('$InfiniteLoading:reset')
          // })

          // }).catch((error) => {
          //     this.$message.error('排序失败：' + error)
          // })
        }
      });
    },
    clearActiveMethod({ type, row }) {
      return this.isClearActiveFlag && type === "out"
        ? this.checkOutSave(row)
        : this.isClearActiveFlag;
    },
    saveRowEvent(row) {
      this.$nextTick(() => {
        let activeInfo = this.$refs.elxEditable.getActiveRow();
        if (activeInfo && activeInfo.isUpdate) {
          this.isClearActiveFlag = false;
          this.$msgbox
            .confirm("检测到未保存的内容，请确认操作?", "温馨提示", {
              distinguishCancelAndClose: true,
              confirmButtonText: "保存数据",
              cancelButtonText: "取消修改",
              type: "warning"
            })
            .then(() => {
              this.$refs.elxEditable.setActiveRow(row);
              this.saveRowEvent(activeInfo.row);
            })
            .catch(action => {
              if (action === "cancel") {
                this.$refs.elxEditable.revert(activeInfo.row);
                this.$refs.elxEditable.setActiveRow(row);
              }
            })
            .then(() => {
              this.isClearActiveFlag = true;
            });
        } else {
          this.$refs.elxEditable.setActiveRow(row);
        }
      });
    },
    cancelRowEvent(row) {
      if (!row.id) {
        this.isClearActiveFlag = false;
        MessageBox.confirm("该数据未保存，是否移除?", "温馨提示", {
          distinguishCancelAndClose: true,
          confirmButtonText: "移除数据",
          cancelButtonText: "返回继续",
          type: "warning"
        })
          .then(action => {
            if (action === "confirm") {
              this.$refs.elxEditable.remove(row);
            }
          })
          .catch(e => e)
          .then(() => {
            this.isClearActiveFlag = true;
          });
      } else if (this.$refs.elxEditable.hasRowChange(row)) {
        this.isClearActiveFlag = false;
        this.$msgbox
          .confirm("检测到未保存的内容，是否取消修改?", "温馨提示", {
            distinguishCancelAndClose: true,
            confirmButtonText: "取消修改",
            cancelButtonText: "返回继续",
            type: "warning"
          })
          .then(action => {
            this.$refs.elxEditable.clearActive();
            this.$refs.elxEditable.revert(row);
          })
          .catch(action => {
            if (action === "cancel") {
              this.$refs.elxEditable.setActiveRow(row);
            }
          })
          .then(() => {
            this.isClearActiveFlag = true;
          });
      } else {
        this.$refs.elxEditable.clearActive();
      }
    },
    openActiveRowEvent(row) {
      this.$nextTick(() => {
        let activeInfo = this.$refs.elxEditable.getActiveRow();
        if (activeInfo && activeInfo.isUpdate) {
          this.isClearActiveFlag = false;
          this.$msgbox
            .confirm("检测到未保存的内容，请确认操作?", "温馨提示", {
              distinguishCancelAndClose: true,
              confirmButtonText: "保存数据",
              cancelButtonText: "取消修改",
              type: "warning"
            })
            .then(() => {
              this.$refs.elxEditable.setActiveRow(row);
              this.saveRowEvent(activeInfo.row);
            })
            .catch(action => {
              if (action === "cancel") {
                this.$refs.elxEditable.revert(activeInfo.row);
                this.$refs.elxEditable.setActiveRow(row);
              }
            })
            .then(() => {
              this.isClearActiveFlag = true;
            });
        } else {
          this.$refs.elxEditable.setActiveRow(row);
        }
      });
    },
    removeEvent() {},
    exportCsvEvent() {
      let time = new Date().Format("yyyy-MM-dd");
      this.$refs.elxEditable.exportCsv({
        filename: time + "表格",
        isHeader: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>