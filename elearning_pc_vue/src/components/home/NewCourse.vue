<template>
  <div class="new_course">
    <div class="new_title">
      <div class="new_tit">
        <icon name="Course" scale="2" class="new_icon"></icon>
        最新课程
      </div>
      <div class="line_more">
        more
        <icon name="rightJT" scale="2" class="more_icon"></icon>
      </div>
    </div>
    <div class="new_content">
      <ul>
        <li v-for="item in newlist"  v-bind:style="{backgroundImage: 'url(' + item.thumbnail_pic_s + ')'}">
          <span class="new_well"></span>
          <div class="new_large">
            <h4>{{item.title | capitalize}}</h4>
            <p>789</p>
          </div>
          <div class="new_small">
            <p>{{item.title | capitalize}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import { shuju } from '@/services/apis/home.api.js' ;
  import {capitalize} from '../../filters/index.js';
  export default {
    name: "new_course",
    data() {
      return {
        newlist:[]
      };
    },
    filters:{
      capitalize
    },
    created(){
      this.getList();
      //this.interdiao();
    },
    methods: {
      getList(){
        shuju().then(res=>{
          this.newlist = res.data.articles;
          console.log(this.newlist)
        });
      }
    }
  };
</script>
<style scoped>
  .new_course{
    width: 950px;
    float: left;
  }
  /*最新课程*/
  .new_title{
    background:url(/static/images/home/course/home_zuixinkecheng_xiushi.png) no-repeat bottom;
    height:54px;
  }
  .new_tit{
    height: 50px;
    float: left;
    font-size: 18px;
    color: #333;
    line-height: 48px;
    padding-left: 20px;
  }
  .new_icon{
    position: relative;
    top:3px;
  }
  .line_more{
    display: inline-block;
    width: 60px;
    height: 50px;
    float: right;
    line-height: 50px;
    color: #4c4c4c;
  }
  /*更多图标*/
  .more_icon{
    float: right;
    position: relative;
    top:17px;
  }
  /*最新课程*/
  .new_content ul li{
    list-style: none;
    position: relative;
    width: 224px;
    height: 168px;
    margin: 16px 15px 0 1px;
    float: left;
    cursor: pointer;
  }
  .new_content ul li:first-child{
    width: 468px;
    height: 351px;
    margin: 19px 18px 0px 0px!important;
    float: left;
  }
  .new_content ul li:nth-child(2) {
    margin: 19px 14px 0 0;
  }
  .new_content ul li:nth-child(3) {
    margin: 19px 0 0 0!important;
  }
  .new_content ul li:nth-child(4) {
    margin: 15px 14px 0 0!important;
  }
  .new_content ul li:nth-child(odd) {
    margin: 15px 0 0 0;
  }
  .new_content ul li:nth-child(7) {
    margin: 16px 21px 0 0!important;
  }
  .new_small{
    position: absolute;
    width: 100%;
    height: 30px;
    bottom: 0;
    opacity: 0.6;
    line-height: 30px;
    background: #000;
    z-index: 100;
    color: #FFFFFF;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  .new_large{
    display: none;
    width: 100%;
    height: 100%;
    padding: 5px;
    text-align: center;
    overflow: hidden;
    opacity: 0.8;
    color: #FFFFFF;
    background-color: #000;
    z-index: 99999;
  }
  .new_content ul li:hover .new_large{
    display: block;
  }
  .new_content ul li:hover .new_small{
    display: none;
  }
  .new_well{
    position: absolute;
    display: inline-block;
    width: 77px;
    height: 77px;
    top: 0;
    left: 0;
    background: url(/static/images/home/course/home_jingpinkecheng_jioabiao.png) no-repeat;
  }
</style>
