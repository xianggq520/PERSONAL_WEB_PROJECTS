<template>
    <div id="app">
        <HeadBar :title="title"></HeadBar>
            <transition
                    enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutRight"
            >
              <keep-alive>
                <router-view @title="change" :title="title"></router-view>
              </keep-alive>
            </transition>
        <FooterBar :showNav="showNav"></FooterBar>
    </div>
</template>

<script>
    import HeadBar from './components/common/Header.vue'
    import FooterBar from './components/common/Footer.vue'
    
    export default {
        
        name: 'app',
        components: {
            HeadBar,
            FooterBar
        },
        data(){
            return{
                title:"IT",
                showNav: true
            }
        },
        watch:{
            '$route': function (to, from){
                this.routeChange();
            }
        },
        methods:{
            change(title) {
                this.title = title;
            },
            routeChange(){
                let path = this.$route.path;
                if(path === '/' || path==='/home' || path==='/video' || path==='/musiclist'  || path==='/jokelist'){
                    this.showNav = true;
                }else{
                    this.showNav = false;
                }
            }


        },
        created (){
            
            this.routeChange();
        },
        mounted () {
            window.setTimeout(() => {
                console.log(this.$el);
                console.log(document);
                document.documentElement.scrollTop = 0
                document.body.scrollTop = 0
            }, 250)
            //注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
            //mounted: function () {
            //   this.$nextTick(function () {
            //     // Code that will run only after the
            //     // entire view has been rendered
            //   })
            // }
        }
    }
</script>

<style>

    body, html {
        margin: 0;
        padding: 0;
    }
</style>
