/**
 * Created by Administrator on 2016/12/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import store from '../store/index'
// import Home from '../components/Home.vue'
// import Video from '../components/Video.vue'
// import Article from '../components/Article.vue'
// import videoplayer from '../components/VideoPlayer.vue'
// import JokeList from '../components/JokeList.vue'
// import musiclist from '../components/MusicList.vue'
// import music from '../components/music.vue'
// import musicplayer from '../components/MusicPlayer.vue'
// import wxlist from '../components/WxList.vue'
// import wxarticle from '../components/WxArticle.vue'
// import movie from '../components/movie.vue'
// import moviedetial from '../components/MovieDetail.vue'
// import photo from '../components/photo.vue'
// import view from '../components/PhotoView.vue'
// import lyric from '../components/Lyric.vue'
// import coding from '../components/Coding.vue'
// import zhihu from '../components/Zhihu.vue'
// import sport from '../components/Sport.vue'
// import zhihuarticle from '../components/zhihuArticle.vue'
// import login from '../components/User/Login.vue'
// import profile from '../components/Profile.vue'
// import userposts from '../components/UserPosts.vue'
 
const Home = resolve => {require(['../components/Home.vue'], resolve)} //按需加载
const Video = resolve => {require(['../components/Video.vue'], resolve)} //按需加载
const Article = resolve => {require(['../components/Article.vue'], resolve)} //按需加载
const videoplayer = resolve => {require(['../components/VideoPlayer.vue'], resolve)} //按需加载
const JokeList = resolve => {require(['../components/JokeList.vue'], resolve)} //按需加载
const musiclist = resolve => {require(['../components/MusicList.vue'], resolve)} //按需加载
const music = resolve => {require(['../components/music.vue'], resolve)} //按需加载
const musicplayer = resolve => {require(['../components/MusicPlayer.vue'], resolve)} //按需加载
const wxlist = resolve => {require(['../components/WxArticle.vue'], resolve)} //按需加载
const wxarticle = resolve => {require(['../components/Article.vue'], resolve)} //按需加载
const movie = resolve => {require(['../components/movie.vue'], resolve)} //按需加载
const moviedetial = resolve => {require(['../components/MovieDetail.vue'], resolve)} //按需加载
const photo = resolve => {require(['../components/photo.vue'], resolve)} //按需加载
const view = resolve => {require(['../components/PhotoView.vue'], resolve)} //按需加载
const lyric = resolve => {require(['../components/Lyric.vue'], resolve)} //按需加载
const coding = resolve => {require(['../components/Coding.vue'], resolve)} //按需加载
const zhihu = resolve => {require(['../components/Zhihu.vue'], resolve)} //按需加载
const sport = resolve => {require(['../components/Sport.vue'], resolve)} //按需加载
const zhihuarticle = resolve => {require(['../components/zhihuArticle.vue'], resolve)} //按需加载
const login = resolve => {require(['../components/User/Login.vue'], resolve)} //按需加载
const profile = resolve => {require(['../components/Profile.vue'], resolve)} //按需加载
const userposts = resolve => {require(['../components/UserPosts.vue'], resolve)} //按需加载




const routes = [
    //最好都加上name属性，
    //component: resolve => System.import('../components/User/Login.vue') //这种写法是路由懒加载的写法
    {
        path: '/home',
        name: 'home', //命名路由
        component: Home
    }, 
    { 
        path:'/', 
        redirect:'home' 
    }, 
    {
        path: '/video',
        name: 'video',
        component: Video
    }, 
    {
        // path: string;
        // component?: Component;
        // name?: string; // 命名路由
        // components?: { [name: string]: Component }; // 命名视图组件
        // redirect?: string | Location | Function;  //
        // props?: boolean | string | Function; //redirect 后面应该是字符串
        // alias?: string | Array<string>;
        // children?: Array<RouteConfig>; // 嵌套路由  //path子路由不能前置“/”
        // beforeEnter?: (to: Route, from: Route, next: Function) => void;
        // meta?: any;

        // // 2.6.0+
        // caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
        // pathToRegexpOptions?: Object; // 编译正则的选项
        
        path: '/article/:id',
        name: 'article',
        component: Article,
        meta: {  //路由元信息
            requiresAuth: false,
            _menuName: '文章列表'
        },
        beforeEnter: (to, from, next) => { //路由独享守卫
            // ...
            next();
        }
        /*children: [
            {
                path: '',
                name: 'profile',
                component: profile
            },
            {
                path: '/userposts',
                name: 'userposts',
                component: userposts
            }
        ]*/
    }, 
    // <router-link tag="section" class="m_article clearfix" :to="{ path: 'article', query: { id: item.postid}}">
    // { path: '/article/:id', name:'article', component: Article }, //动态路由匹配，动态路径参数（同一个组件渲染，但是id各不相同） //推荐这种写法 // <router-link class="link-type" :to="{ name: 'questionnaire/update', params: { id: scope.row.id }}"> 编辑 </router-link>
    // 这两种传参效果是一模一样的
    // { path: '/article', name:'article', component: Article }, //不推荐 // 不暴露url里边参数的写法，但是当你跳到别的页面或者刷新页面的时候参数会丢失; pc端传递的值显示在url中，存在安全隐患，客户不小心修改了url那样就会出错，移动端就无所谓了，如何才能不显示在url中，同样很简单，但是需要给映射的路径起一个别名，通过name来取别名
    {
        path: '/player',
        name: 'player',
        component: videoplayer
    }, 
    {
        path: '/jokelist',
        name: 'jokelist',
        component: JokeList
    }, 
    {
        path: '/musiclist',
        name: 'musiclist',
        component: musiclist
    }, 
    {
        path: '/music',
        name: 'music',
        component: music
    }, 
    {
        path: '/musicplayer',
        name: 'musicplayer',
        component: musicplayer
    }, 
    {
        path: '/wxlist',
        name: 'wxlist',
        component: wxlist
    }, 
    {
        path: '/wxarticle',
        name: 'wxarticle',
        component: wxarticle
    }, 
    {
        path: '/movie',
        name: 'movie',
        component: movie
    }, 
    {
        path: '/moviedetial',
        name: 'moviedetial',
        component: moviedetial
    }, 
    {
        path: '/photo',
        name: 'photo',
        component: photo
    }, 
    {
        path: '/view',
        name: 'view',
        component: view
    }, {
        path: '/lyric',
        name: 'lyric',
        component: lyric
    }, 
    {
        path: '/coding',
        name: 'coding',
        component: coding
    }, 
    {
        path: '/sport',
        name: 'sport',
        component: sport
    }, 
    {
        path: '/zhihu',
        name: 'zhihu',
        component: zhihu
    }, 
    {
        path: '/zhihuarticle',
        name: 'zhihuarticle',
        component: zhihuarticle
    }, 
    {
        path: '/login',
        meta: {
            requireAuth: false,
        },
        component: login
    }, 
    {
        path: '*',  
        redirect: '/home'  //1.重定向(一个路径)； 2重定向的目标也可以是一个命名的路由： { path: '*', redirect: { name: 'home' }}; 3.一个方法
    },
    // {path: '*', redirect: '/404', hidden: true, meta: {_menuName: '404'}}
]

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