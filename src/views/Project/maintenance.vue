<template>
  <div>
    <Form :parameter="text" @submitForm="submitForm" @resetForm="resetForm">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
        <span>基本信息</span>
        <el-divider></el-divider>
        <el-col :span="11">
          <el-form-item label="项目编码" prop="coding">
            <el-input v-model="ruleForm.coding" :disabled="true">
              <el-link type="primary" slot="append" :underline="true">修改</el-link>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="项目名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="业务类型" prop="type">
            <el-input v-model="ruleForm.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="备注信息" prop="postscript">
            <el-input v-model="ruleForm.postscript"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="22">
          <span>销售信息</span>
          <el-divider></el-divider>
        </el-col>
        <el-col :span="11">
          <el-form-item label="参考售价" prop="price">
            <el-input v-model="ruleForm.price">
              <span slot="append">元</span>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="折扣类型" prop="discount">
            <el-select v-model="ruleForm.discount" placeholder="请选择" style="width:100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <div v-show="judge.show1">
          <el-col :span="22">
            <span>提醒设置</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="11">
            <el-form-item label="提醒天数" prop="remind">
              <el-input v-model="ruleForm.remind">
                <span slot="append">天</span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="提醒里程" prop="mileage">
              <el-input v-model="ruleForm.mileage">
                <span slot="append">公里</span>
              </el-input>
            </el-form-item>
          </el-col>
        </div>
        <div v-show="judge.show2">
          <el-col :span="22">
            <span>质保设置</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="11">
            <el-form-item label="质保天数" prop="qualityNum">
              <el-input v-model="ruleForm.qualityNum">
                <span slot="append">天</span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="质保里程" prop="quality">
              <el-input v-model="ruleForm.quality">
                <span slot="append">公里</span>
              </el-input>
            </el-form-item>
          </el-col>
        </div>
        <div v-show="judge.show3">
          <el-col :span="22">
            <span>适配材料</span>
            <el-link type="primary" style="float:right" :underline="true">添加</el-link>
            <el-divider></el-divider>
          </el-col>
          <el-form-item>
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>
          </el-form-item>
        </div>
        <div v-show="judge.show4">
          <el-col :span="22">
            <span>创建门店</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="11">
            <el-form-item label="创建时间" prop="newDate">
              <el-input v-model="ruleForm.newDate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="创建门店" prop="newshop">
              <el-input v-model="ruleForm.newshop"></el-input>
            </el-form-item>
          </el-col>
        </div>
      </el-form>
    </Form>
  </div>
</template>

<script>
import Form from "../../components/project/form.vue";
import {createNamespacedHelpers}from"vuex"
const{mapState,mapMutations}=createNamespacedHelpers("project")
export default {
  data() {
    return {
      ruleForm: {
        coding: "RP", //项目编码
        name: "2", //项目名称
        type: "3", //业务类型
        postscript: "4", //备注信息
        price: "5", //参考售价
        discount: "6", //折扣类型
        remind: "", //提醒天数
        mileage: "", //提醒里程
        qualityNum: "", //质保天数
        quality: "", //质保里程
        materials: [], //适配材料数组
        newDate: "", //创建时间
        newshop: "" //创建门店
      },
      rules: {
        coding: [
          { required: true, message: "请输入项目编码", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
        type: [{ required: true, message: "请输入业务类型", trigger: "blur" }],
        postscript: [
          { required: true, message: "请输入备注信息", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入参考售价", trigger: "blur" }],
        discount: [
          { required: true, message: "请选择折扣类型", trigger: "blur" }
        ]
      },
      text: {
        title: "新建/编辑维修项目",
        submit: `提交`,
        reset: `取消`,
        fun1:"关闭"
      },
      dynamicTags: ["标签一", "标签二", "标签三"],
      judge:{
        show1:false,
        show2:false,
        show3:false,
        show4:false,
      }
    };
  },
  components: {
    Form
  },
  methods: {
    ...mapMutations(["maintain"]),
    submitForm(formName) {
      //提交
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.maintain(this.ruleForm)//把数据传给状态机
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //c重置
      this.$refs[formName].resetFields();
      this.maintain(this.ruleForm)//把数据传给状态机
    },
    handleClose(tag) {
      //删除标签
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.maintain(this.ruleForm)//把数据传给状态机
    }
  }
};
</script>

<style scoped>
</style>
