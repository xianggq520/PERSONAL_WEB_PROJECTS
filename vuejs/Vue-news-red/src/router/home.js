 
const Home = resolve => {require(['../views/index/Home.vue'], resolve)} //按需加载

const routerList = [
	{ 
        path:'/', 
        redirect:'home' 
    }, 
	{
		path: '/home',
		name: 'home',  //首字母通常大写 Home
		component: Home //不要引号，不是字符串  //resolve => {require(['../views/index/Home.vue'], resolve)} //懒加载
	},
	{
		path: '/article/:id',
        name: 'article',
        component: resolve => {require(['../views/index/Article.vue'], resolve)},
        meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '文章详情'
        },
        beforeEnter: (to, from, next) => { //路由独享守卫
            // ...
            next();
        }
		
	},
	{
        path: '*',  
        redirect: '/home'  //1.重定向(一个路径)； 2重定向的目标也可以是一个命名的路由： { path: '*', redirect: { name: 'home' }}; 3.一个方法
    },
];

export default {
	routerList
}