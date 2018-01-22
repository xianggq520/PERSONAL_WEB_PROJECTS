import fetch from '../utils/fetch.js'

//get请求 params
export function login(params){
	return fetch({
		url: 'joke/index',
		method: 'post',
		params: params || {}
	});
}