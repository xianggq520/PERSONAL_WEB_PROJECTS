
const routerList = [
	{
		path: '/jokelist',
		name: 'jokelist',
		component: resolve =>{require(['../views/my/JokeList.vue'], resolve)}
	}
];

export default {
	routerList
}