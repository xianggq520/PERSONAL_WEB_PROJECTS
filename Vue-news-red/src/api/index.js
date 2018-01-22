import fetch from '../utils/fetch.js'

export function getInfo(token) {
    return fetch({
        url: '/@appapi/user/index/getUserInfo',
        method: 'get',
        params: {token}
    });
}

export function bunner(){
	return fetch({
		url:'News/banner',
		method: 'get'
	});
}