import { param2Obj } from '@/utils'

const userMap = {
    code: 0,
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'http://img2.imgtn.bdimg.com/it/u=1082290554,1682797784&fm=11&gp=0.jpg',
    name: 'admin'
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap
  },
  loginByCode: config => {
    const { username } = JSON.parse(config.body)
    return userMap
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap) {
      return userMap
    } else {
      return false
    }
  },
  logout: () => {
    return {
      code: 0,
      Message: 'success'
    }
  }
}
