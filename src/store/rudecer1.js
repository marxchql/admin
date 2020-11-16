const defaultState = {
  title: sessionStorage.getItem('title') || '首页',
  city: '',
  weather: '',
  imgList: [],
  basicList: [],
  heighList: [],
  total: '',
  cityList: [],
  citys: [],
  result: -1,
  orderList:[],
  orderTotle:''
}

const reducer = (state = defaultState, action) => {
  action = action || { type: '' };
  switch (action.type) {
    case 'changeTitle':
      return {
        ...state,
        title: action.title
      }
    case 'getWeather1':
      return {
        ...state,
        city: action.weather.city,
        weather: action.weather.wea
      }
    case 'AsyncgetImg':
      return {
        ...state,
        imgList: action.imgList.list
      }
    case 'AsynCity':
      return {
        ...state,
        citys: action.res.cts
      }
    case 'AsynDeleteCityById':
      if (action.res.status === 0) {
        return {
          ...state,
          result: action.res.status
        }
      } else {
        return {
          ...state,
          result: action.res.status
        }

      }

    case 'AsynCityList':
      if (action.res.status === 0) {
        return {
          ...state,
          cityList: action.res.result
        }
      } else {
        return state
      }

    case 'AsyncHighList':
      return {
        ...state,
        heighList: action.res.result
      }
    case 'AsyncBasicList':
      const basicList = action.basicList.result;
      const NewBasic = basicList.map((item) => {
        item['sex'] = item['sex'] === 1 ? '男' : '女';
        switch (item['state']) {
          case 1:
            item['state'] = '咸鱼一条'
            break
          case 2:
            item['state'] = '风华浪子'
            break
          case 3:
            item['state'] = '北大才子'
            break
          case 4:
            item['state'] = '百度FE'
            break
          case 5:
            item['state'] = '创业者'
            break
          default:
            break;
        }
        switch (item['interest']) {
          case 1:
            item['interest'] = '游泳'
            break
          case 2:
            item['interest'] = '打篮球'
            break
          case 3:
            item['interest'] = '踢足球'
            break
          case 4:
            item['interest'] = '跑步'
            break
          case 5:
            item['interest'] = '爬山'
            break
          case 6:
            item['interest'] = '骑行'
            break
          case 7:
            item['interest'] = '桌球'
            break
          case 8:
            item['interest'] = '麦霸'
            break
          default:
            break;
        }
        item['isMarried'] = item['isMarried'] === 1 ? '已婚' : '未婚';
        item['key'] = item['_id'];
        return item
      })
      return {
        ...state,
        basicList: NewBasic,
        total: action.basicList.total
      }

    case 'AsyncDelete':
      console.log(action)
      return state
    case 'asyncGetOrderList':
      return {
        ...state,
        orderList:action.res.result,
        orderTotal:action.res.total
      }

    default:
      return state;
  }
}

export default reducer;