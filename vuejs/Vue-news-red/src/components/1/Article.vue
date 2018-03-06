<template>
    <div class="content">
        字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"： {{$route.path}} <br>
        完成解析后的 URL，包含查询参数和 hash 的完整路径： {{$route.fullPath}} <br>
        动态参数： {{$route.params.id}} <br>
        一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象： {{$route.params}} <br>
        hash: {{$route.hash}} <br>
        当前路由名称： {{$route.name}} <br>
        <!-- 一个数组，包含当前路由的所有嵌套路径片段的 路由记录：{{$route.matched}}  -->

        <router-link :to="{ path: 'article', query:{ id: 'D7PPUF3M000187VE' }}" >跳转,还是跳转到本页面，但是修改id值</router-link> 
        
        <h3>{{article.title}}</h3>
        <p class="ptime">{{article.ptime|time}} {{article.source}}</p>

        <!-- <router-link :to="{ path:'/article/D7S7OMHL0001875P/profile'}">
            <h2>profile</h2>
        </router-link>
        <router-link :to="{ path:'/article/D7S7OMHL0001875P/userposts'}">
            <h2>userposts</h2>
        </router-link>
        <router-view></router-view> -->

        <p v-for="imgs in article.img ">
            <img :src="imgs.src" alt="" width="100%">
        </p>

        <div class="textcontent" v-html="article.body"></div>
        
    </div>
</template>
<style>

</style>
<script>
    // import api from '../api/api'
    import {Indicator} from 'mint-ui'
    import axios from 'axios'
    // import mockData from '../mock/index' //mock 模拟数据
    import { articleDetail } from './../api/article'  //真实的调用数据接口
    export default{
        data(){
            return {
                msg: 'hello vue',
                article: {},
                postid: null
            }
        },
        created(){
            console.log(this.$route);
            console.log(this.$router)
            //this.getArticle();
            // this.postid = String(this.$route.query.id);
            // this.getMockDate();
        },
        activated(){
            console.log("sss1")
            this.$emit('title', '文章详情');
            this.article = {};
            this.getArticle();
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
        },
        mounted: function() {
            window.scrollTo(0, 0)
        },
        //watch和beforeRouteUpdate 响应路由参数的变化;提醒一下，当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用,调用接口方法也不会执行
        // watch: {
        //     '$route' (to, from) {
        //       // 对路由变化作出响应...
        //       console.log('响应路由参数的变化');
        //       this.getArticle();
        //     }
        // },
        beforeRouteUpdate (to, from, next) { //组件内路由守卫（2.2新增）
            // react to route changes...
            // don't forget to call next()
            next(); //貌似主要用来修改 $router 内部信息; 确保要调用 next 方法，否则beforeRouteUpdate钩子就不会被 resolved(解析)
            console.log('组件内路由守卫',to,from);

            if(from.params.id !== to.params.id){
                this.getArticle();
            }
        },
        methods: {
            getArticle: function () {
                
                var data = {
                    postid:String(this.$route.params.id)
                    // postid:String(this.$route.params.id)
                     // postid:String(this.$route.params.id)  //不暴露url里边参数的写法
                }
                articleDetail(data).then(res => {
                    console.log(res)
                    Indicator.close();
                    (typeof res.data == "object") ? this.article = res.data.data : this.article = {"body": "该内容已删除"};
                    // console.log(this.article);
                }).catch((err) => {
                    console.log(err)
                })
                 
            },
            
        },
        components: {}
    }
</script>

<style scoped>
    .content {
        padding: 5%;
    }

    .ptime {
        color: #888;
        line-height: 30px;
    }

    .textcontent {
        line-height: 28px;
    }
</style>
