import { put, takeEvery } from 'redux-saga/effects'
import {getWea,getImg,getBasicList,deleteByid,getHighList,getCityList,getCity,deleteCityById1,getOrderList} from '../utils/api'

function* fetchUser(action) {
  
  yield put({ type: "changeTitle", title:action.title });
}
function* weather() {
  const res = yield getWea();
  yield put({ type: "getWeather1", weather:res });
}
function* AsyncgetImg() {
  const res = yield getImg();
  yield put({ type: "AsyncgetImg", imgList:res });
}

function* AsyncBasicList(action) {
  const res = yield getBasicList({page:action.page});
  yield put({ type: "AsyncBasicList", basicList:res });
}

function* AsyncDeleteById(action) {
  const res = yield deleteByid({id:action.id});
  yield put({ type: "AsyncDelete", res });
}
function* AsyncHighList() {
  const res = yield getHighList();
  yield put({ type: "AsyncHighList", res });
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
  yield takeEvery("changeTitle1", fetchUser);
  yield takeEvery('getWeather',weather);
  yield takeEvery('getImg',AsyncgetImg);
  yield takeEvery('getBasicList',AsyncBasicList);
  yield takeEvery('deleteById',AsyncDeleteById);
  yield takeEvery('getHighList',AsyncHighList);
  yield takeEvery('getCityList',AsyncCityList);
  yield takeEvery('getCity',AsyncCity);
  yield takeEvery('deleteCityById',AsyncDeleteCityById);
  yield takeEvery('getOrderList',AsyncGetOrderList);

}


export default mySaga;