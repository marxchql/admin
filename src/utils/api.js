import http from './http';
import obj from '../assets/js/admin';

// 天气接口
export const getWea = (params) => http.get(`https://v0.yiketianqi.com/api?version=v61&appid=${obj.appId}&appsecret=${obj.appsecret}`, params)
export const getphotolist = (params) => http.get(`http://pudge.wang:3000/api/pics/list`, params)

export const getbasictable = (params) => http.get(`/tables/basic/list`, params)

export const deletebasictableitem = (params) => http.post(`/tables/basic/delete`, params)


// 城市新增
export const getCityList = (params) => http.post('/cities/manage/list',params)

export const getCity = (params) => http.get('/cities/list',params)
export const deleteCityById1 = (params) => http.post('/cities/manage/del',params)
export const addCity = (params) => http.post('/cities/manage/add',params)
export const getOrderList = (params) => http.post('/orders/list',params)
export const finishOrder1 = (params) => http.post('/orders/over',params)

export const gethightablelist = (params) => http.get(`/hightables/list`, params)

// export const getphotolist=()=>{
//   return http.get("http://pudge.wang:3000/api/pics/list")
// }

