import axios from 'axios'

import {baseUrl} from '../config/env'

export const getUserList = params => { return axios.get(`${baseUrl}/user/list`, { params: params }) }

export const getUserListPage = params => { return axios.get(`${baseUrl}/user/listpage`, { params: params }) }

export const removeUser = params => { return axios.get(`${baseUrl}/user/remove`, { params: params }) }

export const batchRemoveUser = params => { return axios.get(`${baseUrl}/user/batchremove`, { params: params }) }

export const editUser = params => { return axios.get(`${baseUrl}/user/edit`, { params: params }) }

export const addUser = params => { return axios.get(`${baseUrl}/user/add`, { params: params }) }
