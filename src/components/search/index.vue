<template>
    <div>
        <el-dialog :visible.sync="visible" :width="width" :before-close="handleClose" :title="title">
            <el-row :gutter="24" class="topSearch"  style="margin:0">
                <el-col :span="17" style="padding:0;">
                    <el-input v-model="searchInner" placeholder="请输入要搜索的内容"></el-input>
                </el-col>
                <el-col :span="6" style="text-align:right;padding-right:0">
                    <el-button @click="search" type="success" icon="el-icon-search" plain :disabled="searchDisabled">搜索</el-button>
                </el-col>
            </el-row>
            <slot></slot>
            <p class="heji" v-if="showLength"><span>合计条数：{{length}}条</span></p>

             <el-row :gutter="24" v-if="createOne" class="bottomBuild" style="margin:0">
                <el-col :span="17" style="padding:0;">
                    <el-input placeholder="请输入要新增的内容" v-model="CreateOneInner"></el-input>
                </el-col>
                <el-col :span="6"  style="text-align:right;padding-right:0">
                    <el-button @click="createOneClick"  type="warning" plain icon="el-icon-office-building" :disabled="creatOneDisabled">新建</el-button>
                </el-col>
            </el-row>

            <el-row :gutter="24" v-if="createTwo" class="bottomBuild" style="margin:0">
                <el-col :span="8" style="padding:0;">
                    <el-input placeholder="中文名称" v-model="ZhName"></el-input>
                </el-col>
                <el-col :span="8" :offset="1" style="padding:0;">
                    <el-input placeholder="英文名称" v-model="EnName"></el-input>
                </el-col>
                <el-col :span="6"  style="text-align:right;padding-right:0">
                    <el-button @click="createTwoClick"  type="warning" plain icon="el-icon-office-building" :disabled="createTwoDisbaled">新建</el-button>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer" v-if="showFooter">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confrim">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            width:{
                type: String,
                default: '30%'
            },
            title:{
                type: String,
                default: '标题'
            },
            length:{
                type: Number,
                default: 0
            },
            createTwo:{
                type: Boolean,
                default: false
            },
            createOne:{
                type: Boolean,
                default: false
            },
            showLength:{
                type: Boolean,
                default: false
            },
            showFooter:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                searchInner:'',
                ZhName:'',
                EnName:'',
                CreateOneInner:''
            }
        },
        methods:{
            handleClose(){
                this.searchInner = '';
                this.ZhName = '';
                this.EnName = '';
                this.CreateOneInner = '';
                this.$emit('handleClose')
            },
            cancel(){
                 this.$emit('cancel')
            },
            confrim(){
                this.$emit('confirm')
            },
            search(){
                this.$emit('search',this.searchInner)
            },
            createTwoClick(){
                this.$emit('createTwoClick',this.ZhName,this.EnName)
            },
            createOneClick(){
                this.$emit('createOneClick',this.CreateOneInner)
            }
        },
        computed:{
            searchDisabled(){//搜索按钮不可用
                if(this.searchInner){
                    return false
                }else{
                    return true
                }
            },
            creatOneDisabled(){//新建一条不可用
                if(this.CreateOneInner){
                    return false
                }else{
                    return true
                }
            },
            createTwoDisbaled(){//新建两条不可用
                if(this.ZhName && this.EnName){
                    return false
                }else{
                    return true
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
/deep/.el-dialog__body{
    padding: 0 0 20px 0;
}
.heji{
    margin-top:10px;
    margin-bottom:0;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    font-size: 14px;
    & span{
        padding: 0 5%;
    }
}
.topSearch,.bottomBuild{
    padding:3% 0 3% 5%;
}
</style>