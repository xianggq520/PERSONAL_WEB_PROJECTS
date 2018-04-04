'use strict'

import axios from 'axios'
import qs from 'qs'

let instance = axios.create({
    baseURL: process.env.baseURL,
    timeout: 5000,
    withCredentials: true, //加了这段就可以跨域了
    headers: { 'Access-Control-Allow-Origin': '*' }, // `headers` 是即将被发送的自定义请求头
    transformRequest: [function (data) { // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        console.log(data, "@@@@@@@@");
            
        return qs.stringify(data)
    }]
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers['Accept'] = 'text/plain';
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    console.log(config);
    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    response.headers['access'] = '*';
    return response;
}, function (error) {
    //  对响应错误做点什么
    return Promise.reject(error);
});

export default instance;








