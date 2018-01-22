import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import store from '../store/index.js'

import home from './home.js'
import task from './task.js'
import mall from './mall.js'
import my from './my.js'
import login from './login.js'

const routes = [ 
    ...home.routerList,
    ...task.routerList, 
    ...mall.routerList, 
    ...my.routerList,
    ...login.routerList,    
];

const router = new VueRouter({
    // mode: 'history',  //默认值: "hash" (浏览器环境) | "abstract" (Node.js 环境)
    scrollBehavior: () => ({y: 0}),
    routes
});


//全局路由前置守卫，还有路由独享的守卫，以及组件内的守卫
router.beforeEach((to, from, next) => {
    console.log(router.currentRoute)
    if (store.state.data.token) {
        next();
    } else {
        next();
        /* console.log("你还没有登录啦")
         if (to.meta.requireAuth==false) {
             next();
         }else {
             next({ path: '/login' })
         }*/

    }
})

// 全局路由后置守卫（或者全局路由后置钩子）
router.afterEach(route => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    window.onscroll = null
    // setTimeout(() => {
    //   store._mutations.completeLoad[0]()
    // }, 100)
})

export default router;
