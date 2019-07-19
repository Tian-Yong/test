<template>
  <div>
    <Form @submitForm="submitForm" @resetForm="resetForm" :parameter="text">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
        <span>基本信息</span>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="商品编码" prop="coding">
              <el-input v-model="ruleForm.coding" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="材料性质" prop="nature">
              <el-select v-model="ruleForm.nature" placeholder="请选择" style="width:100%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商品全称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计量单位" prop="unit">
              <el-input v-model="ruleForm.unit">
                <span slot="append">
                  <el-popover placement="right" width="500" trigger="click">
                    <el-link type="primary" slot="reference">选择</el-link>
                  </el-popover>
                </span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24"></el-col>
          <el-col :span="12">
            <el-form-item label="商品品牌" prop="brand">
              <el-input v-model="ruleForm.brand">
                <span slot="append">
                  <el-popover placement="right" width="500" trigger="click">
                    <el-link type="primary" slot="reference">选择</el-link>
                  </el-popover>
                </span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商品类型" prop="type">
              <el-input v-model="ruleForm.type">
                <span slot="append">
                  <el-popover placement="right" width="500" trigger="click">
                    <el-link type="primary" slot="reference">选择</el-link>
                  </el-popover>
                </span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="规格型号" prop="model">
              <el-input v-model="ruleForm.model"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="附加规格" prop="addition">
              <el-input v-model="ruleForm.addition"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原厂编码" prop="original">
              <el-input v-model="ruleForm.original"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="业务类型" prop="discount">
              <el-input v-model="ruleForm.discount">
                <span slot="append">
                  <el-popover placement="right" width="500" trigger="click">
                    <el-link type="primary" slot="reference">选择</el-link>
                  </el-popover>
                </span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24"></el-col>
          <el-col :span="12">
            <el-form-item label="参考售价" prop="price">
              <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="成本价" prop="discount">
              <el-select v-model="ruleForm.discount" placeholder="请选择" style="width:100%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="试用车型" prop="vehicle">
              <el-input v-model="ruleForm.vehicle"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注信息" prop="postscript">
              <el-input v-model="ruleForm.postscript"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <span>库存信息</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="12">
            <el-form-item label="初期库存" prop="upper">
              <el-input v-model="ruleForm.upper"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="库存下限" prop="floor">
              <el-input v-model="ruleForm.floor"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <span>适配服务及价格</span>
            <el-link type="primary" style="float:right" :underline="true">添加</el-link>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-tag
                v-for="tag in dynamicTags"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >{{tag}}</el-tag>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <span>车型适配</span>
            <el-link type="primary" style="float:right" :underline="true">添加</el-link>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-tag
                v-for="tag in dynamicTags"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >{{tag}}</el-tag>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <span>创建门店</span>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间" prop="newDate">
              <el-input v-model="ruleForm.newDate" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建门店" prop="newshop">
              <el-input v-model="ruleForm.newshop" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </Form>
  </div>
</template>

<script>
import Form from "../../components/project/form.vue";
export default {
  components: {
    Form
  },
  data() {
    return {
      ruleForm: {
        coding: "RP", //材料编码
        name: "2", //材料名称
        brand: "", //材料品牌
        type: "3", //材料类型
        model: "", //规格型号
        addition: "", //附加规格
        unit: "", //计量单位
        business: "", //业务类型
        vehicle: "", //试用车型
        postscript: "4", //备注信息
        nature: "", //性质类型
        original: "", //原厂编码
        price: "", //参考售价
        discount: "6", //折扣类型
        upper: "", //库存上限
        floor: "", //库存下限
        AdapterService: [], //适配服务
        AdapterModels: [], //适配车型
        newDate: "", //创建时间
        newshop: "" //创建门店
      },
      rules: {
        coding: [{ message: "请输入项目编码", trigger: "blur" }],
        name: [{ message: "请输入项目名称", trigger: "blur" }],
        type: [{ message: "请输入业务类型", trigger: "blur" }],
        postscript: [{ message: "请输入备注信息", trigger: "blur" }],
        price: [{ message: "请输入参考售价", trigger: "blur" }],
        discount: [{ message: "请选择折扣类型", trigger: "blur" }]
      },
      text: {
        title: "新建/基础扩展方式",
        submit: `保存`,
        reset: `取消`,
        fun1:"关闭",
        fun2:"保存"

      },
      dynamicTags: ["标签一", "标签二", "标签三"],
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          // alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(tag) {
      //删除标签
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      //   this.maintain(this.ruleForm); //把数据传给状态机
    }
  }
};
</script>

<style scoped>
.demo-ruleForm {
  width: 50%;
}
</style>
