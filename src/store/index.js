import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import common from './modules/common'
import getters from './getters'
import fullScreen from './modules/fullScreen'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import project from"./modules/project.js"//项目状态管理

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    common,
    fullScreen,
    permission,
    tagsView,
    project
  },
  getters
})

export default store
