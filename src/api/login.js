import request from '@/utils/request'
import {baseUrl} from '../config/env'
export default {
  login(username, password) {
    return request({
      url: `${baseUrl}/user/login`,
      method: 'post',
      data: {
        username,
        password
      }
    })
  },
  loginByCode(phone, code) {
    return request({
      url: `${baseUrl}/user/loginCode`,
      method: 'post',
      data: {
        phone,
        code
      }
    })
  },
  getInfo(token) {
    return request({
      url: `${baseUrl}/user/info`,
      method: 'get',
      params: { token }
    })
  },
  logout() {
    return request({
      url: `${baseUrl}/user/logout`,
      method: 'post'
    })
  }
}
