import Vue from 'vue'
import Router from 'vue-router'

import HomeRoutes from "./home.routes";
import ShopcartRoutes from "./shopcart.routes";

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...HomeRoutes,
  ...ShopcartRoutes,
  {
    path:'*',
    redirect:'/home'
  }
];
 
let router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes
})

//全局路由前置守卫，还有路由独享的守卫，以及组件内的守卫
router.beforeEach((to, from, next) => {
  console.log(router.currentRoute, to, from, next);
  next(); 
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