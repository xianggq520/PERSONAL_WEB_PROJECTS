import Vue from 'vue'
import Router from 'vue-router'

import HomeRoutes from "./home";
import OnlineCourseRoutes from "./online_course";


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...HomeRoutes,
  ...OnlineCourseRoutes,
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
    document.title = to.meta.title || "魔学院定制";
    console.log(router.currentRoute, to, from, next);
    next(); 
})

// 全局路由后置守卫（或者全局路由后置钩子）
router.afterEach(route => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.onscroll = null
})

export default router;