import request from '@/utils/request'
import {baseUrl} from '../config/env'
export default{
  getUserListPage(params) {
    return request({
      url: `${baseUrl}/user/listpage`,
      method: 'get',
      params: params
    })
  },
  removeUser(params) {
    return request({
      url: `${baseUrl}/user/remove`,
      method: 'get',
      params: params
    })
  },
  batchRemoveUser(params) {
    return request({
      url: `${baseUrl}/user/batchremove`,
      method: 'get',
      params: params
    })
  },
  editUser(params) {
    return request({
      url: `${baseUrl}/user/edit`,
      method: 'get',
      params: params
    })
  },
  addUser(params) {
    return request({
      url: `${baseUrl}/user/add`,
      method: 'get',
      params: params
    })
  }
}
