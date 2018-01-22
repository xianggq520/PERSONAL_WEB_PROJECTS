<template>
    <div class="home">
        <div id="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in DONE_INDEX_BANNER"><img :src="item.imgsrc" alt="">
                    <span class="swiper-title">{{item.title}}</span>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <!--文章 list-->
        <div id="content-list">
            <p >邮箱：{{Email}}</p>
            <p v-my-demo="{ color: 'red', text: 'hello!' }">邮箱+当前组件data:{{countAlias}} </p>
            用户名：{{UserName}}
            a+b的值:{{c}}
            <!-- <router-link tag="section" class="m_article clearfix" :to="{ path: 'article', query: { id: item.postid}}"
                         v-for="item in DONE_INDEX_NEWS"> -->
            <router-link tag="section" class="m_article clearfix" :to="{ name: 'article', params: { id: item.postid}}"
                         v-for="item in DONE_INDEX_NEWS">
            <!-- 下边是不暴露url里边参数的写法 -->
            <!-- router-link tag="section" class="m_article clearfix" :to="{ name: 'article', params: { id: item.postid}}"
                         v-for="item in DONE_INDEX_NEWS"> -->

            <!-- :to="{ name: 'user', params: { username: 'evan' }, query: { foo: 'bar' }}" -->

                <a :href="{ path: 'article', query: { id: item.postid }}">
                    <div class="m_article_img">
                        <!-- <img :src="item.imgsrc"> -->
                        <img v-lazy="item.imgsrc">
                    </div>
                    <div class="m_article_info">
                        <div class="m_article_title">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="m_article_desc ">
                            <div class="m_article_desc_l">
                                <span class="m_article_channel">{{item.source}}</span>
                                <span class="m_article_time">{{item.ptime}} <p>{{'1510803490000' | time }}</p>  <p>{{'2680' | minutes }}</p></span>
                            </div>

                        </div>
                    </div>
                </a>
            </router-link>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    import Vue from 'vue'
    export default{
        myOption: 'hello!',
        name: 'home',
        data(){
            return {
                popupVisible: true,
                a:1,
                b:2,
            }
        },
        created(){
            var myOption = this.$options.myOption //仅仅能得到当前页面的自定义选项
            if (myOption) {
              console.log(myOption)
              console.log(this.$options);
            }

            console.log('组件钩子被调用')
            this.getNews();
            this.$emit('title', '首页');
            console.log('created先执行')
            if (!!this.DONE_INDEX_BANNER && this.DONE_INDEX_BANNER.length > 0) {} else {
                this.getBanners();
            };

            this.Stoast('令牌格式错误,应为36位UUID字符串');  //1.调用toast.js 插件
             
            // console.log(this.$myMethods)
            // this.$myMethods.Stoast("plugins")  //2.调用plugin.js 插件

            // Vue.myGlobalMethod('myGlobalMethod,myGlobalMethod');
            
            this.MoboToastTwo('MoboToastTwo');  //3. plugin.js  mixin
            
            // this.MoboToast('MoboToast'); //4. main.js  mixin

            this.conflicting();  //配合plugin.js里边的mixin-conflicting方法，两个对象键名冲突时，取组件对象的键值对；  值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

            

        },
        mounted(){
            this.updateMessage();
        },
        computed: {
            ...mapGetters(['DONE_INDEX_BANNER','DONE_INDEX_NEWS']),
            ...mapState({ //全局状态
                Email: state => state.data.Email,
                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                countAlias: function(state){  //老版本写法 可以调用this.popupVisible
                    console.log('computed后执行')
                    return state.data.Email+this.popupVisible;  //当前this指的是 new Vue实例，所以能调用到实例上边的data数据this.popupVisible
                    
                },
                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                UserName: state => state.data.UserName,  //一行显示可以省略return，一个参数可以省略参数（）,此处this不能访问this.popupVisible是，当前this指的不是 new Vue实例

                
            }),
            //上边写法类似下边写法；但是当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
            // Email(){
            //     return this.$store.state.data.Email
            // },
            // countAlias(){
            //     return this.popupVisible
            // },
            // countAlias1(){
            //     return this.$store.state.data.UserName
            // }
            c(){ //局部状态，这个状态严格属于单个组件，最好还是作为组件的局部状态
                return this.a+this.b;
            }
        },
        watch: {

        },
        methods: {
            ...mapActions([
                'FECTH_Push_Load_Stack', // 将 `this.FECTH_Push_Load_Stack()` 映射为 `this.$store.dispatch('FECTH_Push_Load_Stack')`
                'FECTH_Complete_Load'
                ]),
            //改为vuex获取数据
            getBanners:function () {
                console.log(this.$store.state)
                this.FECTH_Push_Load_Stack(); //loading动画显示
                //this.$store.dispatch('FECTH_INDEX_BANNER');  //调度 发送 派遣,Action 通过 store.dispatch 方法触发, store.dispatch 仍旧返回 Promise
                this.$store.dispatch('FECTH_INDEX_BANNER') //配合action异步使用（不是必须异步操作采用action），通过action调用mutation; 
                //this.$store.commit('updateMessage', value)//也可以通过this.$store.commit('updateMessage', value)，在没有异步操作的时候，直接调起mutation；修改store.state值
                .then( res => {
                    // console.log(res)
                    this.FECTH_Complete_Load(); //loading动画隐藏
                }).catch( err => {
                    console.log(err);
                })
            },
            getNews:function () {
                this.FECTH_Push_Load_Stack(); //loading动画显示
                this.$store.dispatch('FECTH_INDEX_NEWS')
                .then( res => {
                    // console.log(res);
                    this.FECTH_Complete_Load(); //loading动画隐藏
                }).catch( err => {
                    console.log(err);
                });
            },
            conflicting: function () {
              console.log('from self')
            },
            updateMessage: function(){
                console.log(this,this.$parent);
                console.log(this.$el); //当前组件的的元素
                console.log(this.$parent.$el); //当前组件的父组件元素； $el是在mounted中才会出现的，在created的时候是没有的,它指的是当前组件的的元素
            }
            
        }
    }
</script>
<style scoped>
    .home{
        margin-bottom: 69px;
    }
    #swiper { 
        width: 100%;
        max-height: 500px;
        height: auto;
        height: 200px;
        float: left;
    }

    #swiper img {
        width: 100%;
    }

    #title-list {
        width: 100%;
    }

    #title-list li {
        float: left;
        display: inline-block;
        text-align: center;
        width: 20%;
        padding: 10px 0;
    }

    .swiper-title {
        position: absolute;
        left: 3%;
        bottom: 30px;
        color: #eee;
    }

    .mint-popup {
        width: 100%;
    }

    .v-modal {
        background: rgba(255, 255, 255, 0.8) !important;
    }

    .mint-popup-top {
        top: 40px;
    }

    .mint-popup {
        background: rgba(255, 255, 255, 0.8) !important;
    }

</style>