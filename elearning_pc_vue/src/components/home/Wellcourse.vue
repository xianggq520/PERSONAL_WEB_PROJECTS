<template>
    <div id="Wellcourse">
       <div class="Wellcourse_tit">
           <div class="tit_well">
               <icon name="Course" scale="2" class="CourseIcon"></icon>
               精品课程
           </div>
           <div class="more">more <icon name="rightJT" scale="2" class="rightJTIcon"></icon></div>
       </div>

       <div class="Wellcourse_cont">
             <ul>
                 <li  v-for="item in newlist"  v-bind:style="{backgroundImage: 'url(' + item.thumbnail_pic_s + ')'}">
                     <img src="static/images/home/home_jingpinkecheng_jioabiao.png" class="jpcousrse_pic">
                     <h3 class="well_coirse_Stit">测试课程</h3>
                     
                     <!-- 鼠标放入显示 -->
                     <div class="Wellcourse_text">
                         <h3>测试课程</h3>
                         <p>测试课程1测试课程1测试课程1测试课程1测试课程1测试课程1测试课程1测试课程1...</p>
                     </div>
                 </li>
             </ul>
       </div>
    </div>
</template>
<script>
import { shuju } from '@/services/apis/home.api.js' ;

export default {
  name: "Wellcourse",
  data () {
    return {
     newlist:[]
          
    }
  },
   components: {
       
      },
       
 created(){
        this.getList();
    },

  computed: {
      
  },

  mounted() {
    
        },
  methods:{
      getList(){
          shuju().then(res=>{
                    this.newlist = res.data.articles;
                });
      }
  }
};
</script>
<style lang="scss" scoped>
    #headline{
        width: $mainWidth;
    }
    .Wellcourse_tit{
        height: 40px;
        overflow: hidden;
        width: 100%;
        background-image: url('../../../static/images/home/home_jingpinkecheng_xiushi.png');
        background-size: 100% 4px;
        background-position: 0 bottom;
        background-repeat: no-repeat;
    }
    .CourseIcon{
        position: relative;
        top: 2px;
    }
    .rightJTIcon{
        position: relative;
        top: 4px;
    }
    .more{
        float: right;
        font-size: 18px;
        cursor: pointer;
    }
    .tit_well{
        float: left;
        font-size: 18px;
    }
    .Wellcourse_cont{
        width: 100%;
    }
    .Wellcourse_cont ul{
        width: 1220px;
        margin-left: -20px;
        overflow: hidden;
    }
    .Wellcourse_cont li{
        width: 224px;
        height: 168px;
        margin: 12px 0 0 20px;
        float: left;
        position: relative;
        background-size: 100% 100%;
        background: red;
    }
    .Wellcourse_cont li:hover .Wellcourse_text{
        display: block;
    }
    .Wellcourse_cont li:hover .well_coirse_Stit{
        display: none;
    }
    .jpcousrse_pic{
        position: absolute;
        left: 00px;
        top: 0px;
        z-index: 5;
        width: 77px;
        height: 77px;
    }
    .well_coirse_Stit{
        position: absolute;
        bottom: 0;
        z-index: 5;
        width: 100%;
        height: 30px;
        text-align: center;
        font-size: 16px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        line-height: 30px;
    }
    .Wellcourse_text{
        display: none;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 10;
        position: absolute;
        top: 0px;
        left: 0px;
        text-align: center;
        color: #fff;
        cursor: pointer;
         h3{
            width: 224px;
            font-size: 14px;
            padding: 5px;
            word-wrap: break-word;
            margin-bottom: 0;
            padding-top: 5%;
        }
        p{
            width: 224px;
            font-size: 14px;
            padding: 5px;
            word-wrap: break-word;
        }
    }
    
</style>
