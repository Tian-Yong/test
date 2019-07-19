import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// css
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css

import './mock' // simulation data


import App from './App'

import router from './router'

import store from './store'

import '@/permission' // permission control

import VCharts from 'v-charts'

import * as filters from './filters' // global filters

import VueElementExtends from 'vue-element-extends'
import 'vue-element-extends/lib/index.css'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(VueElementExtends)

Vue.use(ElementUI, {
  size: 'medium' // set element-ui default size
})

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
