<template>
    <div id="headline">
       <div class="headline_cont">

           <div class="headline_tit">
               <icon name="dididi" scale="2.5" class="laba"></icon>学习头条
           </div>

            <div class="scroll-wrap">
                <!-- <ul class="scroll-content" :style="{ top }">
                    <li v-for="item in newlist">{{item.home_address}}</li >  
                </ul> -->
                <swiper :options="swiperOption" ref="mySwiper">
                     <!--  -->
                    <swiper-slide v-for="slide in newlist" :key="slide.id">
                        <a class="url" href="javascript:;">{{slide.home_address}}</a>
                    </swiper-slide>
                </swiper>
            </div>

       </div>
    </div>
</template>
<script>
import { headlineList } from '@/services/apis/home.api.js' ;
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "headline",
  data () {
    return {
       swiperOption: {
            direction : 'vertical',
            height: 50,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            }
          },
      newlist:[],
      activeIndex: 0
    }
  },
   components: {
        swiper,
        swiperSlide
      },
       
 created(){
        this.getList();
        //this.interdiao();
    },

  computed: {
      swiper() {
          return this.$refs.mySwiper.swiper;
        }
  },

    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      this.swiper.slideTo(0, 1000, false);
        },
  methods:{
      getList(){
          headlineList().then(res=>{
                    this.newlist = res.data.listdatas;
                    console.log(this.newlist)
                });
      },
      interdiao(){
           setInterval(_ => {
                if(this.activeIndex <= this.newlist.length-2) {
                    this.activeIndex += 1;
                } else {
                    this.activeIndex = 0;
                }
                }, 3000);
            }
  }
};
</script>
<style scope>
   

    #headline{
        width: 100%;
        height: 50px;
        background: #FAFAFA;
    }
    .headline_cont{
        width: 1180px;
        padding-left: 20px;
        margin: 0 auto;
        line-height: 50px;
        font-size: 14px;
        color: #333;
    }
    .headline_tit{
        float: left;
        width: 120px;
        color: #f36f3a;
    }
    .laba{
        position: relative;
        top: 6px;
        left: -8px;
    }
    .scroll-wrap{
        float: left;
        width: 480px;
        height: 50px;
        overflow: hidden;
        }
    .scroll-content{
        position: relative;
        transition: top 0.7s;
        }
    .scroll-content li{
            line-height: 50px;
            text-align: left;
        }
    .url{
        height: 50px;
        display: block;
    }
    .swiper-slide .url {
      height: 100%;
      text-align: left;
    }
    .swiper-slide{
        height: 100%;
    }
</style>
