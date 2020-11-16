import http from './http';
// import obj from '../assets/js/admin';

// 天气接口
export const getWea = (params) => http.get(`https://v0.yiketianqi.com/api?version=v61&appid=88231548&appsecret=MVZQloP8`, params)

export const getImg = (params) => http.get('/pics/list',params)

export const getBasicList = (params) => http.get('/tables/basic/list',params)
export const getHighList = (params) => http.get('/hightables/list',params)
export const deleteByid = (params) => http.post('/tables/basic/delete',params)
export const getCityList = (params) => http.post('/cities/manage/list',params)

// 城市列表
export const getCity = (params) => http.get('/cities/list',params)
export const deleteCityById1 = (params) => http.post('/cities/manage/del',params)
export const addCity = (params) => http.post('/cities/manage/add',params)
export const getOrderList = (params) => http.post('/orders/list',params)
export const finishOrder1 = (params) => http.post('/orders/over',params)
