<template>
    <div class="table">
        <el-card shadow="always" :body-style="{padding: '20px'}">
            <el-form :model="form" label-position="left" label-width="100px" :inline="true" @submit.native.prevent>
                <el-form-item label="">
                    <el-autocomplete popper-class="my-autocomplete" v-model="form.key" :fetch-suggestions="querySearch" placeholder="请输入名称"
                    :trigger-on-focus="false" @keypress.enter.native="search" @select="handleSelect">
                    <template slot-scope="{ item }">
                        <div class="name">{{ item.name }}</div>
                        <span class="addr">{{ item.address }}</span>
                    </template>
                    </el-autocomplete>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                    
                </el-form-item>
                <el-form-item label="">
                    <el-button type="text" @click="moreContent">更多搜索条件</el-button>
                </el-form-item>
            </el-form>
            <el-tag
                v-for="(tag,index) in tags"
                style="margin-bottom:10px;margin-right:10px"
                :key="index"
                :disable-transitions="false"
                @close="CloseTag(index)"
                closable>
                {{tag.zh}}
            </el-tag>

            <Table :tableData='tableData1'  :paging='paging' @refresh="getCaseList" :total="total" v-loading="loading" >
                <template slot="client" slot-scope='props'>
                    <el-button size="small" type="warning" @click="active(props.scope.row)">激活</el-button>
                    <el-button size="small" type="danger" @click="showDown(props.scope.row)">停用</el-button>
                </template> 
            </Table>
            
            <div>
                <el-checkbox v-model="item.visible" v-for="item in allCustomColumnList" :key="item.prpo">{{ item.label }}</el-checkbox>
            </div>
            <elx-table :data="tableData" border fit highlight-current-row  :custom-columns.sync="customColumns" style="width: 100%">
                <elx-table-column prop="id" label="id"></elx-table-column>
                <elx-table-column prop="name" label="名称"></elx-table-column>
                <elx-table-column prop="createTime" label="创建时间"></elx-table-column>
                <elx-table-column prop="email" label="邮箱"></elx-table-column>
                <elx-table-column prop="address" label="地址"></elx-table-column>
                <elx-table-column prop="phone" label="电话"></elx-table-column>
                <elx-table-column prop="" label="操作">
                    <template slot="scope" >
                        <el-button size="small" type="warning" @click="active(scope.row)">激活</el-button>
                        <el-button size="small" type="danger" @click="showDown(scope.row)">停用</el-button>
                    </template> 
                </elx-table-column>
            </elx-table>

            <Search :visible="visible"  @handleClose="handleClose" :title="title">
                <el-table :data="tableData2" border fit highlight-current-row  style="width: 100%;">
                    <el-table-column prop="zh" label="中文名"></el-table-column>
                    <el-table-column prop="en" label="英文名"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="small" type="text" @click="select(scope.row)">选择</el-button>
                        </template> 
                    </el-table-column>
                </el-table>
            </Search>
        </el-card>
    </div>
</template>
<script>
import Table from '../../components/table/index'
import axios from 'axios'
import Search from '../../components/search/index'
    export default {
        name: 'basetable',
        components:{
            Table,
            Search
        },
        data() {
            return {
                tableData2: [
                    {
                        zh:'美孚',
                        en:'Mobil'
                    },
                    {
                        zh:'博士',
                        en:'BOSCH'
                    },
                    {
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    },{
                        zh:'博士',
                        en:'BOSCH'
                    }
                ],
                tableData:[],
                form:{},
                tableData1:{
                    tableTh:[
                        {
                            title: 'id',
                            name: 'id',
                        },{
                            title: '名称',  
                            name: 'name',
                        },{
                            title: '创建时间',
                            name: 'createTime',
                        },{
                            title: '邮箱',
                            name: 'email',
                        },{
                            title: '地址',
                            name: 'address',
                        },{
                            title: '电话',
                            name: 'phone',
                        },{
                            title: '操作',
                            name: 'slot',
                            type:'slot'
                        }
                    ],
                    tableTd:[],
                },
                checkList:['id','createTime','email'],
                paging:{
                    current:1,
                    size:10
                },
                total:0,
                loading:true,
                customColumns: [],
                visible:false,
                title:'材料品牌',
                tags:[]
            }
        },
        computed:{
             allCustomColumnList () {
                return this.customColumns.filter(item => item.prop)
            }
        },
        mounted() {
             axios.get('/user/listpage',{params: {
                        'current': this.paging.current,
                        'size': this.paging.size,
                    }}).then(res=>{
                this.tableData1.tableTd = res.data.data.users;
                this.tableData = res.data.data.users;
                this.total = res.data.data.total;
                this.loading = false;
       
            })
        },
        methods: {
            search(){//搜索
                this.loading = true;
                axios.get('/user/listpage',{params: {
                            'current': this.paging.current,
                            'size': this.paging.size,
                            'name':this.form.key
                        }}).then(res=>{
                            console.log(res)
                    this.tableData1.tableTd = res.data.data.users;
                    this.total = res.data.data.total;
                    this.loading = false;
                })
            },
            getCaseList(page){//获取列表
                if(page){
                    this.paging.current = page.current;
                }
                this.loading = true;
                axios.get('/user/listpage',{params: {
                        'current': this.paging.current,
                        'size': this.paging.size,
                        'name':this.form.key
                    }}).then(res=>{
                    this.tableData1.tableTd = res.data.data.users;
                    this.total = res.data.data.total;
                    this.loading = false;
                })
            },
            active(e){//激活
                console.log(e)
            },
            showDown(e){//停用
                this.$confirm(`确定要停用  ${e.name}  的账号？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning', beforeClose: (action, instance, done) => {
                        if (action == 'confirm') {
                            console.log(e)
                            
                            done();
                        }else if(action == 'cancel') {
                            done();
                        }
                    }
                }).catch(()=>{
                    
                })
            },
            moreContent(){//更多搜索条件
                 this.visible = true;
            },
            handleClose(){//关闭
                this.visible = false;
            },
            select(val){//选择
                this.tags.push(val);
                this.visible = false;
            },
            CloseTag(index){
                this.tags.splice(index,1)
            },
            querySearch(queryString, callBack){
                axios.get('/user/listpage',{params: {
                            'current': this.paging.current,
                            'size': this.paging.size,
                            'name':queryString
                        }}).then(res=>{
                            callBack(res.data.data.users)
                })
            },
            handleSelect(item) {
                this.form.key = item.name;
                this.loading = true;
                axios.get('/user/listpage',{params: {
                            'current': this.paging.current,
                            'size': this.paging.size,
                            'name':item.name
                        }}).then(res=>{
                    this.tableData1.tableTd = res.data.data.users;
                    this.total = res.data.data.total;
                    this.loading = false;
                })
            }
        },
    }

</script>

<style scoped lang="scss">
    .table{
        padding: 0 10px;
    }
    .handle-box {
        margin-bottom: 20px;
    }
    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt {
        font-size: 16px;
        text-align: center;
    }
    .mr10 {
        margin-right: 10px;
        }
        .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand >>> label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 30%;
    }
    .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;
            .name {
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .addr {
                font-size: 12px;
                color: #b4b4b4;
            }
            .highlighted .addr {
                color: #ddd;
            }
        }
    }
</style>
