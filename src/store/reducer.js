const defaultState = {
  pageTitle: sessionStorage.getItem("pageTitle") || "首页",
  city: "",
  wea: "",
  photolist: [],
  basictablelist: [],
  hightablelist: [],
  key: [],
  deletekey: "none",
  cityList: [],
  citys: [],
  result: -1,
  orderList:[],
  orderTotle:''
};

const reducer = (state = defaultState, action) => {
  action = action || { type: "" };
  switch (action.type) {
    case "CHANGE_PAGE_TITLE":
      return {
        ...state,
        pageTitle: action.pageTitle,
      };
    case "GET_WEATHER":
      return {
        ...state,
        city: action.city,
        wea: action.wea,
      };
    case "GET_PHOTO_LIST":
      return {
        ...state,
        photolist: action.photolist,
      };
    case "GET_BASIC_TABLE_LIST":
      return {
        ...state,
        basictablelist: action.basictablelist,
      };
    case "GET_HIGH_TABLE_LIST":
      return {
        ...state,
        hightablelist: action.hightablelist,
      };
    case "CHANGE_BASIC_KEY":
      return {
        ...state,
        key: action.key,
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        deletekey: action.deletekey,
      };
    case "AsynCity":
      return {
        ...state,
        citys: action.res.cts,
      };
    case "AsynDeleteCityById":
      if (action.res.status === 0) {
        return {
          ...state,
          result: action.res.status,
        };
      } else {
        return {
          ...state,
          result: action.res.status,
        };
      }

    case "AsynCityList":
      if (action.res.status === 0) {
        return {
          ...state,
          cityList: action.res.result,
        };
      } else {
        return state;
      }
    case "AsyncDelete":
      console.log(action);
      return state;
    case "asyncGetOrderList":
      return {
        ...state,
        orderList: action.res.result,
        orderTotal: action.res.total,
      };

    default:
      return state;
  }
};
export default reducer;
