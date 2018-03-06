<template>
    <div class="tabBar">
        <mt-tabbar v-model="selected" fixed v-show="showNav">
            <router-link to="/home" class="tabfoot">
                <mt-tab-item id="home">
                    <img slot="icon" src="../../assets/images/index/icon_f_homeh.png" height="38" width="37">
                    首页
                </mt-tab-item>
            </router-link>
            <router-link to="/video" class="tabfoot">
                <mt-tab-item id="video">
                    <img slot="icon" src="../../assets/images/index/icon_f_ehele.png" height="38" width="37">
                    视频
                </mt-tab-item>
            </router-link>
            <router-link to="/musiclist" class="tabfoot">
                <mt-tab-item id="musiclist">
                    <img slot="icon" src="../../assets/images/index/icon_f_eh.png" height="38" width="37">
                    音乐
                </mt-tab-item>
            </router-link>
            <router-link to="/jokelist" class="tabfoot">
                <mt-tab-item id="jokelist">
                    <img slot="icon" src="../../assets/images/index/icon_f_myh.png" height="38" width="37">
                    段子
                </mt-tab-item>
            </router-link>

            <!-- <mt-tab-item id="home">
                <img slot="icon" src="../assets/images/index/icon_f_homeh.png" height="38" width="37">
                首页
            </mt-tab-item>
            <mt-tab-item id="video">
                <img slot="icon" src="../assets/images/index/icon_f_ehele.png" height="38" width="37">
                视频
            </mt-tab-item>
            <mt-tab-item id="musiclist">
                <img slot="icon" src="../assets/images/index/icon_f_eh.png" height="38" width="37">
                音乐
            </mt-tab-item>
            <mt-tab-item id="jokelist">
                <img slot="icon" src="../assets/images/index/icon_f_myh.png" height="38" width="37">
                段子
            </mt-tab-item> -->
        </mt-tabbar>

        <!-- <section v-show="!showNav" @click="goBack" style="width: 100%">
            <p class="back"> < </p>
        </section> -->

    </div>
</template>
<script>
    
    export default{
        name: 'tabBar',
        data(){
            return {
                isBottom: true,
                selected: 'home',
            }
        },
        props: {
            showNav: {
                type: Boolean, ////这样可以指定传入的类型，如果类型不对，会警告
                default: true //这样可以指定默认的值
            }
        },
        created(){
            
        },
        computed: {
            route () {
                return this.$route.path
            }
        },
        methods: {
            goBack () {
                this.$router.back()
            }
        },
        watch: {
            selected: function (val, oldVal) { //如果使用 router-link to="/musiclist"  这个方法就不执行
                // 这里就可以通过 val 的值变更来确定
                console.log(val);
                // this.$router.push({ path: `${val}` });
            }
        }
    }
</script>
<style>
    .tabBar .mint-tabbar.is-fixed{
        z-index: 2006;
        margin-bottom: -1px;
    }
    .tabBar .tabfoot{
        display: block;
        padding: 7px 0;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-decoration: none;
    }
    .tabfoot a .mint-tab-item-label{
        color: #444;
    }
    .router-link-exact-active.router-link-active a .mint-tab-item-label{
        color: #0952D2;
    }
</style>