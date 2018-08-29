import {query} from '../services/products';
export default {
  namespace: 'products',
  state: {
    products:[]
  },
  effects: {
  	*fetch({ payload }, { call, put }) {  
      const {data} = yield call(query);  //异步请求接口，是services中的请求数据的某个方法，返回值是请求到的数据对象
      // console.log(data);
  		yield put({ type: 'save',payload: data }); //使用put发起action,然后通过reducer修改state(将获取到的数据存储到state中)
  	},
  },
  reducers: {
    'delete'(state, { payload: id }) { //payload前端页面改变时的数据
      // console.log( state.products )
      //使用reducer修改的是state，state是一个对象，在reducer的返回值是一个对象；state是数组，返回值就是一个数组
      return { products: state.products.filter(item => item.id !== id) };  //将当前删除的数据过滤
    },
    'save'(state, {payload}) { 
    	return { ...state, products:payload };
    },
    'add'(state, {payload}) { 
      const newItem = [{
        name: payload,
        id: state.products.length+1,
        key: state.products.length+1
      }];
    	return { ...state, products:state.products.concat(newItem)};
    }
  },
  subscriptions: {
    setup({dispatch, history}){
      dispatch({type:'fetch'});
    }
  }
};