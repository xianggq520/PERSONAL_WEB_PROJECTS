import fetch from '../utils/fetch.js'

// 暂时无用，post请求 data
export function fetchSubmitData(data) {
  console.log(data)
  return fetch({
    //url: 'http://mxy.com/admin.php/monitor/docConvert/getData?&YII_CSRF_TOKEN=1bd1c64c6874a0d81b6b637cb2fe26f5fac390eb',
      url: '/@appapi/questionnaire/index',
      method: 'post',
      data: data
  });
}

//get请求 params
export function articleDetail(params){
	return fetch({
		url: 'News/new_detail',
		method: 'get',
		params: params || {}
	});
}