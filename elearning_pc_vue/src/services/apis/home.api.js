import axios from "../index";

export function fetch_a(url, config){
    return axios.get(url, config);
}

export function fetch_b(url, config){
    return axios.get(url, config);
}










// auth:wxy  2018 03 19 
// 对应的mock_list使用这个方法 直接获取数据
export function shuju(params) {
  return axios({
    url: 'http://admin.test.moxueyuan.net/mock_list/mock_list',
    method: 'get',
    params: params || {}
  });
}
export function headlineList(params) {
  return axios({
    url: 'http://admin.test.moxueyuan.net/headlineList',
    method: 'get',
    params: params || {}
  });
}