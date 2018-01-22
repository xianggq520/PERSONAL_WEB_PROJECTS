

const routerList = [
	{
		path: '/login',
		name: 'login',
		component: resolve => {require(['../views/login/Login.vue'], resolve)} //按需加载
	}
];

export default {
	routerList
}