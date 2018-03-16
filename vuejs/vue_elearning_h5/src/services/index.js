'use strict'

import axios from 'axios'

let instance = axios.create({
    baseURL: process.env.baseURL,
    timeout: 5000,
    withCredentials: true,
    headers: { 'X-Requested-With': 'X-Requested-With' }
    //...
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data

    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

/* //post 请求方式
axiosService.fetchPost = function (url, params, config) {
    return new Promise((resolve, reject) => {
        axiosService.post(url, params, config)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    });
};

//GET 请求方式
axiosService.fetchGet = function (url, config) {
    return new Promise((resolve, reject) => {
        axiosService.get(url, config)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            });
    });
} */


export default instance;








