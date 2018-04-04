import axios from 'axios'
import qs from 'qs'

// 创建axios实例
const axiosService = axios.create({
    baseURL: process.env.baseURL, // api的base_url
    timeout: 5000,                  // 请求超时时间
    withCredentials: true,   //加了这段就可以跨域了
    headers: {'X-Requested-With' : 'XMLHttpRequest'},  // `headers` 是即将被发送的自定义请求头
    transformRequest: [function (data) { //  只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        data = qs.stringify(data)
        return data
    }]
});

//request拦截器, POST传参序列化
axiosService.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    console.log(config);
    const defaultParams = {
        version: process.env.VERSION,
        platform: 'wechat',
        // userId: getUserId(),
        // token: getToken()
    };
    
    if (config.method == 'post') {
        config.data = {
            ...defaultParams,
            ...config.data
        }
        
    } else if (config.method == 'get') {
        config.params = {
            ...defaultParams,
            ...config.params
        }
       
    }
    // config.headers['Accept'] = 'text/plain';
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    
    return config;
}, (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
});



// respone拦截器
axiosService.interceptors.response.use(
    response => {
        return response;
    },
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject(error);
    //     } else {
    //       return response.data;
    //     }
    error => {
        console.log('err' + error);// for debug
        return Promise.reject(error);
    }
)



export default axiosService;