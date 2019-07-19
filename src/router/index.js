import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/Layout/Layout'
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/Login'), name: '登录NxAdmin', hidden: true,meta: { title: '登录'} },
  { path: '/404', component: () => import('@/views/ErrorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/ErrorPage/401'), hidden: true},
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: resolve => require(['@/views/Dashboard'], resolve),
        meta: { title: '首页', icon: 'el-icon-s-home' }
      }
    ]
  },
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/baseData',
    component: Layout,
    redirect: '/baseData/baseData',
    name: 'baseDataes',
    meta: {
      title: '基础数据',
      icon: 'el-icon-zc-data'
    },
    children: [
      { path: 'baseData', component: resolve => require(['@/views/BaseData/baseData'], resolve), name: 'baseDatas', meta: { title: '基础数据'}},
      { path: 'fix', component: resolve => require(['@/views/BaseData/fix'], resolve), name: 'fixses', meta: { title: '维修项目'}},
      { path: 'insurance', component: resolve => require(['@/views/BaseData/insurance'], resolve), name: 'Insurances', meta: { title: '保险项目' }},
      { path: 'dataRecords', component: resolve => require(['@/views/BaseData/dataRecords'], resolve), name: 'dataRecordes', meta: { title: '材料档案' }},
      { path: 'carRecords', component: resolve => require(['@/views/BaseData/carRecords'], resolve), name: 'carRecordses', meta: { title: '车辆档案'}},
      { path: 'customerRecords', component: resolve => require(['@/views/BaseData/customerRecords'], resolve), name: 'customerRecordses', meta: { title: '客户档案'}}
    ]
  },
  {
    path: '/Vip',
    component: Layout,
    redirect: '/Vip/vipConfig',
    name: 'Vips',
    meta: {
      title: '会员',
      icon: 'el-icon-zc-vip'
    },
    children: [
      { path: 'vipCard', component: resolve => require(['@/views/Vips/vipCard'], resolve), name: 'vipCards', meta: { title: '会员卡' }},
      { path: 'vipSellRecords', component: resolve => require(['@/views/Vips/vipSellRecords'], resolve), name: 'vipSellRecordses', meta: { title: '会员销售记录' }},
      { path: 'vipConfig', component: resolve => require(['@/views/Vips/vipConfig'], resolve), name: 'vipConfigs', meta: { title: '会员管理',}},
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: '错误页面',
      icon: 'el-icon-error'
    },
    children: [{
        path: '401',
        component: resolve => require(['@/views/ErrorPage/401'], resolve),
        name: 'page401',
        meta: {
          title: '401',
        }
      },
      {
        path: '404',
        component: resolve => require(['@/views/ErrorPage/404'], resolve),
        name: 'page404',
        meta: {
          title: '404',
        }
      }]
    },
  {
    path: '/avatar',
    component: Layout,
    name: 'avatar',
    redirect: 'noredirect',
    meta: {
      title: '头像',
      icon: 'el-icon-user'
    },
    children: [{
      path: 'avatars',
      component: resolve => require(['@/views/Avatar'], resolve),
      name: 'avatars',
      meta: {
        title: '头像',
        icon: 'el-icon-user',
      }
    },{
      path: 'print',
      component: resolve => require(['@/views/Avatar/print'], resolve),
      name: 'prints',
      meta: {
        title: '打印demo',
        icon: 'el-icon-user',
      }
    }]
  },
  {
    path: '/table',
    component: Layout,
    redirect: 'noredirect',
    name: 'table',
    meta: {
      title: '表格',
      icon: 'el-icon-reading'
    },
    children: [{
        path: 'scorllTable',
        component: resolve => require(['@/views/Table/scorllTable'], resolve),
        name: 'scorllTable',
        meta: {
          title: '滚动表格',
          icon: '',
        }
      },
      {
        path: 'table',
        component: resolve => require(['@/views/Table/table'], resolve),
        name: 'tables',
        meta: {
          title: '表格模拟',
          icon: '',
        }
      }]
  },
  {//项目
    path: '/project',
    component: Layout,
    redirect: 'noredirect',
    name: 'project',
    meta: {
      title: '项目',
      icon: 'el-icon-reading'
    },
    children: [
      {
        path: 'option',
        component: resolve => require(['@/views/Project/option'], resolve),
        name: 'option',
        meta: {
          title: '选择项目',
          icon: '',
        }
      },
      {
        path: 'KeepFiles',
        component: resolve => require(['@/views/Project/KeepFiles'], resolve),
        name: 'KeepFiles',
        meta: {
          title: '保险项目档案',
          icon: '',
        }
      },
      {
        path: 'MaintenanceRecords',
        component: resolve => require(['@/views/Project/MaintenanceRecords'], resolve),
        name: 'MaintenanceRecords',
        meta: {
          title: '维修项目档案',
          icon: '',
        }
      }]
  },
  {
    path: '/materials',
    component: Layout,
    redirect: 'noredirect',
    name: 'materials',
    meta: {
      title: '材料',
      icon: 'el-icon-reading'
    },
    children: [
      {
        path: 'basicData',
        component: resolve => require(['@/views/Materials/basicData'], resolve),
        name: 'basicData',
        meta: {
          title: '新建材料-基础数据', 
          icon: '',
        }
      },
      {
        path: 'BaseExtensionMode',
        component: resolve => require(['@/views/Materials/BaseExtensionMode'], resolve),
        name: 'BaseExtensionMode',
        meta: {
          title: '新建材料-基础扩展方式',
          icon: '',
        }
      },
      {
        path: 'Receiving',
        component: resolve => require(['@/views/Materials/Receiving .vue'], resolve),
        name: 'Receiving',
        meta: {
          title: '新建材料-收货方式',
          icon: '',
        }
      },
      {
        path: 'Shipping',
        component: resolve => require(['@/views/Materials/Shipping.vue'], resolve),
        name: 'Shipping',
        meta: {
          title: '新建材料-收货方式',
          icon: '',
        }
      },
    ]
  },
  {
    path: '/Shipment',
    component: Layout,
    name: 'Shipment',
    redirect: 'noredirect',
    meta: {
      title: '收出货',
      icon: 'el-icon-s-goods'
    },
    children: [
    {
      path: 'migo',
      component: resolve => require(['@/views/Shipment/migo.vue'], resolve),
      name: 'migo',
      meta: { title: '入货-采购收货', icon: 'el-icon-shopping-cart-2'}
    },
    {
      path: 'SalesReturn',
      component: resolve => require(['@/views/Shipment/SalesReturn.vue'], resolve),
      name: 'SalesReturn',
      meta: { title: '入货-销售退货', icon: 'el-icon-shopping-cart-2'}
    },
    {
      path: 'SalesShipment',
      component: resolve => require(['@/views/Shipment/SalesShipment.vue'], resolve),
      name: 'SalesShipment',
      meta: { title: '入货-销售出货', icon: 'el-icon-shopping-cart-2'}
    },
    {
      path: 'PurchaseReturn',
      component: resolve => require(['@/views/Shipment/PurchaseReturn.vue'], resolve),
      name: 'PurchaseReturn',
      meta: { title: '入货-采购退货', icon: 'el-icon-shopping-cart-2'}
    },
    ]
    },
  {
    path: '/bilibili',
    component: Layout,
    name: 'bilibilis',
    redirect: 'noredirect',
    meta: {
      title: '哔哩哔哩',
      icon: 'el-icon-zc-bilibili'
    },
    children: [
    {
      path: 'https://www.bilibili.com',
      name: 'bilibilies',
      meta: { title: '哔哩哔哩', icon: 'el-icon-zc-bilibili'}
    }
    ]
    },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }]