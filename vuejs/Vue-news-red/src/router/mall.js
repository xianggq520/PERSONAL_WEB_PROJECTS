
const routerList = [
	{
		path: '/music',
		name: 'music',
		component: resolve => {require(['../views/mall/Music.vue'], resolve)} //按需加载
	},
	{
		path: '/musicList',
		name: 'musicList',
		component: resolve => {require(['../views/mall/MusicList.vue'], resolve)} //按需加载
	},
	{
		path: '/musicplayer',
		name: 'musicplayer',
		component: resolve => {require(['../views/mall/MusicPlayer.vue'], resolve)} //按需加载

	}
];

export default {
	routerList
}