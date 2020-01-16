/* eslint-disable */
import http from './http'
import qs from 'qs';
export default {
    //统一api接口管理
    login: (data) => http.post('/perms/api/v1/perm/login', data),

}