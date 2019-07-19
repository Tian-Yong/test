<template>
    <div id="index">
        <el-row :gutter="24" class="topInner">
                <el-row :gutter="24" class="mgb21">
                    <el-col :span="8" class="topOne">
                        <el-card shadow="always" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-user grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num"><countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo></div>
                                    <div class="grind-text">用户访问量</div>
                                </div>
                            </div>  
                        </el-card>
                    </el-col>
                    <el-col :span="8"  class="topOne">
                        <el-card shadow="always" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-chat-dot-round grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num"><countTo :startVal='startVal' :endVal='endVal1' :duration='5000'></countTo></div>
                                    <div class="grind-text">系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8"  class="topOne">
                        <el-card shadow="always" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-truck grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num"><countTo :startVal='startVal' :endVal='endVal2' :duration='6000'></countTo></div>
                                    <div class="grind-text">交易数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8"  class="topOne">
                        <el-card shadow="always" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-document grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num"><countTo :startVal='startVal' :endVal='endVal3' :duration='8000'></countTo></div>
                                    <div class="grind-text">手续费收取</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8" class="topOne">
                        <el-card shadow="always" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-5">
                                <i class="el-icon-folder-opened grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num"><countTo :startVal='startVal' :endVal='endVal4' :duration='2000'></countTo></div>
                                    <div class="grind-text">注册用户数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8" class="topOne">
                        <el-card shadow="always" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-5">
                                <i class="el-icon-position grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num"><countTo :startVal='startVal' :endVal='endVal4' :duration='2000'></countTo></div>
                                    <div class="grind-text">注册用户数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="12" class="chartsOne">
                        <el-card shadow="always" :body-style="{padding: '20px 10px 0 10px'}">
                            <ve-line :data="chartData" :title="title"></ve-line>
                        </el-card>
                    </el-col>
                <el-col :span="12" class="chartsTwo">
                    <el-card shadow="always" :body-style="{padding: '20px 10px 0 10px'}">
                        <ve-histogram :data="chartData" :title="title1"></ve-histogram>
                    </el-card>
                </el-col>
                <el-col :span="12" class="chartsThree">
                    <el-card shadow="always" :body-style="{padding: '20px 10px 0 10px'}">
                        <ve-line :data="chartData" :title="title2"></ve-line>
                    </el-card>
                </el-col>
                <el-col :span="12"  class="chartsFour">
                    <el-card shadow="always" :body-style="{padding: '20px 10px 0 10px'}">
                        <ve-scatter :data="chartData" :title="title3"></ve-scatter>
                    </el-card>
                </el-col>
            </el-row>
            </el-row>
    </div>
</template>

<script>
import countTo from 'vue-count-to';
    export default {
        name: 'dashboard',
        components: { countTo },
        data() {
            return {
                startVal: 0,
                endVal: 2017,
                endVal1: 21321321,
                endVal2: 212321,
                endVal3: 21321321,
                endVal4: 213123,
                chartData: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 123 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 4431 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 2133 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 4231 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 1234 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 2355 }
                    ]
                },
                title:{
                    text:'注册用户数',
                },
                title1:{
                    text:'提现/充值金额',
                },
                title2:{
                    text:'交易数量',
                },
                title3:{
                    text:'手续费收取',
                },
            }
        },
       mounted(){
           
       }
    }
</script>
<style scoped>
    #index{
        padding:10px 20px;
        margin-bottom: 500px;
    }
    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }
    .grind-text{
        font-size: 14px;
    }
    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }
    .grid-con-4 .grid-con-icon {
        background: #67C23A;
    }

    .grid-con-4 .grid-num {
        color: #E6A23C;
    }
    .grid-con-5 .grid-con-icon {
        background: #909399;
    }

    .grid-con-5 .grid-num {
        color: #E6A23C;
    }
    .topOne{
        margin-bottom: 10px;
    }
    .chartsOne,.chartsTwo{
        margin-bottom: 15px;
    }
</style>
