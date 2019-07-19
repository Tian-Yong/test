<template>
  <div>
    <Form :parameter="text" @submitForm="submitForm" @resetForm="resetForm">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
        <el-row>
          <el-col :span="24">
            <span>基本信息</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目编码" prop="coding">
              <el-input v-model="ruleForm.coding" :disabled="true">
                <el-link type="primary" slot="append">选择</el-link>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="险种类别" prop="category">
              <el-select v-model="ruleForm.category" placeholder="请选择" style="width:100%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="险种类型" prop="type">
              <el-input v-model="ruleForm.type" :disabled="true">
                <span slot="append">
                  <el-popover placement="right" width="800" trigger="click">
                    <el-table :data="gridData">
                      <el-table-column width="150" property="date" label="日期"></el-table-column>
                      <el-table-column width="100" property="name" label="姓名"></el-table-column>
                      <el-table-column width="300" property="address" label="地址"></el-table-column>
                    </el-table>

                    <el-link type="primary" slot="reference">选择</el-link>
                  </el-popover>
                </span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24"></el-col>
          <el-col :span="12">
            <el-form-item label="类型附加" prop="addition">
              <el-input v-model="ruleForm.addition"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <span>创建门店</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间" prop="date">
              <el-input v-model="ruleForm.date" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建门店" prop="shop">
              <el-input v-model="ruleForm.shop" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
      ruleForm: {
        coding: "RP",
        name: "2",
        category: "3",
        type: "4",
        addition: "5",
        date: "6",
        shop: ""
      },
      rules: {
        coding: [{ message: "请输入项目编码", trigger: "blur" }],
        name: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
        category: [{ message: "请输入险种类别", trigger: "blur" }],
        type: [{ message: "请输入险种类型", trigger: "blur" }],
        addition: [{ message: "请输入类型附加", trigger: "blur" }],
        date: [{ message: "请选择创建时间", trigger: "blur" }],
        shop: [{ message: "请选择创建门店", trigger: "blur" }]
      },
      text: {
        title: "新建/编辑维修项目",
        submit: `确定`,
        reset: `取消`,
        fun1:"关闭"
      },
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
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
          this.insurance(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.insurance(this.ruleForm);
    }
  }
};
</script>

<style scoped>
</style>
