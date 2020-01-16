/* eslint-disable */
import Axios from 'axios'
// import {TokenKey,userInfo,getToken,getUserInfo} from "@/utils/auth";
import {
  Message
} from 'element-ui'
import store from '@/store'

// create an axios instance
const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 0 // request timeout
})

// // request interceptor
// service.interceptors.request.use(
//   config => {
//     //config.headers['secureKey'] = 'fc9eabfba6a64109abd40849dedfd5ea'
//     if (getToken()) {
//       config.headers[TokenKey] = getToken()
//     }
//     if(getUserInfo()&&getUserInfo().secureKey){
//       config.headers['secureKey'] = getUserInfo().secureKey
//     }else {
//       config.headers['secureKey'] = 'fc9eabfba6a64109abd40849dedfd5ea'
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// // response interceptor
// service.interceptors.response.use(
//   response => {
//     if(response.config.responseType==='arraybuffer'){
//       return response
//     }else{
//       const res = response.data;
//       if(res.status===200){
//         return res
//       }else if(res.status===401){
//         localStorage.removeItem('userActive');
//         localStorage.removeItem('role');
//         localStorage.removeItem('userInfo');
//         localStorage.removeItem('token');
//         location.reload()
//       }else{
//         Message.error(res.message);
//         return res;
//       }
//     }

//   },
//   (error) => {
//     console.log(error) // for debug
//     if(error.response){
//       if(error.response.data.status===401){
//         Message({
//           message: error.response.data.message,
//           type: 'error',
//           duration: 3 * 1000,
//           onClose(){
//             localStorage.removeItem('userActive');
//             localStorage.removeItem('role');
//             localStorage.removeItem('userInfo');
//             localStorage.removeItem('token');
//             location.reload()
//           }
//         })
//       }else {
//         Message({
//           message: error.response.data.message,
//           type: 'error',
//           duration: 5 * 1000
//         })
//       }

//     }else{
//       Message({
//         message: error.message,
//         type: 'error',
//         duration: 5 * 1000
//       })
//     }
//     // Message({
//     //   message: error.message,
//     //   type: 'error',
//     //   duration: 5 * 1000
//     // })
//     // return Promise.reject(error)
//   }
// )

export default {
  service,
  get: (url, params) => {
    return service({
      url,
      maxContentLength: 600000,
      method: 'get',
      params
    })
  },
  post: (url, data, config) => {
    return service({
      url,
      method: 'post',
      data
    })
  }
}
