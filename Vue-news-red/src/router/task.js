
const routerList = [
	{
		path: '/video',
		name: 'video',
		component: resolve => { require(['../views/task/Video.vue'], resolve)}
	},
	{
		path: '/videoplayer',
		name: 'videoplayer',
		component: resolve => {require(['../views/task/VideoPlayer.vue'], resolve)}
	}
]

export default {
	routerList
}