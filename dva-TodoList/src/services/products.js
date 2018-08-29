// import request from '../utils/request';

export function query() {
  return new Promise((res, rej)=>{
    setTimeout(res({
      data: [
      	{name: 'dva',id: 1, key: 1},
      	{name: 'antd',id: 2, key: 2}
      ]
    }), 500);
   })
  // return request('/api/user');
}
