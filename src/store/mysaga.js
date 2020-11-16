import { put, takeEvery } from 'redux-saga/effects'
import { message } from 'antd';
import {getWea,getphotolist,getbasictable,deletebasictableitem ,gethightablelist,getCityList ,getCity ,deleteCityById1,getOrderList} from '../utils/api'


function* changePageTitle(action) {
  // console.log(action);
  yield put({type: "CHANGE_PAGE_TITLE", pageTitle: action.pageTitle});
 
}
function* changebasickey(action) {
  // console.log(action);
  yield put({type: "CHANGE_BASIC_KEY", key: action.key});
 
}
function* getphotolistsync(action) {
  // console.log(action);
  const res= yield getphotolist()
  console.log(res);
  yield put({type: "GET_PHOTO_LIST", photolist: res.list});
 
}
function* getweather(action) {
  // console.log(action);
  const  res= yield getWea()
  // console.log(res);
  yield put({
    type:"GET_WEATHER",
    city:res.city,
    wea:res.wea
})
}
function* deletebasicitem(action) {
  // console.log(action);
  const res= yield deletebasictableitem({
     id:action.id
   })
   const success = () => {
    message.success('删除成功');
  };
   if(res.status===0){
     yield put({
       type:"DELETE_SUCCESS",
       deletekey:"success"
     })
     success()
   }

}

function* getbasictablelist(action) {
  // console.log(action);
  const  res= yield getbasictable({page:action.current})
  // console.log(res);
  yield put({
    type:"GET_BASIC_TABLE_LIST",
    basictablelist:res.result
   
})
}

function* gethightablelistasync(action) {
  // console.log(action);
  const  res= yield gethightablelist({page:action.current})
  console.log(res);
  yield put({
    type:"GET_HIGH_TABLE_LIST",
    hightablelist:res.result
})
}


function* AsyncCityList(action) {
  const res = yield getCityList(action.params);
  yield put({ type: "AsynCityList", res });
}
function* AsyncCity() {
  const res = yield getCity();
  yield put({ type: "AsynCity", res });
}
function* AsyncDeleteCityById(action) {
  const res = yield deleteCityById1({id:action.params});
  yield put({ type: "AsynDeleteCityById", res });
}
function* AsyncGetOrderList(action) {
  delete action['type']
  console.log(action)
  const res = yield getOrderList(action);
  yield put({ type: "asyncGetOrderList", res });
}

function* mySaga() {
  yield takeEvery('changeTitle', changePageTitle);
  yield takeEvery('getweather',getweather)
  yield takeEvery('getphotolist',getphotolistsync)
  yield takeEvery('getbasictablelist',getbasictablelist)
  yield takeEvery('changekey',changebasickey)
  yield takeEvery('deletebasicitem',deletebasicitem)
  yield takeEvery('gethightablelist',gethightablelistasync)

  yield takeEvery('getCityList',AsyncCityList);
  yield takeEvery('getCity',AsyncCity);
  yield takeEvery('deleteCityById',AsyncDeleteCityById);
  yield takeEvery('getOrderList',AsyncGetOrderList);

}

export default mySaga;